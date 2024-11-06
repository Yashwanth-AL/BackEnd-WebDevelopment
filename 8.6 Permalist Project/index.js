import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  password: "9844955914",
  database: "permalist",
  host: "localhost",
  port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function getItems(){
  const result = await db.query("SELECT * FROM items ORDER BY id ASC;",);
  return result.rows;
}

app.get("/", async (req, res) => {
  try {
    items = await getItems();
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  }catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("insert into items (title) values ($1);", [item]);
    res.redirect("/");
  }catch (err) {
    console.log(err);
  }
  // items.push({ title: item });
});

app.post("/edit", async (req, res) => {
  const id = req.body.updatedItemId;
  const title = req.body.updatedItemTitle;
  try {
    await db.query("UPDATE items SET title = ($1) where id = $2;", [title, id]);
    res.redirect("/");
  }catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("delete from items where id = ($1);", [id]);
    res.redirect("/");
  }catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
