const express = require("express");
const app = express();
app.use(express.static("public"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/tablets', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const abc = require("./db/tabletsschema.js")
    abc.find(function (error, docs) {
        if (error) {
            console.log("some problem")
            response.send('Some Problem in my Connection');
        } else {
            console.log("calling tablet")
            //console.log("docsis",docs);
            res.send(JSON.stringify(docs));

        }
    })
    //}
})

//});

app.get('/laptops', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        const lap = require("./db/laptopsschema.js")
        lap.find(function (error, docs) {
            if (error) {
                console.log("some problem")
                response.send('Some Problem in my Connection');
            } else {
                console.log("calling laptop")
                // console.log("docsis",docs);
                res.send(JSON.stringify(docs));

            }
        })
    }
    //}
)
//})


app.get('/mobiles', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log("calling mobile")
    const mobile = require("./db/mobilesschema.js")       
    mobile.find(function (error, docs) {
        if (error) {
            console.log("some problem")
            response.send('Some Problem in my Connection');
        } else {
            console.log("calling mobile")
            //console.log("docsis",docs);
            res.send(JSON.stringify(docs));

        }
    })
    //}
    //      })
})



app.listen(process.env.PORT || 5000, function () {
    console.log("Server started.......");
});
