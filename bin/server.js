const app = require('../src/index');
require("dotenv").config();

const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(valPort) {
    const port = parseInt(valPort, 10);
    if (isNaN(port)) {
        return valPort;
    }

    if (port >= 0) {
        return valPort;
    }

    return false;
}

app.listen(port, () => {
    console.log(`App listening on port ${port}.`)
})