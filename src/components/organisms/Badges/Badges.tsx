import {Box, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import {Trans, useTranslation} from "react-i18next";
import BadgeItem from "../../molecules";


export function Badges() {
    const { t } = useTranslation();
    return (
        <Box
            width="100%"
            height={"30em"}
            border='1px'
            borderColor='gray.200'
            position={"relative"}>

            <Flex  width="100%">
                <Image
                    padding="40px"
                    borderRadius='full'
                    boxSize='200px'
                    src="/assets/images/profilepic.png"
                    position={"absolute"}
                    zIndex={1}
                />

                <Text
                    align="center"
                    fontSize="2xl"
                    fontWeight="800"
                    mt="20"
                    w="100%"
                    lineHeight="1"
                    fontFamily={"Source Code Pro"}
                    position={"absolute"}
                    zIndex={1}
                    paddingTop={"10px"}>
                    <Trans i18nKey="Contact.Info" />
                </Text>

                <Text
                    align="center"
                    fontSize="2xl"
                    fontWeight="800"
                    mt="20"
                    w="100%"
                    lineHeight="1"
                    fontFamily={"Source Code Pro"}
                    position={"absolute"}
                    zIndex={1}
                    paddingTop={"50px"}>
                    <Trans i18nKey="Contact.EmailAddress" />
                </Text>
            </Flex>

            <Flex w={"100%"}
                  height={"32em"}
                  alignItems={"flex-end"}
                  paddingBottom={"30px"}
                  position={"absolute"}
                  bg={"#FAF7F0"}
                  borderRadius={"25px"}
                  boxShadow={"0 0 5px 5px #CBC3E3"}>
                <BadgeItem data={[
                    {
                        picUrl: "/assets/images/github.png",
                        link: "https://github.com/gizemceb",
                        header: "gizemceb",
                        text: t("Contact.PositionTitle")
                    },
                    {
                        picUrl: "/assets/images/linkedin.png",
                        link: "https://github.com/gizemceb",
                        header: "gizemceb",
                        text: t("Contact.PositionTitle")
                    }
                ]}/>
            </Flex>
        </Box>


    );
}
