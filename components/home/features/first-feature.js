"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPersonCircleCheck, FaRegHandshake, FaChild } from "react-icons/fa6";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function FirstFeature() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Brief Introduction
          </Text>
          <Heading>Pesantren Salafi Putri Mitra Ayah Bunda</Heading>
          <Text color={"gray.500"} fontSize={["md", "md", "lg"]}>
            Pesantren Kampung Santri adalah mitra ayah bunda dalam mendidik
            putri tercinta agar menjadi generasi terbaik. Generasi yang
            mencintai Allah dan rasulNya. Yang menjadikan Alqur'an sebagai
            panduan hidup dengan selalu membaca, menghafal dan mengamalkan
            isinya. Generasi yang berjaya dengan merealisasikan tauhid dan
            mengamalkan sunnah nabi shalallahu alaihi wasallam dalam seluruh
            aspek kehidupan
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon
                  as={FaPersonCircleCheck}
                  color={"yellow.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Profesional"}
            />
            <Feature
              icon={
                <Icon as={FaRegHandshake} color={"green.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Amanah"}
            />
            <Feature
              icon={<Icon as={FaChild} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Ramah Anak"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src="/images/home-page/first-feature.jpeg"
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
