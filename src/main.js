const AventurierNewLocalisation = require("../src/aventurierNewLocalisation")
const UpdateTresors = require("../src/gestionTresors")

module.exports = function Main() {
    let positionMontagne = [{axeH : 1, axeV : 0}, {axeH : 2, axeV : 1}]
    let tresors = [{axeH : 0, axeV : 3, nombre: 2}, {axeH : 1, axeV : 3, nombre: 3}]
    let aventuriers = [
        {nom : "Lara", axeH : 1, axeV : 1, lastOrientation : "S", sequence : "AADADAGGA", tresorsFound : 0},
        {nom : "Bob", axeH : 0, axeV : 1, lastOrientation : "E", sequence : "ADAAGAGAG", tresorsFound : 0}
    ]

    function aventuriersUpdateInfos(i) {
        let eachAventurier = []
        eachAventurier = aventuriers

        let aventurierUpdate = []

        eachAventurier.forEach((currentAventurier) => {
            let aventurierLocalisation = AventurierNewLocalisation(currentAventurier, currentAventurier.sequence[i], positionMontagne)
            currentAventurier.axeH = aventurierLocalisation[0]
            currentAventurier.axeV = aventurierLocalisation[1]
            currentAventurier.lastOrientation = aventurierLocalisation[2]

            let updatedTresors = UpdateTresors(currentAventurier, tresors, currentAventurier.sequence[i])
            tresors = updatedTresors[0]
            currentAventurier.tresorsFound = updatedTresors[1]

            aventurierUpdate.push(currentAventurier)

        })
        aventuriers = aventurierUpdate
    }


    for (let i = 0; i < aventuriers[0].sequence.length; i++) {
        aventuriersUpdateInfos(i)
    }

    console.log(aventuriers, tresors)
        
        //console.log(tresors, currentAventurier, tresorFinal)
} 
