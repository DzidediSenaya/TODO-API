import { Router } from "express";
import { MongoClient } from "mongodb";

const router = Router();
const url = 'mongodb+srv://todo-api:bxi2e4dcIhxVfrTL@mest-alpha.bqk1mnp.mongodb.net/?retryWrites=true&w=majority&appName=Mest-Alpha';

const client = new MongoClient(url) 

//Define routes
router.post('/todos', async (req, res) => {
    //connect mongodb client
    await client.connect();
    //get access to todo datdabase
    const db = client.db('todo-db');
    //get access to todos collection
    const collection = db.collection('todos');
    //add document to todos collection
    const result = await collection.insertOne(req.body);
    //Disconnect mongodb client
    await client.close();
    //return response
    res.json(result);
});

router.delete('/todos', (req, res) => {
    res.send('Delete all todos!');
});

router.get('/todos', (req, res) => {
    res.send('Get all todos!');
});

router.get('/todos/:id', (req, res) => {
    res.send(`Get todo with id: ${req.params.id}`);
});

router.patch('/todos/:id', (req, res) => {
    res.send(`Update todo with id:' ${req.params.id}`);
});

router.delete('/todos/:id', (req, res) => {
    res.send(`Delete todo with id:' ${req.params.id}`);
});


//Export router

export default router;