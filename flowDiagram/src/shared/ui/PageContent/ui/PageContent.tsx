import { Breadcrumb } from "@chakra-ui/react";
import { useLocation } from "react-router";

import { paths } from "@/shared/utils/paths.ts";

export function PageContent(props) {
    const location = useLocation();
    const locationIsValid = location.pathname.length > 1;

    return (
        <div className="w-full">
            {locationIsValid ? (
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        {location.pathname.split("/").map((item, index) => {
                            return (
                                <>
                                    <Breadcrumb.Item key={index}>
                                        <Breadcrumb.Link href={`/${item}`}>{paths.get(item)}</Breadcrumb.Link>
                                    </Breadcrumb.Item>
                                    {
                                        item === location.pathname.split("/").pop() ? null : <Breadcrumb.Separator />
                                    }
                                </>
                            )
                        })}
                    </Breadcrumb.List>
                </Breadcrumb.Root>
            ) : null}
            {props.children}
        </div>
    )
}