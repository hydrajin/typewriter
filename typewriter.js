const sentence = "hello there from lighthouse labs \n";

let delay = 0;
const increment = 65;

for (let i of sentence) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay);
  delay += increment;
}
// Prints: "hello there from lighthouse labs, like it were being typed on a computer"