import axios from 'axios';

export const getPokemonList = async () =>
  await axios
    .get(`${process.env.NEXT_PUBLIC_POKE_END_POINT}/1pokemon?offset=0&limit=50`)
    .then((res) => res)
    .catch((err) => Promise.reject(err));
