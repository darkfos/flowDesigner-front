import { JSX } from "react";
import { Outlet } from "react-router";
import { BsFillDiagram2Fill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { Flex } from "@chakra-ui/react";

import { Sidebar } from "@/widgets/Sidebar";
import { PageContent } from "@/shared/ui/PageContent";

function App() {
  return (
    <main className="h-screen overflow-hidden">
      <Flex
        direction="row"
        gap="10"
        className="h-screen"
        style={{ padding: "10px", margin: "20px" }}
      >
        <Sidebar
          IconSidebar={(<BsFillDiagram2Fill />) as JSX.Element}
          mainIcons={[
            {
              IconPath: (<RiAccountCircleFill />) as JSX.Element,
              urlPath: '/profile',
                content: 'Страница профиля'
            },
            {
                IconPath: (<IoMdStats />) as JSX.Element,
                urlPath: '/stats',
                content: 'Страница статистики'
            },
            {
              IconPath: (<IoMdSettings />) as JSX.Element,
              urlPath: '/settings',
                content: 'Страница настроек'
            },
          ]}
          footerIcons={[
            {
              IconPath: (<IoIosInformationCircleOutline />) as JSX.Element,
              urlPath: "/docs",
                content: 'Страница с документацией'
            },
            {
                IconPath: (<IoMdLogOut />) as JSX.Element,
                urlPath: '/logout',
                content: 'Выход из сессии'
            },
          ]}
        />
        <PageContent>
          <Outlet />
        </PageContent>
      </Flex>
    </main>
  );
}

export default App;
