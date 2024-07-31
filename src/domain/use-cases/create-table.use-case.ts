//Una interfaz para los valores que vamos a necesitar
export interface CreateTableOptions {
    base: number;
    limit?: number;
}
//Esta interfaz sera un implement que utilizara nuestra clase para definir que parametros necesitan nuestros metodos y que va a retornar el metodo
export interface CreateTableUseCase {
    execute: (options : CreateTableOptions) => string;
}
export class CreateTable implements CreateTableUseCase{
    constructor(
        /**
         * DI - Inyeccion de dependencias
         */
    ){}
    execute({base, limit = 10} : CreateTableOptions ){
        //Vamos añadiendo con saltos de linea las tablas
        const headerMessage = `
===========================
    Tabla del ${base}
===========================\n
`;
        let outputMessage = ''
        for(let i = 1; i <= limit ; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`
        }
        outputMessage = headerMessage + outputMessage;
        return outputMessage;
    }
}