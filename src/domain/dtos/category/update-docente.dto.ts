export class UpdateDocenteDto{
    constructor(
        public id: string,
        public name:string,
        public email: string,
        public profession:string,
        public gender?:string,
        public address?:string
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateDocenteDto?]{
        const {id, name, email, profession, gender, address} = object
        if(!name) return['name is required', undefined]
        if(!email) return['email is required', undefined]
        if(!profession) return['profession is required', undefined]
        return [undefined, new UpdateDocenteDto(id, name, email, profession, gender, address)]
    }
}