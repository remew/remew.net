import Link from 'next/link';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = {
  href: string;
  className?: string;
};
export const BlogLink = ({ href, className, children }: PropsWithChildren<Props>) => {
  return (
    <Link href={href}>
      <a className={clsx('text-blue-500 visited:text-blue-300', className)}>{children}</a>
    </Link>
  );
};
