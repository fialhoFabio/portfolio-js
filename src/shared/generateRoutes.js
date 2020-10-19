import React from 'react';
import {Route} from 'react-router';

const paths = [
    {children: React.lazy(() => import('routes/Home')), path: '/'},
]

export default function generateRoutes() {
    return paths.map((data) => {
        return (
            <Route exact key={data.path} path={data.path}>
                <data.children/>
            </Route>
        );
    });
}
