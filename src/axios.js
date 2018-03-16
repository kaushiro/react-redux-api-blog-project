import axios from "axios";

export default axios.create({
    baseURL: "http://Kate.restful.training/api/",
    params: {
        key: "66280fd05f99b07f4c7f2b2501efaae974023dac",
    },
    headers: {
        Accept: "application/json",
    },
});