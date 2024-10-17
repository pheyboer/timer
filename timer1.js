// Simple Timer Challenge
// Beep sound not working on PC
// process.stdout.write('Beep!\n');


// Implement a timer to beep after a specified amount of time has passed
// User can specifiy an unlimited number of alarms using Command Line Arugments

// Set interval times in seconds
// Command line arugments are given as seconds. Convert to miliseconds
// use setTimeout with 2 arugments (callback, delay)

// Take command line arugments
const args = process.argv.slice(2);

// Get interval from Command Line and map to integer

const timeSeconds = args.map(Number);

// Function for beep sound. Writes out Beep!
const beep = function() {
  process.stdout.write('Beep!\n');
};

// Set beep for specified times and handle edge cases
// Wrapped the setTimeout for...each loop in and if...else statement for handling conditions
// Edge cases for 0, negative numbers, and NaN

if (timeSeconds.length === 0) {
  console.log(`No Number Provided. Please add some Positive Numbers for the Timer to work!`);
} else {
  timeSeconds.forEach(interval => {
    if (interval < 0) {
      console.log(`${interval} is negative. Please use a Positive Number`);
    } else if (isNaN(interval)) {
      console.log(`${interval} is Not a Number. Please use a number`);
    } else {
      const timeMiliseconds = interval * 1000;
      setTimeout(beep, timeMiliseconds);
    }
  });
}