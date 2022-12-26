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
                >
                    <Text as="h1" fontSize="4xl" fontWeight="800" mt="20" justifyContent={"center"}>
                        <Trans i18nKey="HomePage.Information" />
                    </Text>
                    <Text as="h1" fontSize="5xl" lineHeight="2" mt="5" padding={"5em"} fontWeight="800">
                        Burası güncellenecek
                    </Text>
                </Flex>
            </Flex>

        </>
    </Box>
  );
}
