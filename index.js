import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const port = 3000;


const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


let items = [];

// Add items to List array
app.post("/add", async (req, res) => {
   const item = req.body.newItem;
   try {
     await db.query("INSERT INTO items_list (title) VALUES ($1)", [item]);
     res.redirect("/");
   } catch (err) {
     console.log(err);
   }
 });

// delete items from db
app.post("/delete", async (req, res) => {
   const id = req.body.deleteItemId;
   try {
     await db.query("DELETE FROM items_list WHERE id = $1", [id]);
     res.redirect("/");
   } catch (err) {
     console.log(err);
   }
 });

 // edit items on display and simultaneously on db
 app.post("/edit", async (req, res) => {
   const item = req.body.updatedItemTitle;
   const id = req.body.updatedItemId;
 
   try {
     await db.query("UPDATE items_list SET title = ($1) WHERE id = $2", [item, id]);
     res.redirect("/");
   } catch (err) {
     console.log(err);
   }
 });

 app.get("/", async (req, res) => {
   try {
     const result = await db.query("SELECT * FROM items_list ORDER BY id ASC");
     items = result.rows;
     res.render("index.ejs", {
       listTitle: "Today",
       listItems: items,
     });
   } catch (err) {
     console.log(err);
   }
 });

app.get("/code-rev", (req, res) => {
   res.render("explanations.ejs");
});

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});