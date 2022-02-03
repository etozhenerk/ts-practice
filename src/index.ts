import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send(`
      <div>
        <h1>Hey there!</h1>
      </div>
    `);
});

app.listen(3000, () => {
    console.log("Listenin in port 3000");
});
