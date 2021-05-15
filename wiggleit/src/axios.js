import axios from "axios";

const instance=axios.create({
    baseURL:"https://wiggleit-backend.herokuapp.com/"
});

export default instance;