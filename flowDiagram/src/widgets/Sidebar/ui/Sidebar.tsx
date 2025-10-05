import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { clsx } from "clsx";

import { Link } from "react-router"
import { Flex, Icon } from "@chakra-ui/react";

import { Tooltip } from "@/components/ui/tooltip.tsx"

import type { SidebarProperties } from "@/widgets/Sidebar";
import { Toolbar } from "@/widgets/Toolbar";

export function Sidebar({
  IconSidebar,
  footerIcons,
  mainIcons,
}: SidebarProperties) {

    const sidebarSelector = useSelector(state => state.sidebar)
    const isOpen = useMemo(() => sidebarSelector.isOpen, [sidebarSelector.isOpen])

  return (
    <Flex
      gap="20"
      direction="column"
      justify="space-between"
      align="center"
      className={clsx("bg-violet-50 shadow-xl rounded-lg h-[95%] w-[110px] h-[95%] delay-150 ease-in transition-[width]", {'w-[380px]': isOpen})}
    >
        {
            isOpen ?
                (
                    <Toolbar />
                )
                :
                    (
                        <>
                            <Flex
                                direction="column"
                                justify="center"
                                align="center"
                                gap="20"
                                style={{ paddingTop: "20px" }}
                            >
                                <Tooltip content="Главная страница">
                                    <Link to="/">
                                        <Icon
                                            size="2xl"
                                            color="purple.500"
                                            style={{ padding: "1px" }}
                                            className="transition-all hover:bg-purple-200 hover:p-[5px] hover:rounded-lg cursor-pointer"
                                        >
                                            {IconSidebar}
                                        </Icon>
                                    </Link>
                                </Tooltip>
                                <Flex direction="column" justify="center" align="center" gap="8">
                                    {mainIcons?.map((icon) => {
                                        return (
                                            <Tooltip content={icon.content}>
                                                <Link to={icon.urlPath}>
                                                    <Icon
                                                        size="2xl"
                                                        style={{ padding: "1px" }}
                                                        className="transition-all hover:bg-purple-200 hover:rounded-lg cursor-pointer"
                                                    >
                                                        {icon.IconPath}
                                                    </Icon>
                                                </Link>
                                            </Tooltip>
                                        );
                                    })}
                                </Flex>
                            </Flex>
                            <Flex
                                direction="column"
                                justify="center"
                                align="center"
                                gap="5"
                                style={{ paddingBottom: "20px" }}
                            >
                                {footerIcons?.map((icon) => {
                                    return (
                                        <Tooltip content={icon.content}>
                                            <Link to={icon.urlPath}>
                                                <Icon
                                                    size="2xl"
                                                    style={{ padding: "1px" }}
                                                    className="transition-all hover:bg-purple-200 hover:rounded-lg cursor-pointer"
                                                >
                                                    {icon.IconPath}
                                                </Icon>
                                            </Link>
                                        </Tooltip>
                                    );
                                })}
                            </Flex>
                        </>
                    )
        }
    </Flex>
  );
}
