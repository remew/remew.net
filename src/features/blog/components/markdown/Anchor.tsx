import { AnchorProps } from './MarkdownComponentProps';
import Link from 'next/link';

export const Anchor = ({ href, children, target, title }: AnchorProps) => {
  return (
    <Link href={href ?? ''}>
      <a
        target={target}
        title={title}
        className={'text-blue-500 visited:text-blue-300 hover:text-blue-100 underline duration-200'}
      >
        {children}
      </a>
    </Link>
  );
};
