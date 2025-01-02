import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3002;

app.use(express.static(__dirname + '/tiles'));

app.listen(PORT, () => console.log(`Tile server listening on port: ${PORT}`));
