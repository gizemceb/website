import {Box, Flex, Text, Badge, Avatar, Image, Link} from "@chakra-ui/react";
import React from "react";
import {Trans} from "react-i18next";

export function Badges() {

    // TODO: düzelt
    return (
        <Flex>
            <Box ml='3'>
                <Link href={"https://github.com/gizemceb"}>
                    <Image
                        borderRadius='full'
                        boxSize='70px'
                        src='/assets/images/github-mark.png'
                        alt='https://github.com/gizemceb'
                    />
                </Link>
                <Text fontWeight='bold'>
                    gizemceb
                </Text>
                <Text fontSize='sm'>Software Engineer</Text>
            </Box>
            <Box ml='3'>
                <Link href={"https://github.com/gizemceb"}>
                    <Image
                        borderRadius='full'
                        boxSize='70px'
                        src='/assets/images/Linkedin.png'
                        alt='https://github.com/gizemceb'
                    />
                </Link>
                <Text fontWeight='bold'>
                    gizemceb
                </Text>
                <Text fontSize='sm'>Software Engineer</Text>
            </Box>
        </Flex>

    );
}
