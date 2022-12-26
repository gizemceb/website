import { useTranslation} from "react-i18next";
import React, {useState} from "react";
import { Box, CloseButton, Flex} from "@chakra-ui/react";

export function Cookies() {
    const {t} = useTranslation();
    const [isOpen, setOpen] = useState(true);

    // TODO: add pdf
    if (window.localStorage.getItem('USER_ACCEPTED_COOKIE_MANAGEMENT') !== 'true') {
        return (
            <Flex
                position="fixed"
                bottom="0px"
                bg="white"
                width="350px"
                fontSize={12}
                borderRadius={20 / 2}
                margin="10px 10px"
                boxShadow="0px 0px 48px 0px rgba(0,0,0,0.12)"
                padding={2}
                height="350px"
                alignItems="center"
                whiteSpace="normal"
            >
                <Box>
                    {t("Cookies.info")}
                </Box>
                <CloseButton
                    onClick={
                        () => {
                            setOpen(false);
                            window.localStorage.setItem('USER_ACCEPTED_COOKIE_MANAGEMENT', 'true');
                        }
                    }>
                </CloseButton>
            </Flex>
        );
    }
    return null;
}
