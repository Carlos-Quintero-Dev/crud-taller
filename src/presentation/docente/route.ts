import { Router } from "express";
import { DocenteService } from "../../services/docente.service";
import { DocenteController } from "./controller";


export class DocenteRoute{
   static get route(): Router{
        const routes = Router();
        const docenteServices = new DocenteService();
        const controller = new DocenteController(docenteServices)
        routes.get('/:id', controller.findOne);
        routes.put('/:id', controller.update);
        routes.delete('/id', controller.delete);
        routes.post('/', controller.create)
        return routes;
    }
}