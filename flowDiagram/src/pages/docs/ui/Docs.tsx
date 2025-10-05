import { useNavigate } from "react-router";
import {Text, Flex, Tabs, Blockquote, Button} from "@chakra-ui/react"

export default function DocsPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

  return (
      <section className="break-all w-[70%]">
          <Flex direction='column' gap='5'>
              <Text textStyle="2xl">Документация</Text>
              <Text textStyle="md">
                  Добро пожаловать на платформу
                  <span className='bg-purple-200 text-stone-950 rounded-sm font-black p-8' style={{ padding: '4px'}}> flowDiagram </span>
                  , здесь ты можешь проектировать совершенно бесплатно свои схемы!
                  <br />
                  <span className='bg-purple-200 text-stone-900 rounded-sm font-bold' style={{ padding: '4px'}}>Делиться</span> и <span className='bg-purple-200 text-stone-900 rounded-sm font-bold' style={{ padding: '4px'}}>сохранять</span> их в своей истории.
              </Text>
              <Tabs.Root variant='plain'>
                  <Tabs.List bg='bg.muted' rounded='13' p='1'>
                      <Tabs.Trigger value='diagram'>
                          Диаграммы
                      </Tabs.Trigger>
                      <Tabs.Trigger value='stats'>
                          Статистика
                      </Tabs.Trigger>
                      <Tabs.Trigger value='profile'>
                          Профиль
                      </Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value='diagram'>
                      Здесь вы строите свои диаграммы, связи между ними, делитесь или сохраняете их как свои проекты.
                  </Tabs.Content>
                  <Tabs.Content value='stats'>
                      Отдельная страница со статистикой работы приложения, ваших проектов.
                  </Tabs.Content>
                  <Tabs.Content value='profile'>
                      Здесь располагается ваша личная информация, статистика, учет и история операций!
                  </Tabs.Content>
              </Tabs.Root>
              <br />
              <Blockquote.Root cite='flowDiagram' borderColor='purple.500'>
                <Blockquote.Content>Данный проект позволяет вам абсолютно бесплатно строить диаграммы, а также сохранять и делиться ими</Blockquote.Content>
                  <Blockquote.Caption>
                      - <cite>О проекте</cite>
                  </Blockquote.Caption>
              </Blockquote.Root>
              <div>
                  <Button size='md' variant='subtle' colorPalette='purple' onClick={handleClick}>Перейти к проектированию</Button>
              </div>
          </Flex>
      </section>
  );
}
