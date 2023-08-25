"use client";

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function SecondFeature() {
  const opti = `'Kaisei Opti', serif`;
  return (
    <Box
      as={Container}
      /* w="100%" */

      minW="22rem"
      maxW="full"
      mt={14}
      /* p={6} */
      px={["1rem", "1rem", "6rem"]}
      py={["1rem", "2rem"]}
      bgColor="green.100"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700" fontFamily={opti}>
              Kampung Santri
            </chakra.h2>
            <Button colorScheme="green" size="md">
              <Link href="/about">Know Us More</Link>
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Pesantren Kampung Santri, pesantren ahlussunnah wal jamaah.
              Pesantren bermanhaj salaf yang terus berusaha selalu berjalan
              diatas agama Islam yang haq berdasarkan Alqur'an dan sunnah nabi
              sesuai pemahaman para sahabat
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"KURIKULUM TEPAT"}
          text={"kurikulum yang relevan untuk mempersiapkan anak didik"}
        />
        <Feature
          heading={"SISTEM KUAT"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"SDM HEBAT"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"PELAYANAN MEMIKAT"}
          text={"Short text describing one of you features/service"}
        />
      </Grid>
    </Box>
  );
}
