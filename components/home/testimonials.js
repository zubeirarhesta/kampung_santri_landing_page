"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const COLOR_KS = "#639c33";
const opti = `'Kaisei Opti', serif`;
const nunito = `'Nunito', sans-serif`;

const Testimonial = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"} fontFamily={nunito}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
      fontFamily={nunito}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"} fontFamily={nunito}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading fontFamily={nunito}>Apa Kata Mereka</Heading>
          {/* <Text fontFamily={nunito}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text> */}
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Suasana yang nyaman</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://w0.peakpx.com/wallpaper/162/645/HD-wallpaper-attack-on-titan-eren-yeager-shingeki-no-kyojin.jpg"
              }
              name={"Ahmad"}
              title={"Ayahanda Fulanah"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Makanan yang berkelas</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://w0.peakpx.com/wallpaper/686/39/HD-wallpaper-one-punch-man-anime-saitama.jpg"
              }
              name={"Saiful"}
              title={"Ayahanda Fulanah"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Anak Lebih Shalihah</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://w0.peakpx.com/wallpaper/527/583/HD-wallpaper-kenshin-himura-protagonist-artwork-manga-rurouni-kenshin.jpg"
              }
              name={"Khalid"}
              title={"Ayahanda Fulanah"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
