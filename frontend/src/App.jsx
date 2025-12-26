import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Box, Spinner, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const HomePage = lazy(() => import("./pages/HomePage"));
const CreatePage = lazy(() => import("./pages/CreatePage"));

function App() {
  return (
    <Box minH="100vh">
      <Navbar />

      <Suspense
        fallback={
          <Center mt={20}>
            <Spinner size="xl" />
          </Center>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
