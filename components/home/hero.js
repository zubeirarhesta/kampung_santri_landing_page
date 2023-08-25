import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  const COLOR_KS = "#639c33";
  const opti = `'Kaisei Opti', serif`;
  const nunito = `'Nunito', sans-serif`;
  return (
    <Flex
      as="section"
      textAlign={["left", "center"]}
      bgImage="url('/images/home-page/hero.jpeg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p="2rem"
      direction={["column", "row", "row"]}
      minW="22rem"
      minH={["70vh", "85vh", "100vh"]} // addition
      justify="center" // addition
      align="center" //addition
    >
      <Box
        mt={["0", "2rem", "2rem"]}
        p={["0.8rem", "1.5rem"]}
        w={["xs", "sm", "lg"]}
        borderRadius="10px"
        minH={["120px", "230px", "300px"]}
        maxW={["180px", "80%", "80%"]}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign={["center", "start", "start"]}
        bg="blackAlpha.500"
      >
        <Image
          src="/images/logo/LOGO_KS.png"
          alt="Logo Kampung Santri"
          sizes="(max-width: 20px) 20px"
          width={100}
          height={100}
          style={{
            objectFit: "contain",
            objectPosition: "top",
            width: "12%",
            height: "12%",
          }}
        />
        <Heading
          as="h1"
          size={["lg", "lg", "2xl"]}
          color={COLOR_KS}
          mb="10px"
          fontFamily={opti}
        >
          Kampung Santri
        </Heading>

        <Text fontSize={["md", "md", "xl"]} fontFamily={nunito} color="white">
          &quot;Satu Kampung, Santri Semua&quot;
        </Text>
      </Box>
    </Flex>
  );
}
