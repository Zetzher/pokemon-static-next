import NextLink from "next/link";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Ditto"
        width={70}
        height={70}
      />
      <NextLink href="/" style={{ display: "flex" }}>
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
      </NextLink>
      <NextLink href="/favourites" style={{ marginLeft: 10 }}>
        <Text color="white">Favoritos</Text>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
    </div>
  );
};
