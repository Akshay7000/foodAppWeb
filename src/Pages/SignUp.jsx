import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  checkEmail,
  checkMobile,
  checkPassword,
  checkSignupForm,
  setToast,
} from "../components/Other/CheckProperty";
import { register } from "../redux/AuthReducer/action";
import logo from "../img/icon.png";
const initialState = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: 0,
  description: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "lastName":
      return { ...state, lastName: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "firstName":
      return { ...state, firstName: action.payload };
    case "mobile":
      return { ...state, mobile: action.payload };
    default:
      return state;
  }
};

const Signup = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye((prev) => !prev);
  };
  const signupHandle = () => {
    const isEmpty = checkSignupForm(state);

    if (!isEmpty.status) {
      return setToast(toast, isEmpty.message, "error");
    }
    // const isCharacter = checkCharacter(state.name);
    // if (!isCharacter.status) {
    //   return setToast(toast, isCharacter.message, "error");
    // }
    const isEmail = checkEmail(state.email);
    if (!isEmail.status) {
      return setToast(toast, isEmail.message, "error");
    }
    const isPassword = checkPassword(state.password);
    if (!isPassword.status) {
      return setToast(
        toast,
        "Password must contain these things:",
        "error",
        3000,
        isPassword.message
      );
    }
    const isMobile = checkMobile(state.mobile);
    if (!isMobile.status) {
      setToast(toast, isMobile.message, "error");
      return isMobile.status;
    }
    dispatch(register(state, toast)).then((r) => {
      if (r?.email) navigate("/login", { replace: true });
    });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#13acbc"}>
      {isLargerThan && (
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            // boxShadow={"lg"}
            p={8}
          >
            <Image
              width={["34"]}
              height="100%"
              m={2}
              src={logo}
              alt="logo"
              fallbacksrc="https://via.placeholder.com/150"
            />
          </Box>
        </Stack>
      )}
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"4xl"}
            textAlign={"center"}
            color={"#fff"}
          >
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="FirstName" isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input
                    type="text"
                    value={state.firstName}
                    onChange={(e) =>
                      setState({ type: "firstName", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="LastName" isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    type="text"
                    value={state.lastName}
                    onChange={(e) =>
                      setState({ type: "lastName", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={state.email}
                onChange={(e) =>
                  setState({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={eye ? "text" : "password"}
                  value={state.password}
                  onChange={(e) =>
                    setState({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button onClick={handleEye} variant={"ghost"}>
                    <ViewIcon />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile</FormLabel>
                <Input
                  type="number"
                  value={state.mobile}
                  onChange={(e) =>
                    setState({ type: "mobile", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"black"}
                color={"whitesmoke"}
                _hover={{
                  bg: "none",
                  color: "black",
                  border: "1px solid black",
                }}
                onClick={signupHandle}
              >
                {loading ? <Spinner /> : "Sign up"}
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
