import HttpClient from "./HttpClient";
import {pickBy} from "lodash";

export class AirportsService {
    static async get(query, page, itemsPerPage) {

        const res = await HttpClient.get('airports', {
            params: pickBy({
                query,
                page,
                itemsPerPage
            })
        });

        return res.data;
    }
}