import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

( () => {
    main();
    
})();

function main() {
    const {b:base, l:limit, s:show, n:fileName, d:destination} = yarg;

    //Pasamos los parametros que necesitara show
    ServerApp.run( {base, limit, show, fileName, destination} )

}