import axios from "axios";

export default axios.create({
    baseURL: "https://projectcertify.herokuapp.com/",
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    // },
});
