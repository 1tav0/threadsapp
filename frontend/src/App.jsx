import { Container } from "@chakra-ui/layout";
import { Route, Routes } from "react-router";
import UserPage from "./pages/user/UserPage";
import PostPage from "./pages/post/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <Container
      maxW="720px"
      borderRight={"1px solid"}
      borderLeft={"1px solid"}
    >
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage /> } />
      </Routes>
    </Container>
  )
}

export default App
