import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";

function TermsCondition() {
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  return (
    <div>
      <Navbar />
      {false ? (
        <Loading />
      ) : (
        <>
          <Box pt={"40"} pb={"20"} mx={"8"}>
            <Flex
              flexDir={"column"}
              h={"100%"}
              //   borderRadius={"18px"}

              gap={"5"}
              borderBottom={"8px solid #13acbc"}
            >
              <Flex
                h={"44"}
                px={"8%"}
                alignItems={"center"}
                bg={"#13acbc"}
                color={"#fff"}
                borderTopLeftRadius={"18px"}
                borderTopRightRadius={"18px"}
              >
                <Heading>Terms & Conditions</Heading>
              </Flex>
              <Flex
                px={"8%"}
                alignItems={"center"}
                // py={"42"}
                textAlign={"left"}
                fontSize={
                  isLargerThan ? "calc(1.275rem + .3vw)" : "calc(1rem + .30vw)"
                }
              >
                <Text>
                  www.avyayahealth.com is owned and operated by AVYAYA HEALTH
                  REWINE INDIA LLP, a company incorporated under the laws of
                  India. Your use of the Website and services and tools are
                  governed by the following terms and conditions ("Terms of
                  Use") as applicable to the Website including the applicable
                  policies which are incorporated herein by way of reference. If
                  you transact on the Website, You shall be subjected to the
                  policies that are applicable to the Website for such
                  transaction. By mere use of the website, You shall be
                  contracting with AVYAYA HEALTH REWINE INDIA LLP and these
                  terms and conditions including the policies constitute your
                  binding obligations, with AVYAYA HEALTH REWINE INDIA LLP. For
                  the purpose of these Terms of Use, wherever the context so
                  requires "You" or "User"shall mean any natural or legal person
                  who has agreed to become a buyer on the Website by providing
                  Registration Data while registering on the Website as
                  Registered User using the computer systems.
                </Text>
              </Flex>
              <Flex
                px={"8%"}
                alignItems={"center"}
                // py={"42"}
                textAlign={"left"}
                fontSize={
                  isLargerThan ? "calc(1.275rem + .3vw)" : "calc(1rem + .30vw)"
                }
              >
                <Text>
                  www.avyayahealth.com the User to surf the Website or making
                  purchases without registering on the Website. The term
                  "We","Us","Our"; shall mean AVYAYA HEALTH REWINE INDIA LLP.
                  When You use any of the services provided by Us through the
                  Website, including but not limited to, (e.g. Product Reviews,
                  Seller Reviews), You will be subject to the rules, guidelines,
                  policies, terms, and conditions applicable to such service,
                  and they shall be deemed to be incorporated into this Terms of
                  Use and shall be considered as part and parcel of this Terms
                  of Use. We reserve the right, at our sole discretion, to
                  change, modify, add or remove portions of these Terms of Use,
                  at any time without any prior written notice to you. It is
                  your responsibility to review these Terms of Use periodically
                  for updates / changes. Your continued use of the Website
                  following the posting of changes will mean that you accept and
                  agree to the revisions. As long as you comply with these Terms
                  of Use, We grant you a personal, non-exclusive,
                  non-transferable, limited privilege to enter and use the
                  Website.
                </Text>
              </Flex>

              <Flex
                px={"8%"}
                // alignItems={"center"}
                py={"42"}
                textAlign={"left"}
                flexDirection={"column"}
                fontSize={
                  isLargerThan ? "calc(1.275rem + .3vw)" : "calc(1rem + .30vw)"
                }
                gap={"4"}
              >
                <Text>
                  We as a merchant shall be under no liability whatsoever in
                  respect of any loss or damage arising directly or indirectly
                  out of the decline of authorization for any Transaction, on
                  Account of the Cardholder having exceeded the preset limit
                  mutually agreed by us with our acquiring bank from time to
                  time.
                </Text>
                <Text>
                  ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR
                  AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF
                  USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE
                  PROCEEDING.
                </Text>
                <Text>
                  If you accept our Terms and Conditions, you are also accepting
                  our Refund Policy & privacy policy. kindely read all the
                  details.
                </Text>
              </Flex>
              <Flex
                px={"8%"}
                // alignItems={"center"}
                py={"42"}
                textAlign={"left"}
                flexDirection={"column"}
                fontSize={
                  isLargerThan ? "calc(1.275rem + .3vw)" : "calc(1rem + .30vw)"
                }
                gap={"4"}
              >
                <Heading as="h6" size="3md">
                  INTELLECTUAL PROPERTY RIGHTS
                </Heading>
                <Text>
                  All material on this site, including images, illustrations,
                  graphics, utility models, designs, know-how, trade secrets and
                  inventions (patent pending), goodwill, source code, meta tags,
                  databases, text, content, icons, and hyperlinks, are protected
                  by copyrights, trademarks are owned and controlled by “AVYAYA
                  HEALTH” unless otherwise noted. You agree to not use, copy,
                  reproduce, republish, or distribute any content from the
                  website in any way directly or indirectly without prior
                  written authorization from “AVYAYA HEALTH REWINE INDIA LLP”.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </>
      )}
    </div>
  );
}

export default TermsCondition;
