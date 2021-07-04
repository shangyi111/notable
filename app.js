const express= require('express');
const port = process.env.PORT || 4800;
const cors = require('cors');
const indexRouter= require('./index');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

  
app.use('/',indexRouter);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
