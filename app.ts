import express, { Request, Response } from 'express';
import { GeonamesService } from './src/GeonamesService';


export const app = async (): Promise<void> => {
  const app = express();
  const port = 3000;

  const geonamesService = new GeonamesService();

  app.get('/', async (req: Request, res: Response) => {
    try {
      const queryParam = req.query.q;
      if (!queryParam) return res.status(404);

      const result = await geonamesService.getLocations(queryParam.toString());

      console.log("%c ---------------------------", 'background: #222; color: #bada55')
      console.log(result.join('\r\n'));
      console.log("%c ---------------------------", 'background: #222; color: #bada55')

      return res.status(200).json(result);
    } catch (error) {
      console.log('Error: ', error);
      return 'Error';
    }
  });

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  });
};

app();