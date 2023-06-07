import React, { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log("session:", session);
  // useEffect(() => {
  //   if (!session) {
  //     router.replace("/");
  //   }
  // }, [router, session]);

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
      <Box position="relative">
        <Text fontSize="2xl">
          Hello from another <span style={{ fontWeight: "700" }}>world</span>
        </Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
