// Simple Timer Challenge
// Beep sound not working on PC
// process.stdout.write('Beep!\n');

// Take command line arugments
const args = process.argv.slice(2);

// Function for beep sound
const beep = function() {
  process.stdout.write('Beep!\n');
};