import {
    Alert,
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    Input,
    Textarea
} from "@chakra-ui/react";
import React, {useState} from 'react'
import {Form, Formik, Field, FormikProps, useFormik} from "formik";
import {Trans, useTranslation} from "react-i18next";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export default function ContactForm() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Flex padding={"20px"}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.firstName}
                    margin={"10px"}
                />

                <label htmlFor="lastName">Last Name</label>
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.lastName}
                    margin={"10px"}
                />

                <label htmlFor="email">Email Address</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.email}
                    margin={"10px"}
                />

                <button type="submit">Submit</button>
            </form>
        </Flex>
    );
}

