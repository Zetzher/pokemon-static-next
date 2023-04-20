import { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts/index";
import { pokeApi } from "../../api";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((data: SmallPokemon, index: number) => (
          <PokemonCard key={index} pokemon={data} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results;
  pokemons.forEach((data: SmallPokemon, index: number) => {
    data.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`;
    data.id = index + 1;
  });
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
