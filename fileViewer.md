
HTML
The HTML structure includes an input for file selection and a container to display the file content.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Viewer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<input type="file" id="fileInput" accept=".txt">
<div id="fileContent"></div>

<script src="script.js"></script>
</body>
</html>
Copy
CSS
The CSS is minimal, focusing on the layout of the file content container.

/* style.css */
#fileContent {
    white-space: pre-wrap; /* Ensures text wraps */
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    height: 200px;
    overflow-y: scroll; /* Adds scroll to the container */
}
Copy
JavaScript
The JavaScript part handles the file selection and reads the file content using the FileReader API to display it within the #fileContent div.

// script.js
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('fileContent').textContent = e.target.result;
    };
    reader.readAsText(file);
});
Copy
Explanation
HTML: A file input allows the user to select a file, and a div container (#fileContent) will display the content of the selected file.
CSS: Styles for the file content container to ensure readability and usability.
JavaScript:
Adds an event listener to the file input to trigger when a file is selected.
Checks if a file was selected.
Uses the FileReader API to read the content of the file as text.
Displays the content inside the #fileContent div.
This example demonstrates how to read and display the content of text files. For viewing other file types (like images or PDFs), you would need to adjust the JavaScript to handle those specific formats, e.g., using reader.readAsDataURL(file) for images and embedding them in an <img> tag, or using a library like PDF.js for PDF files.

<!-- https://github.com/NarendraKoya999/Frontend-Machine-Coding-Interview-Questions -->