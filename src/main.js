const AventurierNewLocalisation = require("./logicManagement/aventurierNewLocalisation")
const UpdateTresors = require("./logicManagement/tresorsManagement")
const InputFile = require("./fileManagement/inputFile")
const OutputFile = require("./fileManagement/outputFile")

module.exports = function Main() {
    let dimMap 
    let positionMontagne 
    let tresors  
    let aventuriers 

    let allMapData = InputFile()

    dimMap = allMapData.dimMap
    positionMontagne = allMapData.montagnesMap
    tresors = allMapData.tresorsMap
    aventuriers = allMapData.aventurierMap

    function aventuriersUpdateInfos(i) {
        let eachAventurier = []
        eachAventurier = aventuriers

        let aventurierUpdate = []

        eachAventurier.forEach((currentAventurier) => {
            let aventurierLocalisation = AventurierNewLocalisation(
                currentAventurier,
                currentAventurier.sequence[i],
                positionMontagne,
                eachAventurier
                )
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

    OutputFile(dimMap, positionMontagne, tresors, aventuriers)
} 
