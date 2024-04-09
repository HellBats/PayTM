

const {router} = require('./Routes/index');
const express = require('express');
const PORT = 3000;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/v1',router);


app.listen(PORT,()=>console.log("Listening on PORT "+PORT))