const app = require('./app');
const {connect} = require('./database');


async function main(){
    // Database conection
    await connect();

    // Express Aplication
    await app.listen(5000);
    console.log('Server on port 5000: Conectado');
}

main();