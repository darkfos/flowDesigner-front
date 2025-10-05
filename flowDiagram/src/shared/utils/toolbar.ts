import { JSX } from 'react'

import {
    FlowShadowRectangle,
    FlowTableStandard,
    FlowRectangle,
    FlowCircle,
    FlowOval,
    FlowDataStore
} from "@/widgets/Toolbar/tools";

type ToolbarItem = {
    title: string,
    value: string,
    components: Array<JSX.Element>
}

export const toolbarItems: Array<ToolbarItem> = [
    {
        title: 'UML Схемы',
        value: 'UML',
        components: []
    },
    {
        title: 'ERD Схемы',
        value: 'ERD',
        components: []
    },
    {
        title: 'DataFlow Схемы',
        value: 'DataFlow',
        components: [
            FlowShadowRectangle as JSX.Element,
            FlowDataStore as JSX.Element,
            FlowRectangle as JSX.Element,
            FlowCircle as JSX.Element,
            FlowOval as JSX.Element,
            FlowTableStandard as JSX.Element
        ]
    }
]