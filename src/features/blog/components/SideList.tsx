import { Key, ReactElement } from 'react';
import { SideBlock } from './SideBlock';

type Props<T> = {
  title: string;
  items: Array<T>;
  getKey: (item: T, index: number) => Key;
  itemRenderer: (item: T) => ReactElement<any, any> | null;
};
export const SideList = function SideList<T>({ title, items, getKey, itemRenderer }: Props<T>) {
  return (
    <SideBlock title={title}>
      <ul className={'divide-y'}>
        {items.map((item, index) => {
          return (
            <li key={getKey(item, index)} className={'mt-2 pt-2'}>
              {itemRenderer(item)}
            </li>
          );
        })}
      </ul>
    </SideBlock>
  );
};
