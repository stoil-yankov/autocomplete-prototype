import axios from 'axios';
import express, { Request, Response } from 'express';
import path from 'path';
import { LocationsService } from './LocationsService';

export const app = async (): Promise<void> => {
  const app = express();
  const port = 3000;

  app.use(express.static(__dirname + '../public'));
  app.set('views', path.join(__dirname, '../views'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  const client = axios.create();
  const geonamesService = new LocationsService(client);

  app.get('/',(req: Request, res: Response) => {
    res.render('index.html');
  });

  app.get('/locations', async (req: Request, res: Response) => {
    try {
      const queryParam = req.query.q;
      if (!queryParam) return res.status(400);

      const result = await geonamesService.getLocations(queryParam.toString());

      return res.status(200).json(result);
    } catch (error) {
      console.log('Error: ', error);
      return error;
    }
  });

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  });
};

app();