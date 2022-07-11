import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const USERNAME = 's.yankov';

export class GeonamesService { 
    private readonly client: AxiosInstance;
    constructor(){
        this.client = axios.create();
    }

    async getLocations(value: string): Promise<any> {
        const requestConfig: AxiosRequestConfig = this.createLocationsRequest(value);

        const response = await this.client.request<string>(requestConfig);
        
        const mappedResponse = this.mapLocations(response.data);
        
        return mappedResponse;
    }

    private createLocationsRequest(value: string) {
      const requestConfig: AxiosRequestConfig = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'http://api.geonames.org/searchJSON',
        params: {
          name_startsWith: value,
          orderBy: 'relevance',
          maxRows: 5,
          username: 's.yankov'
        }
      };

      return requestConfig;
    }
    
    private mapLocations(result: any) {
      let names: string[] = [];
      for (let obj of result.geonames) {
        const entry = obj.toponymName;
        names.push(entry);
      }

      return names;
    }
}