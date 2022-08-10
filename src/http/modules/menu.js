
import * as axios from "../axios";

export function findMenu(url, params) {
    return axios.get(url, params);
}
