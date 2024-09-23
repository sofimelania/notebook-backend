const express= require('express');
const app = express();

const mongoose = require('mongoose');
const routes = require('./NoteRoutes');
const cors = require('cors');
require('dotenv').config();

//mongoose.set("strictQuery", false);

const PORT = 3000 || process.env.port;
app.use(cors());
app.use(express.json());
mongoose
.connect(process.env.MONGODB_LINK)
.then(() =>console.log('Database connected'))
.catch(err => console.log(err));

app.use(routes);
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected'))
.catch((err) => console.log(err));

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})