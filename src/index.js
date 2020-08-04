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
  res.send('<h1>My Node App</h1>');
});

app.listen(5000, () => {
  console.log('App listening on port 5000!');
});
