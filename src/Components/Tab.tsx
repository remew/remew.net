import React, {useCallback, useState, useContext} from 'react';
import ThemeContext from '../Themes/context';

export type TabProps = {
    label: string;
    render: () => React.ReactNode;
    index?: number;
}

const noop = () => {};
const TabSelectedIndexContext = React.createContext({index: 0, setIndex: noop});

export function TabGroup(props: any) {
  const [index, setIndex] = useState(0);
  const selectedTab = props.children[index];
  return (
    <TabSelectedIndexContext.Provider value={{index, setIndex}}>
      <ul>
        {React.Children.map(props.children, (child, i) => {
            return React.cloneElement(child, {index: i});
        })}
      </ul>
      <div>
        {selectedTab.props.render()}
      </div>
      <style jsx>{`
        ul {
          display: flex;
          height: 44px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        ul > :global(li):first-child {
          border-left: none;
        }
      `}</style>
    </TabSelectedIndexContext.Provider>
  );
}

export function Tab(props: TabProps) {
    const {index, setIndex} = useContext(TabSelectedIndexContext);
    const {theme} = useContext(ThemeContext);
    const onClick = useCallback(e => {
        e.preventDefault();
        setIndex(props.index);
    }, []);
    return (
      <li className={index === props.index ? 'selected' : ''}>
        <a href={'#'} onClick={onClick}>{props.label}</a>
        <style jsx>{`
          li {
            background: ${theme.tab.backgroundColor};
            border-bottom: solid 1px ${theme.tab.border};
            border-left: solid 1px ${theme.tab.border};
            flex-grow: 1;
          }
          li.selected {
            border-bottom: none;
          }
          a {
            align-items: center;
            color: ${theme.tab.textColor};
            display: flex;
            height: 100%;
            justify-content: center;
            text-decoration: none;
          }
        `}</style>
      </li>
    );
}
