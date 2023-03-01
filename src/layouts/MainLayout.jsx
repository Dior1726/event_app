import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import BgImg from './../assets/bg.jpg'

const MainLayout = () => {
  return (
    <Flex
      p='5'
      pos='fixed'
      top='0'
      left='0'
      right='0'
      bottom='0'
      bgImage={BgImg}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      direction='column'
    >
      <Flex
        as='header'
        bg='rgba(255, 255, 255, .2)'
        backdropFilter={'blur(10px)'}
        p='5'
        borderRadius='xl'
        mb='5'
        align={'center'}
        justify={'space-between'}
      >
        <Text
          as={'h1'}
          fontSize='xl'
          fontWeight={'bold'}
          fontStyle='italic'
          color={'teal'}
        >
          EventApp
        </Text>

        <Flex gap={'12px'}>
          <Button colorScheme={'teal'}>Home</Button>
          <Button colorScheme={'teal'}>Login</Button>
        </Flex>
      </Flex>

      <Box
        as='main'
        bg={'rgba(255, 255, 255, .2)'}
        backdropFilter={'blur(10px)'}
        p='5'
        borderRadius='xl'
        flexGrow='1'
        minH='0'
      >
        <Outlet />
      </Box>
    </Flex>
  )
}

export default MainLayout
