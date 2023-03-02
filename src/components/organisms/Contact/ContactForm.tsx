import {
    Box, Button,
    Flex, FormControl, FormLabel,
    Input, VStack, Text, Textarea
} from "@chakra-ui/react";
import React from 'react'
import {Formik, Field, getIn} from "formik";
import * as Yup from 'yup';
import {Trans} from "react-i18next";
import { send } from 'emailjs-com';

export default function ContactForm() {

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        message: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    function getStyles(errors: any, fieldName: string) {
        if (getIn(errors, fieldName)) {
            return {
                border: '1px solid red'
            }
        }
    }

    return (
        <>
            <Box
                width="100%"
                height={"30em"}
                border='1px'
                borderColor='gray.200'
                position={"relative"}>
            <Flex>
                <Text
                    fontSize="2xl"
                    fontWeight="800"
                    mt="20"
                    w="100%"
                    lineHeight="1"
                    fontFamily={"Source Code Pro"}
                    position={"absolute"}
                    zIndex={1}
                    paddingBottom={"20px"}
                    paddingLeft={"10px"}>
                    <Trans i18nKey="Contact.Message" />
                </Text>
            </Flex>
            <Flex
                w={"100%"}
                justifyContent={"center"}
                height={"32em"}
                alignItems={"flex-end"}
                paddingBottom={"30px"}
                position={"absolute"}
                bg={"#FAF7F0"}
                borderRadius={"25px"}
                boxShadow={"0 0 5px 5px #CBC3E3"}
            >
            <Formik
                initialValues={{
                    email: "",
                    firstName: "",
                    lastName: "",
                    message: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    send(
                        'service_mpdk7b4',
                        'template_09omxjv',
                        values,
                        'dbF9XEig3xE9x2TuG'
                    )
                        .then((response) => {
                            // TODO: bak alert ekle
                            console.log('SUCCESS!', response.status, response.text);
                        })
                        .catch((err) => {
                            console.log('FAILED...', err);
                        });
                }}
            >

                {({handleSubmit, errors, touched}) => (
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4} alignItems={{base:"center"}} >
                            <Flex>
                                <Flex flexDirection={"column"}>
                                    <FormControl>
                                        <FormLabel htmlFor="email">
                                            <Trans i18nKey="Contact.Email"/>
                                        </FormLabel>
                                        <Field
                                            as={Input}
                                            id="email"
                                            name="email"
                                            type="email"
                                            variant="filled"
                                            w={400}
                                            style={getStyles(errors,'email')}
                                        />
                                        { /*errors.email && touched.email ? <div>{errors.email}</div> : null */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="firstName">
                                            <Trans i18nKey="Contact.FirstName"/>
                                        </FormLabel>
                                        <Field
                                            as={Input}
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            variant="filled"
                                            w={400}
                                            style={getStyles(errors,'firstName')}
                                        />
                                        { /*errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="lastName">
                                            <Trans i18nKey="Contact.LastName"/>
                                        </FormLabel>
                                        <Field
                                            as={Input}
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            variant="filled"
                                            w={400}
                                            style={getStyles(errors,'lastName')}
                                        />
                                        { /*errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null */}
                                    </FormControl>
                                </Flex>
                                <FormControl>
                                    <FormLabel htmlFor="message">
                                        <Trans i18nKey="Contact.MailMessage"/>
                                    </FormLabel>
                                    <Box paddingLeft={"10px"}>
                                        <Field
                                            as={Textarea}
                                            id="message"
                                            name="message"
                                            type="text"
                                            variant="filled"
                                            style={getStyles(errors,'message')}
                                            height={"10em"}
                                            w={500}
                                        />
                                    </Box>
                                </FormControl>
                            </Flex>

                            <Button type="submit" colorScheme="purple" width="full">
                                <Trans i18nKey="Contact.Send"/>
                            </Button>
                        </VStack>
                    </form>
                )}
            </Formik>
            </Flex>
            </Box>
        </>
    );
}

