import { JSX } from "react";

type contentIcons = Array<{ IconPath: JSX.Element, urlPath: string, content: string }>;

export interface SidebarProperties {
  IconSidebar?: JSX.Element;
  mainIcons?: contentIcons;
  footerIcons?: contentIcons;
}
