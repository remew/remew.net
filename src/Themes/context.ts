import React from 'react';
import LightTheme from './light';

function noop(_: any) {
}

// This default value is placed for type check.
export default React.createContext({type: 'light', theme: LightTheme, changeTheme: noop});
