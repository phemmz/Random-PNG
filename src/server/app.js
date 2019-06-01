import express from 'express';
import bodyparser from 'body-parser';
import path from 'path';

import routes from './routes';

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.use(express.static('build'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const { PORT = 2003 } = process.env;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

export default app;
