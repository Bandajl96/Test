/*import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Lmao this is my site</h1>');
});

console.log('hello')


