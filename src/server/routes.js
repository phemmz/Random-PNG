import express from 'express';
import {
  generatePhoneNumbers,
  getSavedFileNames,
  getFileDetails
} from './controllers/phoneNumber';

const routes = express();

routes.route('/generate-numbers').post(generatePhoneNumbers);
routes.route('/get-saved-filenames').get(getSavedFileNames);
routes.route('/get-file-details/:filename').get(getFileDetails);

export default routes;
