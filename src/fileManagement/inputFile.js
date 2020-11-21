const fs = require('fs')

module.exports = function InputFile() {

    let content
    let dimTab
    let montagnesTab
    let tresorTab
    let aventurierTab

    let allMapData = {}

    function fileFilter() {
        const data = fs.readFileSync('inputFile.txt', {encoding:'utf8', flag:'r'}); 

        content = data.trim();
        let masque1 = /C -.*- [0-9]/g
        let masque2 = /M -.*- [0-9]/g
        let masque3 = /T -.*- [0-9]/g
        let masque4 = /A -.*[A-Z][A-Z]/g
    
        dimTab = content.match(masque1)
        montagnesTab = content.match(masque2)
        tresorTab = content.match(masque3)
        aventurierTab = content.match(masque4)
    }

    function dataMapping() {
        let dimH = parseInt(dimTab[0][4])
        let dimV = parseInt(dimTab[0][8])
        let dimMontagnesHV = []
        let dimTresorsHV = []
        let dimAventuriersHV = []

        let montagneTypeObject = (i) => ({
            axeH : parseInt(montagnesTab[i][4]), 
            axeV : parseInt(montagnesTab[i][8])
        })

        let tresorTypeObject = (i) => ({
            axeH : parseInt(tresorTab[i][4]), 
            axeV : parseInt(tresorTab[i][8]),
            nombre : parseInt(tresorTab[i][12])
        })

        function genericFor(elementTab, objectType, dimObjectTab) {
            for(let i = 0; i < elementTab.length; i++) {
                let genericObject

                genericObject = objectType(i)
                dimObjectTab.push(genericObject)
            }
        }

        genericFor(montagnesTab, montagneTypeObject, dimMontagnesHV)
        genericFor(tresorTab, tresorTypeObject, dimTresorsHV)

        for (let i = 0; i < aventurierTab.length; i++) {
            let splitAventurierTab = aventurierTab[i].split(' - ')
            let aventurierObject = {
                name : splitAventurierTab[1],
                axeH : parseInt(splitAventurierTab[2]),
                axeV : parseInt(splitAventurierTab[3]),
                lastOrientation : splitAventurierTab[4],
                sequence : splitAventurierTab[5],
                tresorsFound : 0
            }

            dimAventuriersHV.push(aventurierObject)
        }

        allMapData = {
            dimMap : [dimH, dimV],
            montagnesMap : dimMontagnesHV,
            tresorsMap : dimTresorsHV,
            aventurierMap : dimAventuriersHV
        }
    }

    fileFilter()
    dataMapping()

    return allMapData
}
