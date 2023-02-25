import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  Stack,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
//import swal from "sweetalert";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/AuthReducer/action";
//import { LOGIN_S } from "../redux/AuthReducer/actionType";
import { ViewIcon } from "@chakra-ui/icons";
import logo from "../img/icon.png";
const Login = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setisChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const pathRoute = location.state?.from?.pathname || "/";
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye((prev) => !prev);
  };
  const loginHandler = () => {
    if (email === "nareshmewada014@gmail.com" && password === "naresh#111*") {
      const params = {
        email,
        password,
      };
      dispatch(login(params, toast)).then((res) => {
        navigate("/admin", { replace: true });
      });
    } else if (email && password) {
      const params = {
        email,
        password,
      };
      dispatch(login(params, toast)).then((res) => {
        if (res.type === "LOGIN_S") navigate(pathRoute, { replace: true });
      });
    }
  };

  return (
    <>
      {/* <Navbar /> <br /> */}
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#13acbc"}>
        {isLargerThan && (
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Box rounded={"lg"} p={8}>
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
              fontSize={"4xl"}
              textTransform={"uppercase"}
              color={"#fff"}
            >
              Sign in to your account
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8} bg={"#fff"}>
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={eye ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={handleEye}>
                      <ViewIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox onChange={(e) => setisChecked(e.target.checked)}>
                    Accept Terms & Conditions
                  </Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"black"}
                  disabled={!isChecked}
                  color={"whitesmoke"}
                  _hover={{
                    bg: "none",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={loginHandler}
                >
                  {loading ? <Spinner /> : "Sign in"}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?
                  <RouterLink to="/register" color={"blue.400"}>
                    Signup
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;

// swal({
//   text: "Login Success",
//   icon: "success",
// });
