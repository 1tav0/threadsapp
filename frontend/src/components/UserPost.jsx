import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { MdMoreHoriz } from "react-icons/md";

const UserPost = () => {
  return (
    <Link to={"/tavo/post/1"}>
      <Flex bg={"red.500"} gap={3} mb={4} py={5} h={"500px"}>

        <Flex bg={"green.500"} flexDirection={"column"} alignItems={"center"}>
          <Avatar
            src="/sasuke.jpg"
            alt={"avatarname"}
          />
          <Box w="1px" bg={"gray.light"} my={2} h={"full"}></Box>
          <Box position={"relative"} bg={"green.500"} w={"full"}>
            <Avatar
              size={"xs"}
              name="tavo"
              src="/boruto.jpg"
              position={"absolute"}
              top={"0px"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="boruto"
              src="/boruto1.jpg"
              position={"absolute"}
              bottom={"0px"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="tavo"
              src="/boruto.jpg"
              position={"absolute"}
              bottom={"0px"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>

        <Flex bg={"purple.500"} flex={1} flexDirection={"column"} gap={2}>
          <Flex bg={"pink.500"} w={"full"} justifyContent={"space-between"}>
            
            <Flex w={"full"} bg={"blue.500"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                Tavo Cruz Ortega
              </Text>
              <Image
                src="/verified.svg"
                h={4}
                w={4}
                ml={1}
              />
            </Flex>

            <Flex gap={4} alignItems={"center"}>
              <Text fontStyle={"sm"} color={"gray.light"}>1d</Text>
              <MdMoreHoriz />
            </Flex>
          </Flex>

          <Text bg={"red.500"} fontSize={"sm"}>
            This is my first post
          </Text>
          <Box
            border={"1px solid"}
            borderColor={"gray.light"}
            borderRadius={6}
            overflow={"hidden"}
          >
            <Image src="/sasuke.jpg"/>
          </Box>
        </Flex>
      </Flex>
    </Link>
  )
}

export default UserPost