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

const intervalSeconds = args.map(Number);

// Function for beep sound. Writes out Beep!
const beep = function() {
  process.stdout.write('Beep!\n');
};

// Set beep for specified times

intervalSeconds.forEach(interval => {
  const intervalMiliseconds = interval * 1000;
  setTimeout(beep, intervalMiliseconds);
});