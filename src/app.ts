import express, { Application } from "express";
const app: Application = express();
const PORT = 8888;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("aaaaa");
});
import { userRoutes, postRoutes, profileRoutes } from "./routes";
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/profile", profileRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
