import { JSX } from 'react'
import { Outlet } from 'react-router'
import { BsFillDiagram2Fill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

import { Sidebar } from "@/widgets/Sidebar";

import { Flex } from "@chakra-ui/react";

function App() {
    return (
        <main className="h-screen overflow-hidden" >
            <Flex direction="row" gap="10" className="h-screen" style={{ padding: '10px', margin: '20px' }}>
                <Sidebar
                    IconSidebar={<BsFillDiagram2Fill /> as JSX.Element}
                    mainIcons={
                        [
                            {IconPath: <RiAccountCircleFill /> as JSX.Element, urlPath: '/profile'},
                            {IconPath: <IoMdStats /> as JSX.Element, urlPath: '/stats'},
                            {IconPath: <IoMdSettings /> as JSX.Element, urlPath: '/settings'}
                        ]
                    }
                    footerIcons={
                        [
                            {IconPath: <IoIosInformationCircleOutline /> as JSX.Element, urlPath: '/docs'},
                            {IconPath: <IoMdLogOut /> as JSX.Element, urlPath: '/logout'}
                        ]
                    }
                />
                <Outlet />
            </Flex>
        </main>
    )
}

export default App;