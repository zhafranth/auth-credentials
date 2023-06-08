import React, { useCallback, useEffect, useState } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  const [data, setData] = useState<{ username: string }>();

  const handleGetCurrentUser = useCallback(async () => {
    const response = await axios("/api/current", {
      method: "GET",
    });

    setData(response.data);
  }, []);

  useEffect(() => {
    handleGetCurrentUser();
  }, [handleGetCurrentUser]);

  return (
    <Box
      w="100vw"
      h="100vh"
      overflow="hidden"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box position="absolute" bottom={0} left={0} top={0} right={0} w="100%" h="100%">
        <Image
          alt="background"
          src="https://hype4.academy/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg2%402x.e27efe19.webp&w=1920&q=75"
        />
      </Box>
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        rowGap="1rem"
        flexDir="column"
      >
        <Text fontSize="2xl">
          Hello, {data?.username} from another <span style={{ fontWeight: "700" }}>world</span>
        </Text>
        <Button onClick={() => signOut()} color="teal">
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
