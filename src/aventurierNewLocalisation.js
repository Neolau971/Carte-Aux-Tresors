function newPosition(axeH, axeV, lastOrientation) {

    let newAxeH = axeH
    let newAxeV = axeV

        if (lastOrientation === "S" || lastOrientation === "N") {
            lastOrientation === "S" ? (newAxeV = newAxeV + 1) : (newAxeV = newAxeV - 1)
        } else {
            lastOrientation === "E" ? (newAxeH = newAxeH + 1) : (newAxeH = newAxeH - 1)
        }

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

module.exports = function AventurierNewLocalisation(axeH, axeV, lastOrientation, directive) {
    
    let newPositionH = axeH
    let newPositionV = axeV
    let newOrientation = lastOrientation

    if(directive === "A") {
        let newPositionTab = newPosition(axeH, axeV, lastOrientation)
        newPositionH = newPositionTab[0]
        newPositionV = newPositionTab[1]
    } else {
        newOrientation = newDirection(lastOrientation, directive)
    }

    return [newPositionH, newPositionV, newOrientation]
}
