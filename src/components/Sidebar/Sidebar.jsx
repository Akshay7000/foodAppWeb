import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SideMenu({ colorMode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button
        colorScheme="blackAlpha"
        bg="none"
        color="black"
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        <GiHamburgerMenu color={colorMode === "dark" ? "white" : "black"} />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt={"9vh"}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Avyaya Health</DrawerHeader>
          <DrawerBody>
            <Stack>
              <Link to="/">
                <Text my="4" mx="2">
                  Home
                </Text>
              </Link>
              <Link to="/products">
                <Text my="4" mx="2">
                  Products
                </Text>
              </Link>
              <Link to="/something-new">
                <Text my="4" mx="2">
                  Something New
                </Text>
              </Link>
              <Link to="/about">
                <Text my="4" mx="2">
                  About Us
                </Text>
              </Link>
              <Link to="/team">
                <Text my="4" mx="2">
                  Our team
                </Text>
              </Link>
              <Link to="/contact">
                <Text my="4" mx="2">
                  Contact Us
                </Text>
              </Link>
              <Link to="/terms">
                <Text my="4" mx="2">
                  Terms & Conditions
                </Text>
              </Link>

              <Link to="/team">
                <Text my="4" mx="2">
                  Our Team
                </Text>
              </Link>
              <Link to="/contact">
                <Text my="4" mx="2">
                  Contact Us
                </Text>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
