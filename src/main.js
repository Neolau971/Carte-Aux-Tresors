const AventurierNewLocalisation = require("../src/aventurierNewLocalisation")
const GestionTresors = require("../src/gestionTresors")

module.exports = function Main() {

    let positionMontagne = [{axeH : 1, axeV : 0}, {axeH : 2, axeV : 1}]
    let tresors = [{axeH : 0, axeV : 3, nombre: 2}, {axeH : 1, axeV : 3, nombre: 3}]
    let tresorInitial = [{axeH : 0, axeV : 3, nombre: 2}, {axeH : 1, axeV : 3, nombre: 3}]
    let aventuriers = [{nom : "Lara", axeH : 1, axeV : 1, lastOrientation : "S", sequence : "AADADAGGA"}]

    let currentAventurier = {nom : "Lara", axeH : 1, axeV : 1, lastOrientation : "S", sequence : "AADADAGGA"}

        for (let i = 0; i < currentAventurier.sequence.length; i++) {

            let aventurierLocalisation = AventurierNewLocalisation(currentAventurier.axeH, currentAventurier.axeV, currentAventurier.lastOrientation, currentAventurier.sequence[i])
            currentAventurier.axeH = aventurierLocalisation[0]
            currentAventurier.axeV = aventurierLocalisation[1]
            currentAventurier.lastOrientation = aventurierLocalisation[2]

            tresors = GestionTresors.updateTresors(currentAventurier.axeH, currentAventurier.axeV, tresors, currentAventurier.sequence[i])
        }

        let tresorFinal = GestionTresors.tresorsOfAventurier(tresorInitial, tresors)
        
        console.log(tresors, currentAventurier, tresorFinal)
} 
