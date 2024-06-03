import { Router } from "express";
import { DocenteRoute } from "./docente/route";

export class AppRoute{
   static get route(): Router{
        const routes = Router();
        routes.use('/api/docente', DocenteRoute.route)
        return routes;
    }
}