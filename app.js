const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (like style.css and images)
app.use(express.static('public'));

// Define your routes
app.get('/', (req, res) => {
  // Render the Home Page using the 'home.ejs' template
  res.render('home');
});

app.get('/contact', (req, res) => {
  // Render the Contact Me page using the 'contact.ejs' template
  res.render('contact');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.static('public'));
