const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
// const logModel =require('./model/logModel')

dotenv.config()

const app = express()

app.use(cors())

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const connectDB = require('./config/dbConn');
connectDB();


app.use('/api/logs', require('./routes/logRoutes'));


    // app.get('/search', async (req, res) => {
    //     try {
    //         const  responseStatus  = req.query
    //         console.log(responseStatus.responseStatus)
    
    //         const agg = [
    //             {
    //                 $search: {
    //                     autocomplete: {
    //                         query: responseStatus.detail,
    //                         path: 'default',
    //                         fuzzy: {
    //                             maxEdits: 2,
    //                         },
    //                     },
    //                 },
    //             },
    //             {
    //                 $limit: 5,
    //             },
    //             {
    //                 $project: {
    //                     _id: 0,
    //                     responseStart: 1,
    //                     responseEnd: 1,
    //                     responseStatus: 1,
    //                     date: 1,
    //                 },
    //             },
    //         ]
    
    //         const response = await logModel.aggregate(agg)
    
    //         return res.json(response)
    //     } catch (error) {
    //         console.log(error)
    //         return res.json([])
    //     }
    // })

const PORT = process.env.PORT || 8080

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
});