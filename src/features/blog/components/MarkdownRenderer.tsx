import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkHeadingId from 'remark-heading-id';
import rehypeRaw from 'rehype-raw';
import { rehypeAutoId } from '../../../lib/rehype-auto-id';
import { Anchor } from './markdown/Anchor';
import { Blockquote } from './markdown/Blockquote';
import { Code } from './markdown/Code';
import { Heading } from './markdown/Heading';
import { Hr } from './markdown/Hr';
import { Img } from './markdown/Img';
import { List } from './markdown/List';
import { Paragraph } from './markdown/Paragraph';
import { Pre } from './markdown/Pre';

const noop = () => null;

type Props = {
  markdown: string;
};
// https://github.com/remarkjs/react-markdown#appendix-b-components
export const MarkdownRenderer = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      components={{
        a: Anchor,
        blockquote: Blockquote,
        code: Code,
        h1: Heading,
        h2: Heading,
        h3: Heading,
        h4: Heading,
        h5: Heading,
        h6: Heading,
        hr: Hr,
        img: Img,
        ol: List,
        ul: List,
        p: Paragraph,
        pre: Pre,
        script: noop,
        // TODO: table
      }}
      remarkPlugins={[remarkGfm, remarkBreaks, remarkHeadingId]}
      rehypePlugins={[rehypeAutoId, rehypeRaw]}
    >
      {markdown}
    </ReactMarkdown>
  );
};
