import {
    createBrowserRouter,
} from 'react-router'

import MainPage from "@/pages/main";
import StatsPage from "@/pages/stats";
import SettingsPage from "@/pages/settings";
import ProfilePage from "@/pages/profile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainPage,
    },
    {
        path: '/profile',
        Component: ProfilePage
    },
    {
        path: '/settings',
        Component: SettingsPage
    },
    {
        path: '/stats',
        Component: StatsPage
    }
])