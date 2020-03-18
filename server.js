const express = require('express');
const posts = require('./routes/posts');
const login = require('./routes/login');

const app = express();

/* R O U T E S  */
app.use('/api/posts', posts);
app.use('/api/login', login);

/*  R U N N I N G   S E R V E R  */
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
