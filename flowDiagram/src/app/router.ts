import {
    createBrowserRouter,
} from 'react-router'
import { JSX } from 'react'

import MainPage from "@/pages/main";
import StatsPage from "@/pages/stats";
import SettingsPage from "@/pages/settings";
import ProfilePage from "@/pages/profile";
import DocsPage from "@/pages/docs";
import App from "@/app/App.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: App as JSX.Element,
        children: [
            {path: '/', Component: MainPage},
            {
                path: '/profile',
                Component: ProfilePage as JSX.Element
            },
            {
                path: '/settings',
                Component: SettingsPage as JSX.Element
            },
            {
                path: '/stats',
                Component: StatsPage as JSX.Element
            },
            {
                path: '/docs',
                Component: DocsPage as JSX.Element
            }
        ]
    },
])