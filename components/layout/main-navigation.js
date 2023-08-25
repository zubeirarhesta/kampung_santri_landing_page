import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const animate = "all 0.3s ease-in-out";
const nunito = `'Nunito', sans-serif`;
const COLOR_KS = "#639c33";
const opti = `'Kaisei Opti', serif`;

const Links = ["About", "Teachers", "Services"];

function NavLink({ children }) {
  const link = children.includes("Ask")
    ? "/contact"
    : `/${children.toLowerCase()}`;
  return (
    <Box
      ml={["2px", "5px"]}
      p={["2", "4"]}
      fontFamily={nunito}
      fontWeight="bold"
      fontSize={["lg"]}
      color="whiteAlpha.600"
      transition={animate}
      _hover={{
        color: "whiteAlpha.800",
      }}
      _active={{
        color: "white",
      }}
    >
      <Link href={link}>{children}</Link>
    </Box>
  );
}

export default function MainNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      position="fixed"
      maxH="80px"
      minW="22rem"
      width="100%"
      px="0.5rem"
      py="0.5rem"
      top={0}
      align="center"
      bg="#071d05de" /* "#182417af" */ /* "#4E707580" */
      backdropFilter="saturate(180%) blur(5px)"
      zIndex="1"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
        ml={["5px", "10px"]}
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
            width: "7%",
            height: "7%",
          }}
        />
        <Heading
          fontSize={["0.9rem", "1.1rem", "1.5rem"]}
          marginLeft={["5px", "7px", "10px"]}
          fontFamily={opti}
          color="whiteAlpha.600"
          transition={animate}
          _hover={{
            color: COLOR_KS,
          }}
        >
          <Link href="/">Kampung Santri</Link>
        </Heading>
      </Box>

      <Spacer />
      <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
        {Links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>
      <Menu closeOnBlur={false}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          size="sm"
          p="0"
          mr="0.3rem"
          icon={
            isOpen ? (
              <CloseIcon
                color={COLOR_KS} /* "whiteAlpha.800" */
                mb="2px"
                ml="1px"
                /* _hover={{
                  color: "white",
                }} */
              />
            ) : (
              <HamburgerIcon mb="2px" ml="2px" />
            )
          }
          variant="ghost"
          color="whiteAlpha.800"
          transition={animate}
          _hover={{
            color: "white",
            bg: "whiteAlpha.300",
          }}
          _active={{
            border: `2px solid ${COLOR_KS}` /* "2px solid white" */,
          }}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <MenuList
          display={{ md: "none" }}
          width="99vw"
          minW="22rem"
          mr="2px"
          mt={["-1px", "0", "0"]}
          py="0"
          border="none"
          borderTopRadius="none"
          borderBottomRadius={["10px", "10px", "none"]}
          bg="#071d05de"
          style={{
            backdropFilter: "saturate(180%) blur(5px)",
          }}
          zIndex="1"
        >
          {Links.map((link, i) => (
            <MenuItem
              key={link}
              py="0.5rem"
              color="whiteAlpha.800"
              bg="transparent"
              fontFamily={nunito}
              borderBottomRadius={i === Links.length - 1 ? "10px" : null}
              fontWeight="bold"
              transition={animate}
              _hover={{
                color: "black",
                bg: "#a0db7085" /* "whiteAlpha.900" */,
              }}
              onClick={isOpen ? onClose : onOpen}
            >
              <Link
                href={
                  link.includes("Ask") ? "/contact" : `/${link.toLowerCase()}`
                }
              >
                {link}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}

/* <Flex
      as="header"
      bg="blackAlpha.700"
      position="fixed"
      maxH="80px"
      minW="22rem"
      width="100%"
      align="center"
      px="1rem"
      backdropFilter="saturate(180%) blur(5px)"
      zIndex="1"
      top={0}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          ml={["5px", "10px"]}
          fontSize={["1.5rem", "1.7rem", "2rem"]}
          fontFamily={nunito}
          color="whiteAlpha.600"
          transition={animate}
          _hover={{
            color: "white",
          }}
        >
          <Link href="/">zmarhesta</Link>
        </Heading>
      </Box>

      <Spacer />
      <Box
        p={["2", "4"]}
        fontFamily={nunito}
        fontWeight="bold"
        fontSize={["lg", "xl"]}
        color="whiteAlpha.600"
        transition={animate}
        _hover={{
          color: "whiteAlpha.800",
        }}
        _active={{
          color: "white",
        }}
      >
        <Link href="/posts">posts</Link>
      </Box>
      <Box
        ml={["2px", "5px"]}
        p={["2", "4"]}
        fontFamily={nunito}
        fontWeight="bold"
        fontSize={["lg", "xl"]}
        color="whiteAlpha.600"
        transition={animate}
        _hover={{
          color: "whiteAlpha.800",
        }}
        _active={{
          color: "white",
        }}
      >
        <Link href="/contact">contact</Link>
      </Box>
      <Box
        ml={["2px", "5px"]}
        p={["2", "4"]}
        fontFamily={nunito}
        fontWeight="bold"
        fontSize={["lg", "xl"]}
        color="whiteAlpha.600"
        transition={animate}
        _hover={{
          color: "whiteAlpha.800",
        }}
        _active={{
          color: "white",
        }}
      >
        <Link href="/login">login</Link>
      </Box>
    </Flex> */
