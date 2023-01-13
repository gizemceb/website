import {Box, Container, Flex, Text, Wrap} from "@chakra-ui/react";
import { Information } from "../organisms/Information/Information";
import { Desktop } from "../../utils/hooks";

export default function Homepage() {
    return (
        <Desktop>
        <Box pos="fixed" w="100%">

           <Box
               backgroundImage={`url("/assets/images/flowers.png")`}
               w="100%"
               h={{ base: "300px", lg: "2500px" }}
               backgroundSize="cover">

           <Information />
           </Box>
        </Box>
        </Desktop>
    );
}
