const express = require('express');
const app = express();
let { people } = require('./data');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false}));
// parse json
app.use(express.json());

// GET
app.get('/api/people', (req, res) => {
    res.status(200).json({success : true, data : people});
});

// POST
app.post('/api/people', (req,res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(404).json({sucess : false, msg : 'please provide name value'});
    }

    res.status(201).json({success : true, person : name});
});

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(404).json({sucess : false, msg : 'please provide name value'});
    }
    res.status(201).json({success : true, data : [...people, name]});
});

app.post('/login', (req, res) => {
    //console.log(req.body);
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials');
})

// PUT
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;  // from url
    const { name } = req.body;  // from body

    const person = people.find((person) => person.id === Number(id));
    
    if(!person) {
        return res.status(404).json({sucess : false, msg : `no person with id ${id}`});
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });

    res.status(200).json({success : true, data : newPeople});
});

// DELETE
app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));
    
    if(!person) {
        return res.status(404).json({sucess : false, msg : `no person with id ${id}`});
    }

    const newPeople = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({success : true, data : newPeople});

});

app.listen(5001, () => {
    console.log('Server is instening on port 5001..');
});
