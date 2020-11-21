function newPosition(currentAventurier, positionMontagne) {
    let positionMontagnes = []
    positionMontagnes = positionMontagne

    let newAxeH = currentAventurier.axeH
    let newAxeV = currentAventurier.axeV
    let lastOrientation = currentAventurier.lastOrientation

        if (lastOrientation === "S" || lastOrientation === "N") {
            lastOrientation === "S" ? (newAxeV = newAxeV + 1) : (newAxeV = newAxeV - 1)
        } else {
            lastOrientation === "E" ? (newAxeH = newAxeH + 1) : (newAxeH = newAxeH - 1)
        }

        positionMontagnes.forEach(montagne => {
           ( montagne.axeV === newAxeV && montagne.axeH === newAxeH ) ? (newAxeV = currentAventurier.axeV) && (newAxeH = currentAventurier.axeH) : ""
        })

    return [newAxeH, newAxeV]
}

function newDirection(lastOrientation, directive) {
    let newOrientation

    if (lastOrientation === "S") {
        directive === "D" ? newOrientation = "O" : newOrientation = "E" 
    } else if (lastOrientation === "N") {
        directive === "D" ? newOrientation = "E" : newOrientation = "O" 
    } else if (lastOrientation === "E") {
        directive === "D" ? newOrientation = "S" : newOrientation = "N" 
    } else {
        directive === "D" ? newOrientation = "N" : newOrientation = "S" 
    }

    return newOrientation
}

module.exports = function AventurierNewLocalisation(currentAventurier, directive, positionMontagne) {
    let newPositionH = currentAventurier.axeH
    let newPositionV = currentAventurier.axeV
    let newOrientation = currentAventurier.lastOrientation

    if(directive === "A") {
        let newPositionTab = newPosition(currentAventurier, positionMontagne)
        newPositionH = newPositionTab[0]
        newPositionV = newPositionTab[1]
    } else {
        newOrientation = newDirection(currentAventurier.lastOrientation, directive)
    }

    return [newPositionH, newPositionV, newOrientation]
}
