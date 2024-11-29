This program This a simple HTTP server built using Node.js that serves static HTML files based on the URL path requested by the client. Here's a detailed description of its components and functionality:

Key Features:
1. Static File Serving:
- The server serves static HTML files (index.html, about.html, contact.html, services.html) based on the URL path.
- It uses the Node.js fs module to read the HTML files from the file system and send them as responses to HTTP requests.

2. Routing:
- The server determines which HTML file to serve by examining the URL path.
- The root path (/) serves index.html, while other paths like /about, /contact, and /services serve their respective HTML files.

3. Error Handling:
- If a requested file is not found, the server responds with a 404 error page.
- Other server errors are handled with a 500 status code response.

4. Navigation:
- Each HTML file includes links to other pages, allowing users to navigate between them easily.

5. Simple Setup:
- The server is lightweight and easy to set up, requiring only Node.js and a few lines of code.
- It runs on a specified port (e.g., 3000) and can be accessed via a web browser, using http://localhost:3000 => you can also add /index (for the 'Home' page), /about (for the 'About Us' page), /contact (for the 'Contact Us' page), and /services (for the 'Our Services' page).
