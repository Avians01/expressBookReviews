const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req,res,next){
 const jwt = require('jsonwebtoken');

app.use("/customer/auth/*", function auth(req, res, next) {
    // Retrieve the access token from the request headers or cookies
    const accessToken = req.headers.authorization || req.cookies.accessToken;

    // Verify the access token
    jwt.verify(accessToken, 'iichliwp-halsey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Set user information in the request object
        req.user = decoded.user;

        // Continue to the next middleware or route
        next();
    });
});

//Write the authenication mechanism here
});
 
const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT,()=>console.log("Server is running"));
