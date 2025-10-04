import { JSX } from 'react'
import { BsFillDiagram2Fill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

import {Sidebar} from "@/widgets/Sidebar";

function App() {
    return (
        <main className="h-screen overflow-hidden">
            <Sidebar
                IconSidebar={<BsFillDiagram2Fill /> as JSX.Element}
                mainIcons={
                    [
                        {IconPath: <RiAccountCircleFill /> as JSX.Element},
                        {IconPath: <IoMdStats /> as JSX.Element},
                        {IconPath: <IoMdSettings /> as JSX.Element}
                    ]
                }
                footerIcons={
                    [
                        {IconPath: <IoIosInformationCircleOutline /> as JSX.Element},
                        {IconPath: <IoMdLogOut /> as JSX.Element}
                    ]
                }
            />
        </main>
    )
}

export default App;