import { Request, Response } from "express";
import { Validators } from "../../config/validator";
import { HandleError } from "../../domain/errors/handle.error";
import { DocenteService } from "../../services/docente.service";
import { CreateDocenteDto } from "../../domain/dtos/category/create-docente.dto";
import { UpdateDocenteDto } from "../../domain/dtos/category/update-docente.dto";


export class DocenteController{
    constructor(private readonly docenteServices:DocenteService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createDocenteDto] = CreateDocenteDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.docenteServices.create(createDocenteDto!)
        .then(Docente => res.json(Docente))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateDocenteDto] = UpdateDocenteDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.docenteServices.update(updateDocenteDto!, id!)
        .then(Docente => res.json(Docente))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.docenteServices.delete(id!)
        .then(Docente => res.json(Docente))
        .catch(error => HandleError.error(error, res))
    }

    findOne = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.docenteServices.findOne(id!)
        .then(Docente => res.json(Docente))
        .catch(error => HandleError.error(error, res))  
    }

}
