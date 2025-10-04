import { Flex, Icon } from '@chakra-ui/react'

import type { SidebarProperties } from "@/widgets/Sidebar";

export function Sidebar({IconSidebar, footerIcons, mainIcons}: SidebarProperties) {
    return (
        <Flex
            gap="20"
            direction="column"
            justify='space-between'
            align='center'
            className="bg-gray-100 w-[110px] rounded-lg h-[95%]"
            style={{padding: '10px', margin: '20px'}}
        >
            <Flex direction="column" justify="center" align="center" gap="20" style={{ paddingTop: "20px" }}>
                <Icon size="2xl" color="purple.500" style={{ padding: '1px' }} className="transition-all hover:bg-purple-200 hover:p-[5px] hover:rounded-lg cursor-pointer">
                    { IconSidebar}
                </Icon>
                <Flex direction="column" justify="center" align="center" gap="8">
                    {mainIcons?.map(icon => {
                        return (
                            <Icon size="2xl" style={{ padding: '1px' }} className="transition-all hover:bg-purple-200 hover:rounded-lg cursor-pointer">
                                {icon.IconPath}
                            </Icon>
                        )
                    })}
                </Flex>
            </Flex>
            <Flex direction="column" justify="center" align="center" gap="5" style={{ paddingBottom: '20px' }}>
                {footerIcons?.map(icon => {
                    return (
                        <Icon size="2xl" style={{ padding: '1px' }} className="transition-all hover:bg-purple-200 hover:rounded-lg cursor-pointer">
                            {icon.IconPath}
                        </Icon>
                    )
                })}
            </Flex>
        </Flex>
    )
}