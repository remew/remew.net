import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';
import clsx from 'clsx';
import { HeadingProps } from './MarkdownComponentProps';

export const Heading = ({ children, level, id }: HeadingProps) => {
  const className = clsx('font-bold', 'mt-4', 'group', 'relative', {
    'text-3xl': level === 1,
    'text-2xl': level === 2,
    'text-xl': level === 3 || level === 4 || level === 5,
  });
  const HeadRank = `h${level}` as `h${1 | 2 | 3 | 4 | 5 | 6}`;
  return (
    <HeadRank id={id} className={className}>
      <Link href={`#${id}`}>
        <a
          className={'absolute pr-1 -left-1 inset-y-0 hidden group-hover:flex items-center'}
          style={{ marginLeft: -20 }}
        >
          <AiOutlineLink size={20} />
        </a>
      </Link>
      {children}
    </HeadRank>
  );
};
