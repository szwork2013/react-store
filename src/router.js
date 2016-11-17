import React from 'react';
import {Router, Route} from 'dva/router';
import Navigation from './services/Navigation'

/* eslint react/prop-types:0 */
export default function ({history}) {
    return (
        <Router history={history}>{
            Navigation.map(function (object, i) {
                return (
                    <Router key={'' + i} path={object.url} component={object.component} >
                        {
                            (object.links || []).map(function (modules, z) {
                                return (
                                    <Router key={'' + i + z} path={modules.url} component={modules.component} />
                                );
                            })
                        }
                    </Router>
                );
            })
        }</Router>
    );
}
