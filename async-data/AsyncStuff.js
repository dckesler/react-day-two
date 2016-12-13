import axios from "axios";

export function getPokemon(name) {
	return axios.get(`http://pokeapi.co/api/v2/pokemon/${name}`)
}


