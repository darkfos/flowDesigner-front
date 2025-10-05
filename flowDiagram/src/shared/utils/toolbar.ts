import { JSX } from 'react'

type ToolbarItem = {
    title: string,
    value: string,
    Component: JSX.Element
}

export const toolbarItems: Array<ToolbarItem> = [
    {
        title: 'UML Схемы',
        value: 'UML',
        Component: ''
    },
    {
        title: 'ERD Схемы',
        value: 'ERD',
        Component: ''
    },
    {
        title: 'DataFlow Схемы',
        value: 'DataFlow',
        Component: ''
    }
]