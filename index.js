import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


let itemList = [];

// Add item to itemList array
function addItemToArray(newItem, itemId) {
   itemList.push({itemId, newItem});
   console.log(itemList);
}

app.post('/', (req, res) => {
   const newItem = req.body["newItem"];
   const itemId = String(Date.now());
   addItemToArray(newItem, itemId);
   res.redirect('/');
}); 

// get item ids for deletion
app.post('/delete', (req, res) => {
   const itemId = req.body.itemId;
   itemList = itemList.filter(item => item.itemId !== itemId);
   console.log(itemList);
   res.sendStatus(200);
 });

app.get('/',(req, res) => {
   res.render("index.ejs", { toDoList: itemList });
});

app.get("/code-rev", (req, res) => {
   res.render("explanations.ejs");
});

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});