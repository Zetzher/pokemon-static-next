import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Julián Abasolo" />
        <meta
          name="description"
          content={`Información sobre el pokemón ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* Navbar */}
      <main>{children}</main>
    </>
  );
};
