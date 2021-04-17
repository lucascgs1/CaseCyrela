import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response } from "express";
import { json } from "body-parser";

import { Routes } from "./routes";

const PORT = process.env.PORT || 3000

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(PORT);

    console.log(`Express server has started on port http://localhost:${PORT}.`);

}).catch(error => console.log(error));
