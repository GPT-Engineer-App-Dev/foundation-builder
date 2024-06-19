import React from 'react';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to Bare-Bones App
      </Heading>
      <Text fontSize="xl" mb={6}>
        This is a minimal web application with a simple layout and basic structure.
      </Text>
      <Flex justify="center">
        <Button colorScheme="teal" size="lg" mr={4}>
          Get Started
        </Button>
        <Button colorScheme="gray" size="lg">
          Learn More
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;