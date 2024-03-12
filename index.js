import express from "express";
import todosRoutes from "./routes/todos.routes.js";
import bodyParser from "body-parser";

//create express app
const app = express();

//apply middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Use routes
app.use(todosRoutes);

//Listen for incoming requests
app.listen(4000, () => {
    console.log("Express app is running!")
});
