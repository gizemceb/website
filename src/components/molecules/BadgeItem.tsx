import {Box, Flex, Text, Image, Link} from "@chakra-ui/react";
import React from "react";

interface IData {
    link: string,
    picUrl: string,
    text: string,
    header: string,
}

interface IBadgeList {
    data?: IData[]
}

const BadgeItem: React.FC<IBadgeList> = ({data}) => {
    const renderBadges = () => {
        return data?.map((item) => {
            return (
                <Box ml='3' margin="10px">
                    <Link href={item.link}>
                        <Image
                            display={"block"}
                            marginLeft={"auto"}
                            marginRight={"auto"}
                            borderRadius='full'
                            boxSize='50px'
                            src={item.picUrl}
                            alt={item.link}
                        />
                    </Link>
                    <Text fontWeight='bold' align={"center"}>
                        {item.header}
                    </Text>
                    <Text fontSize='sm'>{item.text}</Text>
                </Box>
            )
        }) || null;
    }
    return (
        <Flex  flexDirection={"column"} padding="30px">
            {renderBadges()}
        </Flex>
    );
}

export default BadgeItem;

// author is gizem cebi :D
