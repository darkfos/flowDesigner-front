import {Accordion, Span, Text, Icon, Flex } from "@chakra-ui/react";
import { CgToolbarTop } from "react-icons/cg";

import { toolbarItems } from "@/shared/utils/toolbar.ts";

export function Toolbar() {

    return (
        <div className="w-full h-[100%] overflow-y-scroll">
            <Flex direction='row' align='center' style={{ padding: '15px'}} gap='2'>
                <Icon size='lg' color='purple.700'>
                    <CgToolbarTop />
                </Icon>
                <Text fontSize='xl'>Панель инструментов</Text>
            </Flex>
            <Accordion.Root collapsible variant='enclosed' className='h-[100%]'>
                {
                    toolbarItems.map((item, i) => {
                        return (
                            <Accordion.Item
                                key={i}
                                value={item.value}
                                defaultValue={[toolbarItems[0].value]}
                                className='w-[90%]'
                                style={{ margin: 'auto', paddingTop: '10px' }}
                            >
                                <Accordion.ItemTrigger>
                                    <Span flex='1'>{item.title}</Span>
                                    <Accordion.ItemIndicator />
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                    <Accordion.ItemBody>
                                        <Flex direction='column' gap='4' justify='center' align='center'>
                                            { item.components.map((Component, indexComponent) => {
                                                return (
                                                    <div className='shadow-md' style={{ padding: '5px'}} key={indexComponent}>
                                                        <Component />
                                                    </div>
                                                )
                                            }) }
                                        </Flex>
                                    </Accordion.ItemBody>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion.Root>
        </div>
    )
}