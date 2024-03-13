import { Box, Flex, Text, VStack } from "@chakra-ui/layout"
import { Avatar, Image, Menu, MenuButton, MenuItem, MenuList, Portal, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const UserHeader = () => {
  const toast = useToast();
  
  const copyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({
        title: "Copied!",
        status: "success",
        description: "Profile link copied to clipboard.",
        duration: 3000,
        isClosable: true
      })
    })
  }

  return (
    <VStack>
      <Flex  w={"full"} justifyContent={"space-between"} >
        <Box>
          <Text fontSize={"2xl"}>
            Boruto Uzumaki
          </Text>
          <Flex alignItems={"center"} gap={2}>
            <Text fontSize={"sm"}>
              borutouzumaki
            </Text>
            <Text
              fontSize={"xs"}
              bg={"gray.light"}
              color={"gray.dark"}
              p={1}
              borderRadius={"full"}
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box >
          <Avatar 
            name={"Boruto"}
            src="/boruto.jpg"
            size={
              {
                base: "md",
                md: "xl"
              }
            }
          />
        </Box>
      </Flex>
      <Text  w={"full"}>
        Co-founder, executive chairman and CEO of Meta Platforms.
      </Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={2} color={"gray.light"}>
          <Text>3.2K followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link >instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icons__class" >
            <Image
              src="/instagram.svg"
              h={5}
              alt="instagram"
            />
          </Box>
          <Box className="icons__class">
            <Menu>
              <MenuButton>
                <Image
                  src="/more.svg"
                  h={5}
                  alt="more"
                />
              </MenuButton>
              <Portal>
                <MenuList>
                  <MenuItem
                    onClick={copyUrl}
                  >
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex flex={0.5} justifyContent={"center"} h={14} alignItems={"center"} borderBottom={"5px solid white"} cursor={"pointer"}>
          <Text
            color={"white"}
            fontWeight={"bold"}
          >
            Threads
          </Text>
        </Flex>
        <Flex flex={0.5} justifyContent={"center"} alignItems={"center"} borderBottom={"1.5px solid white"} cursor={"pointer"}>
          <Text
            color={"gray.light"}
            fontWeight={"bold"}
          >
            Replies
          </Text>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default UserHeader