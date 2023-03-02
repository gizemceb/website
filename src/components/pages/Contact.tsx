import {Box, Flex, FlexProps} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../organisms/Contact/ContactForm";
import {Badges} from "../organisms/Badges/Badges";


export default function Contact() {
    const { t } = useTranslation();

    return (
        <Box w={{ base: "auto", lg: "62em" }} m="0 auto" pt="10em" border='1px' borderColor='black'>
            <Flex m="0 auto" pb="30em" justifyContent={"center"} border='1px' borderColor='blue' flexDirection={"column"}>
                <Flex>
                    <ContactForm/>
                </Flex>
                <Flex paddingTop={"10em"}>
                    <Badges/>
                </Flex>
            </Flex>
        </Box>
    );
}
