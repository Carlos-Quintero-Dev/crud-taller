
export class CreateDocenteDto{
    constructor(
        public name:string,
        public email: string,
        public profession:string,
        public gender?:string,
        public address?:string
    ){}

    static create(object:{[key:string]:any}):[string?, CreateDocenteDto?]{
        const {name, email, profession, gender, address} = object
        if(!name) return['name is required', undefined]
        if(!email) return['email is required', undefined]
        if(!profession) return['profession is required', undefined]
        return [undefined, new CreateDocenteDto(name, email, profession, gender, address)]
    }
}
