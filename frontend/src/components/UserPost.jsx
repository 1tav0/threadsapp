import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { MdMoreHoriz } from "react-icons/md";
import Actions from "./Actions";
import { useState } from "react";


const UserPost = ({likes, replies, postImg, postTitle}) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link to={"/tavo/post/1"}>
      <Flex gap={3} mb={4} py={5} h={"500px"}>

        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar
            src="/sasuke.jpg"
            alt={"avatarname"}
          />
          <Box w="1px" bg={"gray.light"} my={2} h={"full"}></Box>
          <Box position={"relative"} w={"full"}>
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

        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex w={"full"} justifyContent={"space-between"}>
            
            <Flex w={"full"} alignItems={"center"}>
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

          <Text fontSize={"sm"}>
            {postTitle}
          </Text>
          {
            postImg && (
              <Box
                border={"1px solid"}
                borderColor={"gray.light"}
                borderRadius={6}
                overflow={"hidden"}
              >
                <Image src={postImg} w={"full"}/>
              </Box>
            )
          }
          
          <Flex>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>

          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}>{replies} replies</Text>
            <Box w={1} h={1} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text fontSize={"sm"} color={"gray.light"}>{likes} likes</Text>
          </Flex>

        </Flex>
      </Flex>
    </Link>
  )
}

export default UserPost