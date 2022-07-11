import { AxiosInstance, AxiosRequestConfig } from "axios";
import { LocationsMapper } from "./LocationsMapper";

export class LocationsService {

    constructor(private readonly client: AxiosInstance) { }

    async getLocations(value: string): Promise<any> {
        const requestConfig: AxiosRequestConfig = LocationsMapper.mapRequest(value);

        const response = await this.client.request<string>(requestConfig);

        const mappedResponse = LocationsMapper.mapLocations(response.data);

        console.log("---------------------------")
        console.log(mappedResponse);
        console.log("---------------------------")

        return mappedResponse;
    }
}