import express from "express";
import router from "./Router/Router.js";
import cors from 'cors';

export const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});