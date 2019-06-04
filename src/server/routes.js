import express from 'express';
import {
  generatePhoneNumbers,
  getSavedFileNames
} from './controllers/phoneNumber';

const routes = express();

routes.route('/generate-numbers').post(generatePhoneNumbers);
routes.route('/get-saved-filenames').get(getSavedFileNames);

export default routes;
