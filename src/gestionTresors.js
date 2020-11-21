module.exports = function UpdateTresors(currentAventurier, tresors, directive) {
    let tresorsinfos = []
    tresorsinfos = tresors

    let axeHAventurier = currentAventurier.axeH
    let axeVAventurier = currentAventurier.axeV
    let aventurierTresor = currentAventurier.tresorsFound

    if (directive !== "D" && directive !== "G") {
        tresorsinfos.forEach(tresor => {
            if(tresor.axeH === axeHAventurier && tresor.axeV === axeVAventurier && tresor.nombre > 0) {
                tresor.nombre = tresor.nombre -1
                aventurierTresor = aventurierTresor + 1
            } 
        })
    }
    
    return [tresorsinfos, aventurierTresor]

}