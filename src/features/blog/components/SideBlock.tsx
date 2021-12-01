import { PropsWithChildren } from 'react';

type Props = {
  title: string;
};
export const SideBlock = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div className={'p-4 bg-gray-700'}>
      <div className={'font-bold'}>{title}</div>
      <div className={'mt-4'}>{children}</div>
    </div>
  );
};
