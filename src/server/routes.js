import express from 'express';
import {
  generatePhoneNumbers
} from './controllers/phoneNumber';

const routes = express();

routes.route('/generate-numbers').post(generatePhoneNumbers);

export default routes;
