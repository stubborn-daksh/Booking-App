const express = require('express');
var cors = require('cors');
//var path = require('path');

const bodyParser = require('body-parser');

const sequelize = require('./utils/database');
const app = express();

const bookingRoutes = require('./routes/Booking');

app.use(bodyParser.json({extended:false}));
app.use(bookingRoutes);
app.use(cors({}));





sequelize.sync()
.then((result) =>{
    app.listen(5000);
}
)



 