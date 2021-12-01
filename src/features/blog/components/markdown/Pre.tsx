import { MarkdownComponentProps } from './MarkdownComponentProps';

export const Pre = ({ children }: MarkdownComponentProps) => {
  return <pre className={'mt-2'}>{children}</pre>;
};
