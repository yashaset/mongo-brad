const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

dotenv.config({
  path: './config/config.env',
});

connectDB();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// routes
app.use('/', require('./routes/index'));
const PORT = process.env.PORT || 5000;
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
