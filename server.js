const express = require('express');
const path = require('path');
const app = express();

// Serve static files from root directory
app.use(express.static(path.join(__dirname)));

// Optional API route for future backend logic
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Genie Oracle API is live' });
});

// Default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
