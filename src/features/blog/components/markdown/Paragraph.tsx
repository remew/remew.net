import { MarkdownComponentProps } from './MarkdownComponentProps';

export const Paragraph = ({ children }: MarkdownComponentProps) => {
  return <p className={'mt-2'}>{children}</p>;
};
