const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// default route -> index.html in public/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`✅ Sendora server running at http://localhost:${PORT}`));
