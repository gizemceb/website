import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import {Trans} from "react-i18next";

export function Information() {

  return (
    <Box w={{ base: "auto" }}>
        <>
            <Flex
                id="info"
                justifyContent="center"
                alignItems={{ base: "center" }}
                px={{ base: 5, lg: 0 }}
            >
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    padding={"10em"}
                    w="50%"
                >
                    <Text as="h1" fontSize="2xl" fontWeight="800" mt="20" w="100%" lineHeight="1">
                        <Trans i18nKey="HomePage.Information" />
                    </Text>
                    <Text as="h1" fontSize="1xl" lineHeight="2" mt="5" padding={"2em"} fontWeight="800" w="100%">
                        <Trans i18nKey="HomePage.Summary" />
                    </Text>
                </Flex>
            </Flex>

        </>
    </Box>
  );
}
