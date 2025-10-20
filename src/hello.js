// Simple sample script to prove a non-empty code commit.
// Run: node src/hello.js
function greet(name) {
  const now = new Date().toISOString();
  return `Hello, ${name}! Time: ${now}`;
}
if (require.main === module) {
  console.log(greet("GitHub"));
}
module.exports = { greet };
