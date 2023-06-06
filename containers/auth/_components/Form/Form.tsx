import React, { useState, useCallback } from "react";
import { Box, Text, Link } from "@chakra-ui/react";
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
            <Link color="teal" onClick={() => handleChangeFormType("register")}>
              Sign up
            </Link>
          </Text>
        ) : (
          <Text textAlign="center">
            Have an account?{" "}
            <Link color="teal" onClick={() => handleChangeFormType("login")}>
              Login
            </Link>
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Form;
