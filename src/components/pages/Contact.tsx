import {Box, Flex, Image} from "@chakra-ui/react";
import React from "react";
import {useTranslation} from "react-i18next";
import ContactForm from "../organisms/Contact/ContactForm";
import {Badges} from "../organisms/Badges/Badges";


export default function Contact() {
    const {t} = useTranslation();

    return (
        <Box w={{base: "auto", lg: "62em"}} m="0 auto" pt="10em">
            <Flex m="0 auto" pb="30em" justifyContent={"center"}
                  flexDirection={"column"}>
                <Flex>
                    <ContactForm/>
                </Flex>
                <Flex m="0 auto" pb="10em" justifyContent={"center"}
                      flexDirection={"column"} paddingTop={"10em"} width="100%">
                    <Badges/>
                </Flex>
            </Flex>
        </Box>
    );
}
