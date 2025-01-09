const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

app.use('/', loginRouter);
app.use('/', registerRouter);


app.listen(3000, () => {
    console.log('server started');
});






