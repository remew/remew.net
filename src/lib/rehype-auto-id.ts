import { visit } from 'unist-util-visit';
import { headingRank } from 'hast-util-heading-rank';
import { hasProperty } from 'hast-util-has-property';
import { toString } from 'hast-util-to-string';

class Slugger {
  dict = new Map<string, number>();
  slug(text: string): string {
    const count = this.dict.get(text) || 0;
    this.dict.set(text, count + 1);

    return count ? `${text}-${String(count)}` : text;
  }
  reset() {
    this.dict.clear();
  }
}

const slugger = new Slugger();

/**
 * Plugin to add `id`s to headings.
 */
export const rehypeAutoId = () => {
  return (tree: any) => {
    slugger.reset();

    visit(tree, 'element', (node) => {
      if (headingRank(node) && node.properties && !hasProperty(node, 'id')) {
        node.properties.id = slugger.slug(toString(node));
      }
    });
  };
};
