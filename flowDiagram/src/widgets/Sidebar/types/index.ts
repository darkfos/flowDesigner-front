import { JSX } from 'react'

type contentIcons = Array<{ IconPath: JSX.Element }>

export interface SidebarProperties {
    IconSidebar?: JSX.Element
    mainIcons?: contentIcons
    footerIcons?: contentIcons
}