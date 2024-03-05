import React from "react";
import { Box, Button, Container, VStack, Heading, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, HStack } from "@chakra-ui/react";
import { FaUpload, FaExpand, FaCompress, FaCog, FaPlay, FaPause } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={5}>
        <Heading>Gaussian Splatting 3D Viewer</Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
          <Text mb={2}>3D Viewport Placeholder</Text>
          <Box h="400px" bg="gray.300" position="relative" borderRadius="md">
            <Box position="absolute" top="25%" left="25%" w="50%" h="50%" bg="gray.500" boxShadow="lg" borderRadius="md">
              <Text color="white" fontSize="xl" p={3}>
                3D Model Placeholder
              </Text>
            </Box>
          </Box>
        </Box>
        <HStack justifyContent="space-between" w="100%" py={3}>
          <IconButton icon={<FaUpload />} aria-label="Load Model" />
          <IconButton icon={<FaExpand />} aria-label="Zoom In" />
          <IconButton icon={<FaCompress />} aria-label="Zoom Out" />
          <IconButton icon={<FaCog />} aria-label="Settings" />
          <IconButton icon={<FaPlay />} aria-label="Play Animation" />
          <IconButton icon={<FaPause />} aria-label="Pause Animation" />
        </HStack>
        <Box w="100%">
          <Text mb={2}>Adjust Gaussian Splatting Parameters</Text>
          <Slider defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
