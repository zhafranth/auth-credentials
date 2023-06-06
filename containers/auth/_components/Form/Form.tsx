import React, { useState, useCallback } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";

const Form = () => {
  const [formType, setFormType] = useState<"login" | "register">("login");

  const handleChangeFormType = useCallback((value: "login" | "register") => {
    setFormType(value);
  }, []);

  return (
    <Box padding="20" position="relative" h="100%">
      <Text fontSize="2xl" fontWeight="semibold" marginBottom="1rem">
        Get Started
      </Text>
      <Text fontSize="md" color="gray.400">
        Create your account now
      </Text>
      {formType === "login" ? <FormLogin /> : <FormRegister />}
      <Box position="absolute" bottom={12} left={0} right={0} w="100%">
        {formType === "login" ? (
          <Text textAlign="center">
            Dont have an account?{" "}
            <Text
              color="teal"
              display="inline-block"
              onClick={() => handleChangeFormType("register")}
            >
              Sign up
            </Text>
          </Text>
        ) : (
          <Text textAlign="center">
            Have an account?{" "}
            <Text display="inline-block" color="teal" onClick={() => handleChangeFormType("login")}>
              Login
            </Text>
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Form;
