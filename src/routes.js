import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main  from 'pages/Main';
import App from './App';

const NotFound = () => <h4>Not found 😞</h4>;

export const routes = (
    <Route path='/' title='App' component={App}>
        <IndexRoute title='App' component={Main}/>
        <Route exact path="/" component={Main}/>
        <Route path='*' title='404: Not Found' component={NotFound}/>
    </Route>
);


export default routes;