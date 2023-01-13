import {Box, Container, Flex, Text, Wrap} from "@chakra-ui/react";
import { Information } from "../organisms/Information/Information";
import { Desktop } from "../../utils/hooks";

export default function Homepage() {
    return (
        <Desktop>
        <Box pos="fixed" w="100%">

           <Box
               alignItems={{ base: "center" }}
               backgroundImage={`url("/assets/images/flowers.png")`}
               backgroundPosition={"center"}
               w="100%"
               h={{ base: "300px", lg: "2500px" }}
               backgroundSize="cover"
               backgroundRepeat={"no-repeat"}
               backgroundAttachment={"fixed"}
               marginTop={"-70px"}>

           <Information />
           </Box>
        </Box>
        </Desktop>
    );
}
