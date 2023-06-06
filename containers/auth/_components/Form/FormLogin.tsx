import React from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const FormLogin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await signIn("credentials", {
        username: data.username,
        password: data.password,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <Box mt="1rem" py="2rem">
        <Text mb="0.5rem" color="gray.500">
          Username
        </Text>
        <Input
          size="sm"
          mb="1.2rem"
          {...register("username", {
            required: true,
          })}
        />
        <Text mb="0.5rem" color="gray.500">
          Password
        </Text>
        <Input
          size="sm"
          mb="1.2rem"
          type="password"
          {...register("password", {
            required: true,
          })}
        />
      </Box>
      <Button width="100%" colorScheme="teal" onClick={onSubmit}>
        Login
      </Button>
    </>
  );
};

export default FormLogin;
