console.log("Teste Timestamp")
let timestamp = Date.now().toLocaleString('pt-BR')
timestamp = timestamp.replaceAll(".", "")
console.log(timestamp) // milliseconds
let segundos = timestamp / 1000;
segundos = Math.floor(segundos)
console.log(segundos + (60 * 60))