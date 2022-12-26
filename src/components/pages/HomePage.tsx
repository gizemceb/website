import {Box} from "@chakra-ui/react";
import { Information } from "../organisms/Information/Information";

export default function Homepage() {
    return (
        <Box bg="white" pos="fixed" w="100%" zIndex={10}>
            <Information />
        </Box>
    );
}
