const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
