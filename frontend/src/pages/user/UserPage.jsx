import UserHeader from "../../components/UserHeader"
import UserPost from "../../components/UserPost"

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replies={432} postImg='/boruto.jpg' postTitle="Lets talk about boruto" />
      <UserPost likes={1400} replies={4332} postImg='/boruto1.jpg' postTitle="Lets talk about boruto" />
      <UserPost likes={1250} replies={4132} postImg='/sasuke.jpg' postTitle="Lets talk about boruto"/>
    </>
  )
}

export default UserPage