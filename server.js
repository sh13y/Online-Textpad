const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// Redirect root URL to /note/
app.get('/', (req, res) => {
    res.redirect('/note/'); // Redirect to the note page
});

// Endpoint for notes with dynamic ID
app.get('/note/:id', (req, res) => {
    res.sendFile(__dirname + '/public/note.html'); // Serve note.html for editing notes
});

// Handle requests to /note/ by redirecting to a new note with a unique ID
app.get('/note/', (req, res) => {
    const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a unique ID
    res.redirect(`/note/${uniqueId}`); // Redirect to the newly created note URL
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
