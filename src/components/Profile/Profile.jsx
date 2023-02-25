import {
  //Icon,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import React, { useEffect } from "react";
import { GrLogout } from "react-icons/gr";
//import { FiUser } from "react-icons/fi";
import { BsBagCheck, BsCartCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profile } from "../../redux/AuthReducer/action";
import { getLocalData } from "../../utils/localStorage";
const Profile = ({ colorMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer.isAuth);

  const profileData = useSelector((state) => state.AuthReducer?.profileData);
  // console.log("profileData:", profileData);
  useEffect(() => {
    if (profileData?.length === 0) {
      const token = getLocalData("token"); //different approaches for getting local storage
      const email = getLocalData("userInfo");
      const payload = {
        email: email,
        token,
      };
      dispatch(profile(payload));
    }
  }, [dispatch, profileData?.length]);

  const logoutHandler = () => {
    new Promise((res, rej) => {
      res(localStorage.removeItem("token"));
      res(localStorage.removeItem("userInfo"));
    }).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div>
      <Menu>
        <MenuButton
          p="0"
          borderRadius={"50%"}
          bg="none"
          color="black"
          as={Button}
          colorScheme="none"
          // rightIcon={<ChevronDownIcon ml={"5px"} fontSize={"20px"} />}
        >
          <Avatar
            size={"sm"}
            bg={"black"}
            name={profileData?.length !== 0 ? profileData.firstName : ""}
            src={profileData?.length !== 0 ? profileData.description : ""}
          />
          <Text
            fontSize={"xs"}
            my={"1"}
            color={"white"}
            textTransform={"capitalize"}
          >
            {profileData?.length !== 0 ? profileData.firstName : ""}
          </Text>
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem fontWeight={"bold"} textTransform={"capitalize"}>
              {profileData.length !== 0
                ? profileData?.firstName + " " + profileData?.lastName
                : ""}
            </MenuItem>
            <MenuDivider />
            {auth ? (
              <>
                <MenuItem onClick={() => navigate("/myaccount")}>
                  <Avatar
                    size={"xs"}
                    marginRight={"2"}
                    name={
                      profileData?.length !== 0 ? profileData.firstName : ""
                    }
                    src={
                      profileData?.length !== 0 ? profileData.description : ""
                    }
                  />
                  <Text fontSize={"sm"}>
                    {profileData?.length !== 0 ? profileData.email : ""}
                  </Text>
                </MenuItem>
                <MenuItem onClick={() => navigate("/orders")} mx={"1"}>
                  <BsBagCheck color={"blue"} marginRight={"2"} />
                  <Text marginLeft={"2"}>Order History</Text>
                </MenuItem>{" "}
              </>
            ) : (
              <MenuItem onClick={() => navigate("/myaccount")}>
                <CgProfile /> My Account
              </MenuItem>
            )}

            {/* <MenuItem onClick={() => navigate("/wishlist")}>
              <MdOutlineFavoriteBorder color={"red"} />
              Wishlist
            </MenuItem> */}
            <MenuItem onClick={() => navigate("/cart")} mx={"1"}>
              <BsCartCheck color={"blue"} marginRight={"2"} />
              <Text marginLeft={"2"}>Cart</Text>
            </MenuItem>
            <MenuItem onClick={logoutHandler} mx={"1"}>
              <GrLogout />
              <Text marginLeft={"2"}>Logout</Text>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Profile;

// const username = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
