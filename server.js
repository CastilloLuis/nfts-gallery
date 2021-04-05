const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '.', 'dist');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
app.get('*', (req, res) => {
  console.log('initial');
  res.sendFile(path.join(publicPath, 'index.html'));
});
