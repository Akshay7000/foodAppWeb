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
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { login } from "../redux/AuthReducer/action";
//import { LOGIN_S } from "../redux/AuthReducer/actionType";
import { ViewIcon } from "@chakra-ui/icons";
import logo from "../img/icon.png";
import { auth } from "../Firebase/config";
const ResetPassword = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const Params = useSearchParams();
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
    const searchParams = new URLSearchParams(location.search);
    var oobCode = searchParams.get("oobCode");
    auth.confirmPasswordReset(oobCode, password).then((res) => {
      navigate("/login", { replace: true });
    });
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
              Reset Your Password
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8} bg={"#fff"}>
            <Stack spacing={4}>
              {/* <FormControl id="username" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl> */}
              <FormControl id="password" isRequired>
                <FormLabel>New Password</FormLabel>
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
                <Button
                  bg={"black"}
                  color={"whitesmoke"}
                  _hover={{
                    bg: "none",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={loginHandler}
                >
                  {loading ? <Spinner /> : "Reset Password"}
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

export default ResetPassword;

// swal({
//   text: "Login Success",
//   icon: "success",
// });
