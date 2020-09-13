/**
 * index.js
 * 
 * A program to convert MPG to KPL with
 * input taken from the command line.
 */

// import necessary tools or packages
const readline = require('readline')

// create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Declare useful constants
const KPM = 1.609344     // kilometers per mile
const GPL = 0.2641720524 // gallons per liter

/**
 * Converts a given mpg value to kpl
 * 
 * @param   [number] mpg The miles per gallon value to be converted
 * @returns [number]     The kilometers per liter
 */
function mpg2kpl(mpg) {
  return mpg * KPM * GPL
}

// prompt the user to enter a value
rl.question('Enter the MPG value: ', (mpg) => {
  // take the entered value and output the converted value
  console.log(mpg2kpl(mpg).toFixed(2))
  // close the interface
  rl.close()
})