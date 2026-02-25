const fs = require('fs');

const FILE_PATH = 'c:/Google Antigravity/Showroom Stoodio/index.html';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// Replace standard variables
content = content.replace(/agency/g, 'stoodio');
content = content.replace(/Agency/g, 'Stoodio.ai');

// Handle grammatical variations of Agencia
content = content.replace(/La Stoodio\.ai/gi, 'Stoodio.ai');
content = content.replace(/la Stoodio\.ai/gi, 'Stoodio.ai');
content = content.replace(/El Stoodio\.ai/gi, 'Stoodio.ai');
content = content.replace(/el Stoodio\.ai/gi, 'Stoodio.ai');
content = content.replace(/Agencia/g, 'Stoodio.ai');
content = content.replace(/agencia/g, 'Stoodio.ai');

// Fix specific phrases after the raw replacements
content = content.replace(/Stoodio\.ai crea catálogo/g, 'El equipo de Stoodio.ai crea catálogo');

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("Replaced successfully with node.");
