import React from 'react';
import { useRef } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const RegistrationPage = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


 const Notify = () => { 
        toast("Registered Successfully!"); 
 }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post(`http://localhost:3000/api/register`, { 
            name: firstNameRef.current.value,
             lastname: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value, 
    });
         Notify();
         firstNameRef.current.value = "";
         lastNameRef.current.value = "";
         emailRef.current.value = "";
         passwordRef.current.value = "";
    } catch (error) {
      console.log(error);
      console.log("Could not register");
      toast("Register Succesfully, choose another one!");
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="firstName" mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            ref={firstNameRef}
          />
        </FormControl>
        <FormControl id="lastName" mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            id="lastname"
            ref={lastNameRef}
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            ref={emailRef}
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            ref={passwordRef}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </form>
      <ToastContainer />
    </Box>
    
  );
};

export default RegistrationPage;
