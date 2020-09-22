import axios from "axios";

const instance = axios.create({
	baseURL: "https://react-my-fc20a.firebaseio.com/",
});

export default instance;
