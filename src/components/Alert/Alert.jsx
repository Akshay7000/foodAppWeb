import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  ButtonGroup,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const AlertCustom = ({
  showAlert,
  MainBtn = "Update",
  Title,
  Description,
  onOK,
  OnClose,
}) => {
  return (
    <>
      <Modal isOpen={showAlert} onClose={OnClose}>
        <ModalOverlay />
        <ModalContent top={"20%"}>
          <Alert
            status="success"
            variant="top-accent"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="250px"
            alignSelf={"center"}
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {Title}
            </AlertTitle>
            <AlertDescription maxWidth="sm">{Description}</AlertDescription>
            {MainBtn !== "" && (
              <ButtonGroup variant="solid" spacing="6" mt={"5"}>
                <Button
                  onClick={onOK}
                  bg={"black"}
                  color="whitesmoke"
                  _hover={{
                    background: "none",
                    color: "teal",
                    border: "1px solid black",
                  }}
                >
                  {MainBtn}
                </Button>
                <Button
                  onClick={OnClose}
                  bg={"#e08f38"}
                  color="whitesmoke"
                  _hover={{
                    background: "none",
                    color: "teal",
                    border: "1px solid black",
                  }}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            )}
          </Alert>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlertCustom;
