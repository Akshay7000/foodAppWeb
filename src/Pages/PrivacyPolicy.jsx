import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      {false ? (
        <Loading />
      ) : (
        <>
          <Box pt={"40"} pb={"20"} mx={"14"}>
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
                <Heading>Privacy & Policy</Heading>
              </Flex>
              <Flex
                px={"8%"}
                alignItems={"center"}
                // py={"42"}
                textAlign={"left"}
                fontSize={"calc(1.275rem + .3vw)"}
              >
                <Text>
                  This policy explains how “AVYAYA HEALTH REWINE INDIA LLP”
                  (WWW.AVYAYAHEALTH.COM), use your personal information that you
                  provide to us when using our service, including but not
                  limited to our website, mobile applications (apps) and any
                  other current or future modes of communication / interaction.
                </Text>
              </Flex>
              <Flex
                px={"8%"}
                alignItems={"center"}
                // py={"42"}
                textAlign={"left"}
                fontSize={"calc(1.275rem + .3vw)"}
              >
                <Text>
                  We are committed to safeguarding your privacy and upholding
                  the highest levels of information security. Hence, we adhere
                  to the strictest consumer privacy guidelines and use
                  state-of-the-art security technology to protect any
                  information you provide to and through our website, mobile
                  applications (app) and any other modes of communication /
                  interaction.
                </Text>
              </Flex>

              <Flex
                px={"8%"}
                // alignItems={"center"}
                py={"42"}
                textAlign={"left"}
                flexDirection={"column"}
                fontSize={"calc(1.275rem + .3vw)"}
                gap={"4"}
              >
                <Heading as="h6" size="3md">
                  SECURE ONLINE PAYMENTS
                </Heading>
                <Text>
                  We are committed to safeguarding your privacy and upholding
                  the highest levels of information security. Hence, we adhere
                  to the strictest consumer privacy guidelines and use
                  state-of-the-art security technology to protect any
                  information you provide to and through our website, mobile
                  applications (app) and any other modes of communication /
                  interaction.
                </Text>
              </Flex>
              <Flex
                px={"8%"}
                // alignItems={"center"}
                py={"42"}
                textAlign={"left"}
                flexDirection={"column"}
                fontSize={"calc(1.275rem + .3vw)"}
                gap={"4"}
              >
                <Heading as="h6" size="3md">
                  SMART COOKIES
                </Heading>
                <Text>
                  A cookie is a small amount of data, which often includes an
                  anonymous unique identifier, that is sent to your browser from
                  a web site's computers and stored on your computer's hard
                  drive. They are widely used in order to make websites work, or
                  work more efficiently, as well as to provide information to
                  the owners of the site and to understand how you arrived at
                  our website. “www.avyayahealth.com” requires that cookies are
                  enabled on your browser settings for it to function properly.
                  This website uses Web Analytics, which is a web analytics
                  service provided by third-party service providers. Web
                  Analytics uses "cookies", which are text files saved on your
                  computer, to help the website analyze how you use the site.
                  The information generated by the cookie about your use of the
                  website will be transmitted to and stored by the third- party
                  service provider on secured servers. If this website
                  anonymizes IP addresses, your IP address will be truncated by
                  the service provider before being transmitted. Only in
                  exceptional situations will your full IP address be
                  transmitted to the service provider’s servers and truncated
                  there. The service provider will use this information for the
                  purpose of evaluating your use of the website, compiling
                  reports on website activity for website operators and
                  providing other services relating to website activity and
                  internet usage. The service provider will not associate your
                  IP address with any other data held by it. You may refuse the
                  use of cookies by selecting the appropriate settings on your
                  browser, however please note that if you do this you may not
                  be able to use the full functionality of this website. By
                  using this website, you consent to the processing of data
                  about you by the service provider in the manner and for the
                  purposes set out above
                </Text>
              </Flex>
            </Flex>
          </Box>
        </>
      )}
    </div>
  );
}

export default PrivacyPolicy;
