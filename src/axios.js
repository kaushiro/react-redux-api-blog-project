import axios from "axios";

export default axios.create({
    baseURL: "https://d7c1c109-39d7-4fe5-9161-956f24968af4.mock.pstmn.io",
    headers: {
        Accept: "application/json",
    },
});