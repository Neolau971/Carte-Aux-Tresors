# Carte-Aux-Tresors

## Synopsis

réalisation d'un système permettant de suivre les déplacements et les collectes de trésors effectuées par les aventuriers.

## Input

Fichier au format .txt

exemple contenu : 

#this is the intput file
C - 3 - 4
M - 1 - 0
M - 2 - 1
T - 0 - 3 - 2
T - 1 - 3 - 3
A - Lara - 1 - 1 - S - AADADAGGA
A - Bob - 0 - 1 - E - ADAAGAGAG

## Output

Fichier au format .txt

exemple contenu : 

#this is the output file
C - 3 - 4
M - 1 - 0
M - 2 - 1
T - 0 - 3 - 0
T - 1 - 3 - 1
A - Lara - 0 - 3 - S - 3
A - Bob - 2 - 2 - O - 1

### Run

Pour lancer le système : node index.js

