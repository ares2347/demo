import React from 'react';
import {Route} from 'react-router-dom';
import { Homepage } from '../pages/public/Homepage';

interface BasicRouteType {
    name: string;
    title: string;
    path: string;
    element: React.ReactElement;
    icon?: string;
    activeIcon?: string;
    hideInMenu: boolean;
    requireAdmin: boolean;
    requireLogin: boolean;
}

export interface RouteType extends BasicRouteType {
    subRoutes? : RouteType[];
}

export const getRoutes = (routes: RouteType[]) => {
    const configuredRoutes = routes.map((route, index) => (
        <React.Fragment>
            <Route path={route.path} element={route.element}>
                {
                    route.subRoutes && 
                    route.subRoutes.length > 0 &&
                    getRoutes(route.subRoutes)
                }
            </Route>
        </React.Fragment>
    ));
    return configuredRoutes;
};

export const authRoutes: BasicRouteType[] = [
    // {
    //     name: "login",
    //     title: "Login",
    //     path: "login",
    //     element: <Login />,
    //     hideInMenu: false,
    //     requireAdmin: false,
    //     requireLogin: false,
    //   },
];

export const publicRoutes: RouteType[] = [
    {
        name: "homepage",
        title: "Homepage",
        path: "",
        element: <Homepage />,
        hideInMenu: true,
        requireAdmin: true,
        requireLogin: true,
      }
]


export const protectedRoutes: RouteType[] = [
    // {
    //     name: "home",
    //     title: "Home",
    //     path: "home",
    //     element: <Home />,
    //     hideInMenu: false,
    //     requireAdmin: false,
    //     requireLogin: true,
    //   }
]