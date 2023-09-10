import axios from "axios";

import {baseURL} from "../../constants/urls/urls";
import {apiToken} from "../../constants/apiToken/apiToken";

const apiServices = axios.create({
    baseURL:baseURL,
    headers: {
        Authorization: apiToken,
    }
})

export {apiServices}