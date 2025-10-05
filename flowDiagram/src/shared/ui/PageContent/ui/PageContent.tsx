import {Breadcrumb, Flex} from "@chakra-ui/react";
import { useLocation } from "react-router";

import { paths } from "@/shared/utils/paths.ts";

export function PageContent(props) {
  const location = useLocation();
  const locationIsValid = location.pathname.length > 1;

  return (
    <div className="w-full">
        <Flex direction='column' gap='5'>
            {locationIsValid ? (
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        {location.pathname.split("/").map((item, index) => {
                            return (
                                <>
                                    <Breadcrumb.Item key={index}>
                                        <Breadcrumb.Link href={`/${item}`}>
                                            {paths.get(item)}
                                        </Breadcrumb.Link>
                                    </Breadcrumb.Item>
                                    {item === location.pathname.split("/").pop() ? null : (
                                        <Breadcrumb.Separator />
                                    )}
                                </>
                            );
                        })}
                    </Breadcrumb.List>
                </Breadcrumb.Root>
            ) : null}
            <div className='w-[100%] h-[95vh]'>
                {props.children}
            </div>
        </Flex>
    </div>
  );
}
