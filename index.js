import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// Create a new PostgreSQL client instance
const db = new pg.Client({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "permalist",
});
// await db.connect();

// Check the db connection
const connectDB = async () => {
  try {
    await db.connect();
    console.log("Connected to the database");
    
    // Run a simple query to test the connection
    const res = await db.query("SELECT 1");
    console.log("Connection established successfully:", res.rows);
    
  } catch (err) {
    console.error("Connection error", err.stack);
  } finally {
    db.end(); // Close the connection
  }
};
connectDB();

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Server has started at port", port);
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
