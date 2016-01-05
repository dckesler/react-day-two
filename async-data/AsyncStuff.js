import axios from "axios";

export function getWeather(lat, lon) {
	axios.get(`http://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`)
		.then((result) => {
			this.setState({
				address: result.data.display_name
			})		
		})
}

