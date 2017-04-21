var express = require('express');
var bodyParser = require('body-parser');
var FusionCharts = require("fusioncharts");
//require("fusioncharts/fusioncharts.charts")(FusionCharts);



var app = express();
app.set('json spaces', 2);
app.use(express.static('client'));
app.use(bodyParser.json()); // plugs in the ability to read JSON serialized HTTP request bodies

// model
var jobRoles = ['Application Developer', 'Application Developer Lead', 'Business Analyst', 'Tech Lead', 'Team Lead', 'Project Manager', 'Information Architect', 'Technical Architect', 'Design Authority', 'Database Administrator'];
var persistentSkillList = [];


// controller
app.get('/jobRoles', function (req, res) {
    // 'view'
    console.log('inside getJobRoles');
    res.json(jobRoles);
});

// Create handler
app.post('/addSkills', function (req, res) {
    var skillList = req.body;
    // manual validation
    /**if (skillList.empName == '') {
        res.status(400).json({
            error: 'Employee name is required'
        });
        return;
    }*/
    console.log(skillList.empName);
    persistentSkillList = skillList;
    res.status(201).json(persistentSkillList);
});

// controller - a handler to return json data when client requests /courses
app.get('/getSkills', function (req, res) {
    // 'view'
    console.log('inside getSkills');
    res.json(persistentSkillList);
});

app.listen(8080, function (err, success) {
    console.log('running techmeter server');
});