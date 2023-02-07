import axios from "axios";

export default axios.create({
    baseURL: "https://projectcertify.up.railway.app/",
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    // },
});
