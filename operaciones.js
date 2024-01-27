const fs = require('fs');

const citas = require("./citas.json");

function registrar(nombre, edad, animal, color, enfermedad) {
    const cita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad,
    };

    citas.push(cita);

    fs.writeFileSync("./citas.json", JSON.stringify(citas));
}

function leer() {
    const citas = JSON.parse(fs.readFileSync("./citas.json"));

    for (const cita of citas) {
        console.log(cita);
    }
}

module.exports = {
    registrar,
    leer,
};
