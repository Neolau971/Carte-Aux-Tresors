const AventurierNewLocalisation = require("../src/aventurierNewLocalisation")

module.exports = function Main() {

    let dimCarte = [3,4]
    let positionMontagne = [{axeH : 1, axeV : 0}, {axeH : 2, axeV : 1}]
    let Tresor = [{axeH : 0, axeV : 3, nombre: 2}, {axeH : 1, axeV : 3, nombre: 3}]
    let aventuriers = [{nom : "Lara", axeH : 1, axeV : 1, lastOrientation : "S", sequence : "AADADAGGA"}]

    let currentAventurier = {nom : "Lara", axeH : 1, axeV : 1, lastOrientation : "S", sequence : "AADADAGGA"}

        for (let i = 0; i < currentAventurier.sequence.length; i++) {

            let aventurierLocalisation = AventurierNewLocalisation(currentAventurier.axeH, currentAventurier.axeV, currentAventurier.lastOrientation, currentAventurier.sequence[i])
            currentAventurier.axeH = aventurierLocalisation[0]
            currentAventurier.axeV = aventurierLocalisation[1]
            currentAventurier.lastOrientation = aventurierLocalisation[2]
            console.log(currentAventurier)

        } 
} 
