import express from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["test"] }));
app.use(router);

app.listen(3000, () => {
    console.log("Listenin in port 3000");
});
