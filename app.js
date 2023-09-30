/*
  Student's Name: Nischal Adhikari
  Student ID: 301301600
  Date: 2023-09-30
*/

const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (like style.css and images)
app.use(express.static('public'));

// Define your routes
app.get('home.ejs', (req, res) => {
  // Render the Home Page using the 'home.ejs' template
  res.render('home');
});

app.get('contact.ejs', (req, res) => {
  // Render the Contact Me page using the 'contact.ejs' template
  res.render('contact');
});

app.get('projects.ejs', (req, res) => {
  // Render the Contact Me page using the 'contact.ejs' template
  res.render('project');
});
app.get('service.ejs', (req, res) => {
  // Render the Contact Me page using the 'contact.ejs' template
  res.render('service');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.static('public'));
