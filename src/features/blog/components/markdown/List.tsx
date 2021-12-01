import clsx from 'clsx';
import { OrderedListProps, UnorderedListProps } from './MarkdownComponentProps';

export const List = ({ ordered, depth, children }: UnorderedListProps | OrderedListProps) => {
  const ListComponent = ordered ? 'ol' : 'ul';
  const classNames = clsx([
    {
      'list-disc': !ordered,
      'list-decimal': ordered,
      'mt-2': depth === 0,
    },
    'pl-8',
  ]);

  return <ListComponent className={classNames}>{children}</ListComponent>;
};
