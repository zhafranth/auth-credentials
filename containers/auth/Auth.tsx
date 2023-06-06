import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("./_components/Form"));

const Auth = () => {
  return (
    <Grid templateColumns="repeat(2,1fr)">
      <GridItem width="100%" h="100vh" bg="blue.100">
        <Image
          src="https://images.unsplash.com/photo-1685902397640-04a02fde0f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="cover image"
        />
      </GridItem>
      <GridItem width="100%" h="100vh">
        <Form />
      </GridItem>
    </Grid>
  );
};

export default Auth;
