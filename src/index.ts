import express, { Express, Request, Response} from "express";
require("dotenv").config();



const app:Express=express();

app.get("/",(_: Request,res: Response)=>{//si une variable n'est pas utilisée on peut mettre _
    res.send("Hello World");// controleur qui vérifie la route et qui fait appel à un service
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);

});