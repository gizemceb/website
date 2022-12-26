import {
  Box,
  Flex, Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Desktop } from "../../utils/hooks";
import { Language, urls } from "../../utils/language";

export const routeWithParameters = (url: string): string => {
  const searchParams = window.location.search;
  if (searchParams !== "") {
    return `${url}${searchParams}`;
  } else {
    return url;
  }
};

export function Header() {
  const { t } = useTranslation();

  const headerLink = {
    color: "white",
    cursor: "pointer",
    marginTop: "12px",
    marginBottom: "12px",
    _hover: {
      color: "red.500",
    },
  };

  return (
      <>
        {/* Desktop Menu */}
        <Desktop>
          <Box bg="white" pos="fixed" top="0" w="100%" zIndex={10}>
            <Flex>
              <Box p='4' justifyContent="center" padding={"30px"}>
                <Text fontSize={"25px"} lineHeight={"2"} fontWeight="600" bg={"#FAF7F0"} borderRadius={"15px"} padding={"5px"}>
                  <Link to={routeWithParameters(urls.Homepage)}> Gizem Çebi</Link>
                </Text>
              </Box>
              <Spacer />

              <Box
                  p='4'
                  cursor="pointer"
                  color="black"
                  _hover={{
                    color: "grey",
                  }}
                  justifyContent="center"
                  fontWeight="600"
              >
                <Text fontSize={"25px"} lineHeight={"2"}>
                  <Link to={routeWithParameters(urls.Projects)}>
                    {t("Menu.Projects")}
                  </Link>
                </Text>
              </Box>

              <Box
                  p='4'
                  cursor="pointer"
                  color="black"
                  _hover={{
                      color: "grey",
                  }}
                  justifyContent="center"
                  fontWeight="600"
              >
                <Text fontSize={"25px"} lineHeight={"2"}>
                    <Link to={routeWithParameters(urls.Contact)}>
                      {t("Menu.Contact")}
                    </Link>
                </Text>
              </Box>

              <Flex>
                {
                  ['tr', 'en'].map((item, index) => {
                    return (
                        <Text
                            key={index.toString()}
                            fontWeight="600"
                            cursor="pointer"
                            marginRight="5px"
                            marginLeft="5px"
                            color="#fff"
                            onClick={() => {
                              Language.change(item);
                            }}
                        >
                          {item.toUpperCase()}
                        </Text>
                    );
                  })}
              </Flex>
            </Flex>
          </Box>
        </Desktop>
      </>
  );
}
