import express from 'express';
import bodyparser from 'body-parser';

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
