import axios from "axios";

export default axios.create({
    baseURL: "https://harshithcertify.herokuapp.com/",
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});
