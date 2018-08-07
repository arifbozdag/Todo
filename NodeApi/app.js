var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var router = express.Router();

router.get("/Dropdown", function (req, res) {

    var response = [
        {
            "id":"1",
            "name":"Market",
            "parent_id":"0"
        },
        {
            "id":"2",
            "name":"School",
            "parent_id":"0"
        },
        {
            "id":"3",
            "name":"Hospital",
            "parent_id":"0"
        },
        {
            "id":"4",
            "name":"Payment",
            "parent_id":"0"
        },
        {
            "id":"5",
            "name":"bakery",
            "parent_id":"1"
        },
        {
            "id":"6",
            "name":"meat ",
            "parent_id":"1"
        },
        {
            "id":"7",
            "name":"fish ",
            "parent_id":"1"
        },
        {
            "id":"8",
            "name":"dairy ",
            "parent_id":"1"
        },
        {
            "id":"9",
            "name":"fruit and vegetables",
            "parent_id":"1"
        },
        {
            "id":"10",
            "name":"frozen  ",
            "parent_id":"1"
        },
        {
            "id":"11",
            "name":"canned ",
            "parent_id":"1"
        },
        {
            "id":"12",
            "name":"beverages ",
            "parent_id":"1"
        },
        {
            "id":"13",
            "name":"soft drinks ",
            "parent_id":"1"
        },
        {
            "id":"14",
            "name":"confectionery",
            "parent_id":"1"
        },
        {
            "id":"15",
            "name":"pet food",
            "parent_id":"1"
        },
        {
            "id":"16",
            "name":"donut",
            "parent_id":"5"
        },
        {
            "id":"17",
            "name":"bread",
            "parent_id":"5"
        },
        {
            "id":"18",
            "name":"cake",
            "parent_id":"5"
        },
        {
            "id":"19",
            "name":"beef",
            "parent_id":"6"
        },
        {
            "id":"20",
            "name":"lamb",
            "parent_id":"6"
        },
        {
            "id":"21",
            "name":"salmon",
            "parent_id":"7"
        },
        {
            "id":"22",
            "name":"milk",
            "parent_id":"8"
        },
        {
            "id":"23",
            "name":"cheese",
            "parent_id":"8"
        },
        {
            "id":"24",
            "name":"apple",
            "parent_id":"9"
        },
        {
            "id":"25",
            "name":"tomato",
            "parent_id":"9"
        },
        {
            "id":"26",
            "name":"pizza",
            "parent_id":"10"
        },
        {
            "id":"27",
            "name":"fries",
            "parent_id":"10"
        },
        {
            "id":"28",
            "name":"pees",
            "parent_id":"11"
        },
        {
            "id":"29",
            "name":"corn",
            "parent_id":"11"
        },
        {
            "id":"30",
            "name":"beer",
            "parent_id":"12"
        },
        {
            "id":"31",
            "name":"spirit",
            "parent_id":"12"
        },
        {
            "id":"32",
            "name":"coke",
            "parent_id":"13"
        },
        {
            "id":"33",
            "name":"soda",
            "parent_id":"13"
        },
        {
            "id":"34",
            "name":"candy",
            "parent_id":"14"
        },
        {
            "id":"35",
            "name":"dog food",
            "parent_id":"15"
        },
        {
            "id":"36",
            "name":"cat food",
            "parent_id":"15"
        },
        {
            "id":"37",
            "name":"pizza",
            "parent_id":"16"
        },
        {
            "id":"38",
            "name":"pizza",
            "parent_id":"10"
        },
        {
            "id":"39",
            "name":"pizza",
            "parent_id":"10"
        },
        {
            "id":"40",
            "name":"pizza",
            "parent_id":"10"
        },
        {
            "id":"41",
            "name":"pizza",
            "parent_id":"10"
        }
    ];
    res.send(response)
    res.status(200).json(response);

});

app.use("/", router);

app.listen("4467", function () {
    console.log("Started listening at 4467..");
});