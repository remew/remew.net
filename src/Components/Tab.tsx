import React, {useCallback, useState, useContext} from 'react';
import ThemeContext from '../Themes/context';

export type TabProps = {
    label: string;
    render: () => React.ReactNode;
    index?: number;
}

const noop = () => {};
const TabContext = React.createContext({index: 0, setIndex: noop});

export function TabGroup(props: any) {
  const [index, setIndex] = useState(0);

  // get selected child component
  const selectedTab = props.children[index];

  return (
    <TabContext.Provider value={{index, setIndex}}>
      <ul>
        {React.Children.map(props.children, (child, i) => {
            // add `index` prop
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
        div {
          flex: 1 0 0;
        }
      `}</style>
    </TabContext.Provider>
  );
}

export function Tab(props: TabProps) {
    const {index, setIndex} = useContext(TabContext);
    const {theme} = useContext(ThemeContext);
    const onClick = useCallback(e => {
        e.preventDefault();
        setIndex(props.index);
    }, []);

    return (
      <li className={index === props.index ? 'selected' : ''}>
        <a href={'#'} onClick={onClick}>{props.label}</a>
        <div className={index === props.index ? 'border selected' : 'border'} />
        <style jsx>{`
          li {
            background: ${theme.tab.backgroundColor};
            flex-grow: 1;
          }
          li.selected {
            background: ${theme.tab.selectedBackgroundColor};
          }
          a {
            align-items: center;
            color: ${theme.tab.textColor};
            display: flex;
            height: 100%;
            justify-content: center;
            text-decoration: none;
          }
          .border {
            position: absolute;
            bottom: 0;
            width: 0px;
            margin-left: 50%;
            height: 4px;
            transition: 0.3s;
            background-color: ${theme.tab.border};
          }
          .border.selected {
            margin-left: 0;
            width: 100%;
          }
        `}</style>
      </li>
    );
}
