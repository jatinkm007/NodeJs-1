# Node.js HTTP Web Server

A basic web server built with Node.js using only the built-in `http` module — no frameworks. The server handles multiple routes and serves styled HTML pages.

---

## Project Description

This project demonstrates core Node.js server concepts including routing, asynchronous file serving, HTTP status codes, and error handling. Each route serves a dedicated HTML page with shared CSS styling.

---

## Folder Structure

```
project/
├── server.js
└── pages/
    ├── style.css
    ├── home.html
    ├── about.html
    ├── contact.html
    ├── services.html
    └── 404.html
```

---

## Installation

1. Make sure **Node.js** is installed on your machine.  
   Download it from [nodejs.org](https://nodejs.org) if needed.

2. Clone or download this repository:
   ```bash
   git clone <your-repo-url>
   cd project
   ```

No `npm install` is needed — this project uses only Node.js built-in modules (`http`, `fs`, `path`).

---

## How to Run

```bash
node server.js
```

You should see:
```
Server running at http://localhost:3000
Available routes: /home, /about, /contact, /services
```

Then open your browser and visit any of the routes below.

---

## Available Routes

| Route | Description | Status Code |
|---|---|---|
| `http://localhost:3000/` | Redirects to home | 200 |
| `http://localhost:3000/home` | Home page | 200 |
| `http://localhost:3000/about` | About page | 200 |
| `http://localhost:3000/contact` | Contact page | 200 |
| `http://localhost:3000/services` | Services page (bonus route) | 200 |
| `http://localhost:3000/anything-else` | Custom 404 page | 404 |

---

## Features

- **No frameworks** — built entirely with the Node.js `http` module
- **Async file serving** — uses `fs.readFile` for non-blocking I/O
- **Correct HTTP status codes** — 200 for success, 404 for not found, 500 for server errors
- **Custom 404 page** — unknown routes serve a styled error page
- **CSS served as its own route** — `/style.css` is handled by the server and shared across all pages
- **Request logging** — every request is logged to the console with a timestamp
- **Modular code** — a reusable `serveFile()` helper keeps the route handler clean

---

## How It Works

The server uses a `switch` statement in the request handler to match the URL and serve the corresponding HTML file from the `pages/` directory. All file reads are asynchronous using `fs.readFile`. If a file fails to load, a 500 error is returned. Any unmatched route falls through to the `default` case and serves the custom `404.html` page.

```js
// Core pattern
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/home': serveFile('pages/home.html', 200, res); break;
    // ...
    default:      serveFile('pages/404.html', 404, res);
  }
})
```

---

## Technologies Used

- Node.js (built-in modules only: `http`, `fs`, `path`)
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- 
