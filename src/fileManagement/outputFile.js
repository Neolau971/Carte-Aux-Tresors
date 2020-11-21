const fs = require('fs')

module.exports = function OutputFile(dimMap, positionMontagne, tresors, aventuriers) {

    let formatFile = ""
    let montagnesHV = []
    let tresorsHV = []
    let aventuriersHV = []

    montagnesHV = positionMontagne
    tresorsHV = tresors
    aventuriersHV = aventuriers

    let formatHVMontagnes = ""
    let formatHVtresors = ""
    let formatHVaventuriers = ""

    montagnesHV.forEach((montagne) => {
        formatHVMontagnes = formatHVMontagnes + `M - ${montagne.axeH} - ${montagne.axeV}\n`
    })

    tresorsHV.forEach((tresor) => {
        formatHVtresors = formatHVtresors + `T - ${tresor.axeH} - ${tresor.axeV} - ${tresor.nombre}\n`
    })

    aventuriersHV.forEach((aventurier) => {
        formatHVaventuriers = formatHVaventuriers + `A - ${aventurier.name} - ${aventurier.axeH} - ${aventurier.axeV} - ${aventurier.lastOrientation} - ${aventurier.tresorsFound}\n`
    })

    formatFile = "#this is the output file\n"
    formatFile = formatFile + `C - ${dimMap[0]} - ${dimMap[1]}\n`
    formatFile = formatFile + formatHVMontagnes + formatHVtresors + formatHVaventuriers

    fs.writeFile('outputFile.txt', formatFile, function (err) {
        if (err) throw err;
        console.log('File created !');
    });

}
