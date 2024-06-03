import { DocenteEntity } from "../entities/docente.entity"

export class DocenteMaper{
    static fromEntity(Object:{[key:string]:any}):DocenteEntity{
        const {id, name, email, profession, gender, address} = Object
        if(!name) throw Error('name is required')
        if(!email) throw Error('email is required')
        if(!profession) throw Error('profession is required')
        return new DocenteEntity(id, name, email, profession, gender, address)
    }
}