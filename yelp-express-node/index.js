const express = require('express')
var request = require('request');
const app = express()
const port = 3000




app.get('/', (req, res) => {
    if(req.query.location){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    request({
        uri: `https://api.yelp.com/v3/businesses/search`,
        qs: {
            radius: 1000,
            location: req.query.location
        },
        headers:{
            'Authorization': "Bearer YOUR-YELP-API-KEY-HERE",
        },
    }).pipe(res)
    }
    else{
        res.send('Invalid Params')
    }
})
app.listen(process.env.PORT || port, () => console.log(`Yelp Request Server listening on port ${port}!`))