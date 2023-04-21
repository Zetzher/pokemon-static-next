import { useEffect, useState } from "react";
import { Card, Grid } from "@nextui-org/react";
import { NoFavorites } from "@/components/ui";
import { Layout } from "../../components/layouts";
import { localFavorites } from "../../../utils";
import { FavoritePokemons } from "@/components/pokemon";

const FavouritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);
  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
      <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavouritesPage;
