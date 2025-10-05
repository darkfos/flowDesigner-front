import { JSX } from "react";
import { Outlet, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { BsFillDiagram2Fill, BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdLogOut, IoMdStats, IoMdSettings, IoIosInformationCircleOutline } from "react-icons/io";
import { Flex, Icon } from "@chakra-ui/react";

import { Sidebar } from "@/widgets/Sidebar";
import { PageContent } from "@/shared/ui/PageContent";

import { actions } from "@/shared/stores/slices/sidebar.slice.ts"

function App() {

    const dispatch = useDispatch();
    const location = useLocation();

    const toggleSideBar = () => {
        dispatch(actions.toggleSidebar())
    }

  return (
    <main className="h-screen overflow-hidden">
      <Flex
        direction="row"
        gap="10"
        className="h-screen"
        style={{ padding: "10px", margin: "20px" }}
      >
      <Flex direction='row' gap='5' justify='center'>
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
          { location.pathname === '/' ? (
              <div>
                  <Icon size='lg' style={{ marginTop: '10px', padding: '2px' }} className='cursor-pointer transition-all hover:bg-purple-100 h-[5%]' onClick={toggleSideBar}>
                      <BsReverseLayoutSidebarReverse />
                  </Icon>
              </div>
          ) : null}
      </Flex>
        <PageContent>
          <Outlet />
        </PageContent>
      </Flex>
    </main>
  );
}

export default App;
