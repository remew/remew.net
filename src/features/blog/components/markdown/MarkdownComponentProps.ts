import { CSSProperties, Key, PropsWithChildren } from 'react';
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';

export type MarkdownComponentProps<T = {}> = PropsWithChildren<
  {
    node: ReactMarkdownProps['node'];
    key?: Key | null;
  } & T
>;

export type AnchorProps = MarkdownComponentProps<{
  href?: string;
  title?: string;
  target?: string;
}>;
export type ImageProps = MarkdownComponentProps<{
  src?: string;
  alt?: string;
  title?: string;
}>;
export type CodeProps = MarkdownComponentProps<{
  inline?: boolean;
  className?: string;
}>;
export type HeadingProps = MarkdownComponentProps<{
  id?: string;
  level: number;
}>;
export type InputProps = MarkdownComponentProps<{
  checked: boolean;
  disabled: true;
  type: 'checkbox';
}>;
export type ListItemProps = MarkdownComponentProps<{
  index: number;
  ordered: boolean;
  checked?: boolean;
  className?: string;
}>;
export type UnorderedListProps = MarkdownComponentProps<{
  depth: number;
  ordered: false;
  className?: string;
}>;
export type OrderedListProps = MarkdownComponentProps<{
  depth: number;
  ordered: true;
  className?: string;
}>;
export type TableDataProps = MarkdownComponentProps<{
  style?: CSSProperties;
  isHeader: false;
}>;
export type TableHeaderProps = MarkdownComponentProps<{
  style?: CSSProperties;
  isHeader: true;
}>;
export type TableRowProps = MarkdownComponentProps<{
  isHeader: boolean;
}>;
