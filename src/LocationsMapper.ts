import { AxiosRequestConfig } from "axios";
import { Location } from "./Location";
const USERNAME = 's.yankov';

export class LocationsMapper {
    public static mapRequest(value: string) {
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
          username: USERNAME
        }
      };

      return requestConfig;
    }
    
    public static mapLocations(result: any): Location[] {
      let names: Location[] = [];
      for (let obj of result.geonames) {
        const entry: Location = {
          toponymName: obj.toponymName,
          name: obj.name,
          country: obj.countryName,
          lat: obj.lat,
          long: obj.lng
        };
        names.push(entry);
      }

      return names;
    }
}