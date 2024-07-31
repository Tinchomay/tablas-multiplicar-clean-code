import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    fileName: string;
    destination: string;
}

export class ServerApp {
    //Estos parametros van a ser utilizados por los casos de uso
    static run({base, limit, show, fileName, destination} : RunOptions){

        //Aqui realizariamos la inyeccion de dependencia si se necesitaran
        const table = new CreateTable().execute({base, limit});

        if(show) console.log(table);

        const createDocuent = new SaveFile().execute({ fileContent: table, fileName, destination });

        (createDocuent) 
            ? console.log('Documento creado correctamente')
            : console.error('El archivo no fue creado')
        
    }
}