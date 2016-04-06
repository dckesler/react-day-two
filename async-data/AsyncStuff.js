import axios from "axios";

export function pokemon(id, cb) {
	axios.get(`http://pokeapi.co/api/v2pokemon/${id}`)
		.then((response) => {
		cb(response.data.name)
	})
}


