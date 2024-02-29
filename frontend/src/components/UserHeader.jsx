import { Box, Flex, Text, VStack } from "@chakra-ui/layout"
import { Avatar, Image, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const UserHeader = () => {

  const copyUrl = () => {
    const currentUrl = window.location.href;
    console.log(window);
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
            src="/boruto1.jpg"
            size={"xl"}
          />
        </Box>
      </Flex>
      <Box  w={"full"}>
        Co-founder, executive chairman and CEO of Meta Platforms.
      </Box>
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
    </VStack>
  )
}

export default UserHeader