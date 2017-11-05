const express = require('express');
require('./services/passport');
const app = express();

//Client ID: 630356992104-qcqfuqkgqcr8m5t59m2srilj39f4an0s.apps.googleusercontent.com
//Client secret: aMx3YfAQysCk4NPi2Q2-t-8E

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
