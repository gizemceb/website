import {Box, Flex, FlexProps, Input, Text} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Desktop } from "../../utils/hooks";
import ContactForm from "../organisms/Contact/ContactForm";


export default function Contact() {
    const { t } = useTranslation();

    const mobileStyle: FlexProps = {
        flexDirection: { base: "column", lg: "row" },
        textAlign: "left",
        padding: { base: "0px 20px", lg: "0px" },
        ml: { base: "0px", lg: "190px" },
    };

    return (
        <Box bg="#f6f5f6" pos={"fixed"} w="100%">
            <Box w={{ base: "auto", lg: "1200px" }} m="0 auto">
                <Flex m="0 auto" pb="110px" pt="150px">
                        <ContactForm/>
                </Flex>
            </Box>
        </Box>
    );
}
