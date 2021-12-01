import { MarkdownComponentProps } from './MarkdownComponentProps';

export const Blockquote = ({ children }: MarkdownComponentProps) => {
  return <blockquote className={'italic border border-l-16 p-4 mt-2'}>{children}</blockquote>;
};
