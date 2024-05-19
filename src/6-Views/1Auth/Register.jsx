import React from "react";
import styled from "styled-components";

import * as yup from "yup";
import { Formik, Form } from "formik";
import Logo from "../../1-Assets/logos/Logo.svg";
import HeroBg from "../../1-Assets/Hero2.svg";
import { Box, Stack } from "@chakra-ui/react";
import Footer from "../../2-Components/Footer/Footer";

const Register = () => {
     const initialValues = {
       email: "",
       fullname: "",
       username: "",
       password: "",
    };
    
     const validationSchema = yup.object().shape({
       username: yup.string().required("required"),
       fullname: yup.string().required("required"),
       email: yup.string().required("required"),
       password: yup.string().required("required"),
     });
  return (
    <Container>
      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <HeroContent className="flex justify-center items-center bg-[rgba(20, 17, 24, 1)] relative">
          <img
            src={HeroBg}
            alt=""
            className="flex absolute top-0 object-cover h-full w-full slect-none bg-gradient-to-b from-transparent to-secondary-700 object-left-top"
            style={{
              filter: "brightness(20%)", // Adjust brightness if needed
            }}
          />
          <div className="flex absolute top-0 object-cover h-full w-full select-none  bg-gradient-to-b from-transparent to-[#18151c]" />

          <Box className="w-full h-full z-10 flex items-center justify-center">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values, helpers) => {
                //set dialog
                alert("completed registration");
              }}
            >
              {({ values, handleChange, errors, handleSubmit }) => (
                <Form>
                  <Stack
                    direction="column"
                    spacing="22px"
                    className="max-w-[304px] mx-auto"
                  >
                    {/** logo */}
                    <ImageContainer className="absolute top-[34px] left-10">
                      <img src={Logo} alt={"Nyati Films"} />
                    </ImageContainer>
                    {/** form title */}
                    <Stack>
                      <h1 className="text-[#F2F2F2] text-[26px] text-center select-none font-[Inter-Bold]">
                        {" "}
                        Create account
                      </h1>
                      <p className="text-[#F2F2F2] text-[14px] text-center select-none font-[Inter-Regular]">
                        Enter your account details below or{" "}
                        <span className="text-[#ED3F62] underline underline-offset-2 cursor-pointer font-[Inter-SemiBold]">
                          Sign in
                        </span>
                      </p>
                    </Stack>
                    {/** forms */}
                    <Stack spacing={"17px"}>
                      <SingleWrapper>
                        <FormContainer className="flex flex-col ">
                          <label className="text-[#bdb8b8] text-[12.56px]">
                            Mobile Number or Email
                          </label>
                          <input
                            name="email"
                            value={values.email}
                            className="text-[#ffffff] text-[14.35px] font-[Inter-Medium]"
                            onChange={handleChange}
                          />
                          {errors && errors.email ? (
                            <p className="text-primary-600 text-[15px] font-[Segoe-UI]">
                              {errors.email}
                            </p>
                          ) : null}
                        </FormContainer>
                      </SingleWrapper>
                      <SingleWrapper>
                        <FormContainer>
                          <label className="text-[#bdb8b8] text-[12.56px]">
                            Full Name
                          </label>
                          <input
                            type={"string"}
                            name="fullname"
                            value={values.fullname}
                            onChange={handleChange}
                            className="text-[#ffffff] text-[14.35px] font-[Inter-Medium]"
                          />
                          {errors && errors.fullname ? (
                            <p className="text-primary-600 text-[15px] font-[Segoe-UI]">
                              {errors.fullname}
                            </p>
                          ) : null}
                        </FormContainer>
                      </SingleWrapper>

                      <SingleWrapper>
                        <FormContainer>
                          <label className="text-[#bdb8b8] text-[12.56px]">
                            Username
                          </label>
                          <input
                            type={"string"}
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            className="text-[#ffffff] text-[14.35px] font-[Inter-Medium]"
                          />
                          {errors && errors.username ? (
                            <p className="text-primary-600 text-[15px] font-[Segoe-UI]">
                              {errors.username}
                            </p>
                          ) : null}
                        </FormContainer>
                      </SingleWrapper>

                      <SingleWrapper>
                        <FormContainer>
                          <label className="text-[#bdb8b8] text-[12.56px]">
                            Password
                          </label>
                          <input
                            type={"string"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className="text-[#ffffff] text-[14.35px] font-[Inter-Medium]"
                          />
                          {errors && errors.password ? (
                            <p className="text-primary-600 text-[15px] font-[Segoe-UI]">
                              {errors.password}
                            </p>
                          ) : null}
                        </FormContainer>
                      </SingleWrapper>
                      <SingleWrapper>
                        <FormContainer>
                          <label className="text-[#bdb8b8] text-[12.56px]">
                            Confirm Password
                          </label>
                          <input
                            type={"string"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className="text-[#ffffff] text-[14.35px] font-[Inter-Medium]"
                          />
                          {errors && errors.password ? (
                            <p className="text-primary-600 text-[15px] font-[Segoe-UI]">
                              {errors.password}
                            </p>
                          ) : null}
                        </FormContainer>
                      </SingleWrapper>
                    </Stack>
                    {/** form buttons */}
                    <Stack spacing="18px">
                      <Box
                        onClick={handleSubmit}
                        as="button"
                        className="block w-full rounded-full border border-[#EE5170] bg-[#EE5170] px-12 py-3 text-sm font-medium text-whites-40 text-[14.35px] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16 font-[Inter-SemiBold]"
                      >
                        Create account
                      </Box>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
              </HeroContent>
              <Footer />
      </Stack>
    </Container>
  );
};

export default Register;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;

const HeroContent = styled.section`
  height: 100vh;
  background: rgba(10, 1, 16, 1);
  background-size: cover;
`;

const SingleWrapper = styled(Box)``;
const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 4px;

  input {
    height: 48px;
    background: #36323e;
    border: 1px solid rgba(238, 241, 244, 0.3);
    border-radius: 6px;
   
    text-indent: 10px;
  }
`;

const ImageContainer = styled(Stack)`
  height: 102px;
  width: 102px;
  opacity: 1;
  img {
    height: 100%;
  }
`;

