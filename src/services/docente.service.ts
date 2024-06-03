import { DocenteModel } from "../data/mongoDb/models/docente.model";
import { CreateDocenteDto } from "../domain/dtos/category/create-docente.dto";
import { UpdateDocenteDto } from "../domain/dtos/category/update-docente.dto";
import { DocenteEntity } from "../domain/entities/docente.entity";
import { CustomError } from "../domain/errors/custom.error";
import { DocenteMaper } from "../domain/mapers/docente.mapers";


export class DocenteService{
    async create (createDocenteDto:CreateDocenteDto):Promise<DocenteEntity>{
        try {
            const Docente = await DocenteModel.create(createDocenteDto);
            if(!Docente) throw CustomError.badRequest("create docente failed")
            await Docente.save();
            return DocenteMaper.fromEntity(Docente);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateDocenteDto:UpdateDocenteDto, id:string):Promise<DocenteEntity>{
        try {
            const Docente = await DocenteModel.findByIdAndUpdate(id, {...updateDocenteDto});
            if(!Docente) throw CustomError.badRequest("update category  failed")
            await Docente.save();
            return DocenteMaper.fromEntity(Docente);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(id:string):Promise<DocenteEntity>{
        try {
            const Docente = await DocenteModel.findOneAndDelete({_id:id});
            if(!Docente) throw CustomError.badRequest("docente don't exist")
            return DocenteMaper.fromEntity(Docente);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(id:string):Promise<DocenteEntity>{
        try {
            const Docente = await DocenteModel.findOne({_id:id});
            if(!Docente) throw CustomError.badRequest("docente don't exist")
            return DocenteMaper.fromEntity(Docente);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}