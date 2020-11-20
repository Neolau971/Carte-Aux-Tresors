module.exports = {

    updateTresors : function(axeHAventurier, axeVAventurier, tresors, directive) {
        let tresorsinfos = []
        tresorsinfos = tresors
    
        if (directive !== "D" && directive !== "G") {
            tresorsinfos.forEach(tresor => {
                (tresor.axeH === axeHAventurier && tresor.axeV === axeVAventurier) ? ( tresor.nombre = tresor.nombre -1 ) : ("")
            })
        } 
    
        return tresorsinfos

    },

    tresorsOfAventurier : function (tresorInitial, tresors) {
        let tresorsFound = 0
        let tresorInitState = []
        let tresorsFinalState = []

        tresorInitState = tresorInitial
        tresorsFinalState = tresors

        for (let i = 0; i < tresorInitState.length; i++) {
            tresorsFound = tresorsFound + (tresorInitState[i].nombre - tresorsFinalState[i].nombre)
        }

        return tresorsFound
    
    }
}