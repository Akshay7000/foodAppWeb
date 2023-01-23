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

  Title,
  Description,
  onOK,
  OnClose,
}) => {
  return (
    <>
      <Modal isOpen={showAlert} onClose={OnClose}>
        <ModalOverlay />
        <ModalContent>
          <Alert
            status="success"
            variant="top-accent"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="250px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {Title}
            </AlertTitle>
            <AlertDescription maxWidth="sm">{Description}</AlertDescription>
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
                Update
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
          </Alert>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlertCustom;
