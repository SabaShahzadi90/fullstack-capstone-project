const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Yaha pe searchRoutes ko import karna hai
const searchRoutes = require('./searchRoutes'); // agar root me hai
// const searchRoutes = require('./routes/searchRoutes'); // agar routes folder me hai
app.use('/', searchRoutes);

// Ye line important hai Q7 ke liye 👇
app.get('/api/search', (req, res) => {
  res.json({ message: "Search route working" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
