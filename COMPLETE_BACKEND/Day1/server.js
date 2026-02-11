// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║                    DAY 1 — COMPLETE BACKEND DEVELOPMENT                      ║
// ║                         with Node.js & Express                               ║
// ║                                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │                                                                              │
// │  TABLE OF CONTENTS                                                           │
// │  ─────────────────                                                           │
// │                                                                              │
// │  SECTION 1:  What is Backend Development?                                    │
// │  SECTION 2:  Client-Server Architecture                                      │
// │  SECTION 3:  What is Node.js?                                                │
// │  SECTION 4:  What is npm and package.json?                                   │
// │  SECTION 5:  What is require() and Modules?                                  │
// │  SECTION 6:  What is Express.js?                                             │
// │  SECTION 7:  Creating an Express Application                                 │
// │  SECTION 8:  HTTP Methods (GET, POST, PUT, DELETE, PATCH)                    │
// │  SECTION 9:  Routes & Routing                                                │
// │  SECTION 10: Request Object (req) — Deep Dive                                │
// │  SECTION 11: Response Object (res) — Deep Dive                               │
// │  SECTION 12: Callback Functions & Arrow Functions                             │
// │  SECTION 13: Middleware — The Backbone of Express                             │
// │  SECTION 14: Ports & Networking                                               │
// │  SECTION 15: Localhost & IP Addresses                                         │
// │  SECTION 16: Web Servers                                                      │
// │  SECTION 17: REST APIs & API Design                                           │
// │  SECTION 18: Status Codes                                                     │
// │  SECTION 19: JSON — The Language of APIs                                      │
// │  SECTION 20: Error Handling                                                   │
// │  SECTION 21: Environment Variables & Security                                 │
// │  SECTION 22: CORS (Cross-Origin Resource Sharing)                             │
// │  SECTION 23: Databases (SQL vs NoSQL)                                         │
// │  SECTION 24: Authentication & Authorization                                   │
// │  SECTION 25: Deployment & Production                                          │
// │  SECTION 26: HTTP Methods — Complete Encyclopedia with Examples               │
// │  SECTION 27: Middleware — Complete Deep Dive with Real-World Examples         │
// │  SECTION 28: MongoDB & Mongoose — Complete Database Deep Dive                │
// │  SECTION 29: The Actual Code (explained line by line)                         │
// │                                                                              │
// └──────────────────────────────────────────────────────────────────────────────┘


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 1: WHAT IS BACKEND DEVELOPMENT?
// ════════════════════════════════════════════════════════════════════════════════
//
//  Think of a restaurant:
//    - The FRONTEND is the dining area — what the customer sees (menus, decor, plates).
//    - The BACKEND is the kitchen — where the food is actually prepared.
//    - The DATABASE is the fridge/pantry — where ingredients (data) are stored.
//    - The API is the waiter — takes orders from customers to the kitchen and
//      brings the food back.
//
//  Backend Development = Building the "kitchen" of a web application.
//
//  It involves:
//    1. SERVER — A computer (or program) that waits for requests and sends responses.
//       Example: When you type google.com, a Google server processes your request
//       and sends back the search page.
//
//    2. APPLICATION LOGIC — The rules and computations that decide what happens.
//       Example: "If user enters wrong password 3 times, lock the account."
//
//    3. DATABASE — Where all persistent data lives (users, posts, products, etc.).
//       Example: When you sign up, your username and password are saved in a database.
//
//    4. API (Application Programming Interface) — The "contract" between frontend
//       and backend. It defines what data you can request and what format it comes in.
//       Example: GET /api/users returns a list of users in JSON format.
//
//  Popular Backend Languages:
//    ┌───────────────┬──────────────────────────────────────────────────────┐
//    │ Language       │ Used By                                             │
//    ├───────────────┼──────────────────────────────────────────────────────┤
//    │ JavaScript     │ Netflix, LinkedIn, Uber, PayPal (via Node.js)       │
//    │ Python         │ Instagram, Spotify, Reddit (via Django/Flask)       │
//    │ Java           │ Amazon, Google, Twitter (via Spring Boot)           │
//    │ Ruby           │ GitHub, Shopify, Airbnb (via Ruby on Rails)         │
//    │ Go             │ Google, Docker, Kubernetes                          │
//    │ PHP            │ Facebook, WordPress, Wikipedia (via Laravel)        │
//    │ C#             │ Microsoft, Stack Overflow (via ASP.NET)             │
//    │ Rust           │ Discord, Cloudflare, Figma                          │
//    └───────────────┴──────────────────────────────────────────────────────┘
//
//  What a Backend Developer does daily:
//    - Writes API endpoints that the frontend calls
//    - Connects to databases to read/write data
//    - Handles user authentication (login, signup, sessions, tokens)
//    - Validates data (is the email format correct? is the password strong enough?)
//    - Handles errors gracefully (what if the database is down?)
//    - Optimizes performance (caching, pagination, indexing)
//    - Secures the application (preventing SQL injection, XSS, CSRF attacks)
//    - Deploys code to production servers (AWS, GCP, Azure, DigitalOcean)


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 2: CLIENT-SERVER ARCHITECTURE
// ════════════════════════════════════════════════════════════════════════════════
//
//  The internet works on a CLIENT-SERVER model:
//
//    ┌──────────┐    HTTP Request     ┌──────────┐     Query      ┌──────────┐
//    │          │ ──────────────────→ │          │ ─────────────→ │          │
//    │  CLIENT  │                     │  SERVER  │                │ DATABASE │
//    │ (Browser)│ ←────────────────── │ (Node.js)│ ←───────────── │ (MongoDB)│
//    └──────────┘    HTTP Response    └──────────┘    Results     └──────────┘
//
//  Step-by-step flow:
//    1. User types "www.example.com" in their browser (CLIENT)
//    2. Browser sends an HTTP REQUEST to the server
//    3. The SERVER receives the request, processes it
//    4. If data is needed, the server queries the DATABASE
//    5. Database returns the data to the server
//    6. Server packages the data into an HTTP RESPONSE
//    7. Browser receives the response and renders the page
//
//  KEY TERMS:
//
//    CLIENT = Any device/software that makes requests.
//      - Web browsers (Chrome, Firefox, Safari)
//      - Mobile apps (Instagram app, Twitter app)
//      - Other servers (server-to-server communication)
//      - Desktop apps (Slack, Discord)
//      - CLI tools (curl, Postman, HTTPie)
//
//    SERVER = A program that listens for and responds to requests.
//      - It runs 24/7, waiting for someone to ask for something
//      - Can handle thousands of requests per second
//      - Our Express app IS a server
//
//    PROTOCOL = A set of rules for communication.
//      - HTTP  = HyperText Transfer Protocol (how web data moves)
//      - HTTPS = HTTP + SSL/TLS encryption (secure version)
//      - FTP   = File Transfer Protocol (for uploading/downloading files)
//      - WS    = WebSocket (for real-time two-way communication)
//      - TCP   = Transmission Control Protocol (reliable data delivery)
//      - UDP   = User Datagram Protocol (fast but unreliable, used in gaming)


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 3: WHAT IS NODE.JS?
// ════════════════════════════════════════════════════════════════════════════════
//
//  Node.js is a RUNTIME ENVIRONMENT that lets you run JavaScript OUTSIDE
//  the browser — on servers, desktops, or anywhere.
//
//  Before Node.js:
//    - JavaScript could ONLY run inside web browsers
//    - Backend had to be written in PHP, Java, Python, etc.
//    - You needed to know 2 languages: JS for frontend + another for backend
//
//  After Node.js (created in 2009 by Ryan Dahl):
//    - JavaScript can now run on servers, machines, IoT devices
//    - Full-stack development with ONE language (JavaScript everywhere!)
//    - Massive ecosystem via npm (millions of packages)
//
//  HOW NODE.JS WORKS — The Event Loop:
//
//    Node.js is SINGLE-THREADED but NON-BLOCKING:
//
//    Traditional Server (like Java):
//      Request 1 → Thread 1 (waiting for DB...) → blocked
//      Request 2 → Thread 2 (waiting for file...) → blocked
//      Request 3 → Thread 3 (processing...) → blocked
//      Request 4 → NO THREADS LEFT → user has to wait!
//
//    Node.js Server:
//      Request 1 → Start DB query, don't wait, move on
//      Request 2 → Start file read, don't wait, move on
//      Request 3 → Process immediately, respond
//      Request 1 → DB query done! Here's the callback with your data
//      Request 2 → File read done! Here's the callback with your data
//
//    This is called the EVENT LOOP:
//      1. Node receives a request
//      2. If it's quick (math, string manipulation), do it now
//      3. If it's slow (database, file read, network), delegate it
//         and move to the next request
//      4. When the slow task finishes, a callback runs with the result
//
//    ANALOGY: Imagine a chef (Node) who puts bread in the toaster (DB query),
//    doesn't stand there waiting — instead starts chopping vegetables.
//    When the toast pops up, they grab it. ONE chef, many tasks, no waiting.
//
//  KEY FEATURES OF NODE.JS:
//    - V8 Engine: Uses Google Chrome's V8 engine to compile JS to machine code
//    - npm: World's largest package registry (2+ million packages)
//    - Asynchronous: Non-blocking I/O operations
//    - Cross-platform: Runs on Windows, macOS, Linux
//    - Streams: Can process large files chunk by chunk (great for video streaming)
//    - Built-in modules: fs (file system), http, path, crypto, os, events, etc.
//
//  WHAT IS A RUNTIME ENVIRONMENT?
//    A runtime is the "engine" that executes your code. Just like:
//    - The JVM runs Java code
//    - The CPython interpreter runs Python code
//    - Node.js runs JavaScript code (using the V8 engine)
//    It provides built-in APIs (file system, networking, etc.) that your
//    code can use to interact with the operating system.


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 4: WHAT IS npm AND package.json?
// ════════════════════════════════════════════════════════════════════════════════
//
//  npm = Node Package Manager
//
//  It's TWO things:
//    1. A COMMAND-LINE TOOL for installing, updating, and managing packages
//    2. An ONLINE REGISTRY (npmjs.com) with 2+ million free packages
//
//  Think of npm like an "App Store" for JavaScript code:
//    - Need to build a server? → npm install express
//    - Need to talk to a database? → npm install mongoose
//    - Need to handle dates? → npm install dayjs
//    - Need to send emails? → npm install nodemailer
//    - Need to hash passwords? → npm install bcrypt
//
//  COMMON npm COMMANDS:
//    npm init              → Creates a new package.json (project config file)
//    npm init -y           → Same, but skips all questions (uses defaults)
//    npm install express   → Installs Express and adds it to package.json
//    npm install           → Installs ALL dependencies listed in package.json
//    npm uninstall express → Removes Express from the project
//    npm update            → Updates all packages to their latest allowed version
//    npm run <script>      → Runs a script defined in package.json
//    npm list              → Shows all installed packages
//    npx <command>         → Runs a package without installing it globally
//
//  PACKAGE.JSON — The "identity card" of your project:
//    {
//      "name": "day1",           ← Name of your project
//      "version": "1.0.0",       ← Current version
//      "main": "index.js",       ← Entry point file
//      "scripts": {              ← Custom commands you can run with `npm run`
//        "start": "node server.js",
//        "dev": "nodemon server.js"
//      },
//      "dependencies": {         ← Packages your app NEEDS to run
//        "express": "^5.2.1"
//      },
//      "devDependencies": {      ← Packages only needed during development
//        "nodemon": "^3.0.0"
//      }
//    }
//
//  VERSION NUMBERS (Semantic Versioning = SemVer):
//    "express": "^5.2.1"
//                │ │ │
//                │ │ └── PATCH: Bug fixes (safe to update)
//                │ └──── MINOR: New features, backward compatible (safe)
//                └────── MAJOR: Breaking changes (may break your code!)
//
//    ^ (caret) = Allow MINOR and PATCH updates (^5.2.1 → 5.x.x)
//    ~ (tilde) = Allow only PATCH updates (~5.2.1 → 5.2.x)
//    No symbol = Exact version only (5.2.1 → only 5.2.1)
//
//  NODE_MODULES FOLDER:
//    When you run `npm install`, all packages get downloaded into the
//    `node_modules/` folder. This folder can be HUGE (hundreds of MBs)
//    because packages have their own dependencies too.
//    NEVER commit node_modules to Git — use a .gitignore file!
//    Anyone can recreate it by running `npm install` (reads package.json).
//
//  PACKAGE-LOCK.JSON:
//    Locks the EXACT versions of every package and sub-dependency.
//    This ensures everyone on your team gets the same versions.
//    DO commit this file to Git.


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 5: WHAT IS require() AND MODULES?
// ════════════════════════════════════════════════════════════════════════════════
//
//  MODULES are reusable pieces of code that you can import into your files.
//
//  There are THREE types of modules in Node.js:
//
//    1. CORE MODULES — Built into Node.js, no installation needed
//       const fs = require('fs');        // File system operations
//       const http = require('http');    // Create basic HTTP servers
//       const path = require('path');    // Handle file paths
//       const crypto = require('crypto'); // Encryption & hashing
//       const os = require('os');        // Operating system info
//       const events = require('events'); // Event handling
//       const url = require('url');      // URL parsing
//
//    2. THIRD-PARTY MODULES — Installed via npm
//       const express = require('express');     // Web framework
//       const mongoose = require('mongoose');   // MongoDB driver
//       const bcrypt = require('bcrypt');       // Password hashing
//       const jwt = require('jsonwebtoken');    // Auth tokens
//       const dotenv = require('dotenv');       // Environment variables
//
//    3. LOCAL MODULES — Your own files
//       const myUtils = require('./utils');      // Your custom file
//       const routes = require('./routes/api');  // Your route file
//
//  HOW require() WORKS:
//    1. Node.js finds the module (built-in → node_modules → local file)
//    2. Reads and executes the module code
//    3. Returns whatever the module "exports"
//    4. CACHES it — so if you require() the same module again,
//       it doesn't re-execute, just returns the cached version
//
//  COMMONJS vs ES MODULES:
//
//    CommonJS (older, used in Node.js):
//      const express = require('express');     // importing
//      module.exports = myFunction;            // exporting
//
//    ES Modules (newer, used in modern JS / browsers):
//      import express from 'express';          // importing
//      export default myFunction;              // exporting
//
//    To use ES Modules in Node.js, either:
//      - Add "type": "module" to package.json
//      - Or use .mjs file extension


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 6: WHAT IS EXPRESS.JS?
// ════════════════════════════════════════════════════════════════════════════════
//
//  Express.js is a MINIMAL, FAST, and UNOPINIONATED web framework for Node.js.
//
//  Without Express, creating a server in plain Node.js looks like this:
//
//    const http = require('http');
//    const server = http.createServer((req, res) => {
//      if (req.method === 'GET' && req.url === '/') {
//        res.writeHead(200, { 'Content-Type': 'text/plain' });
//        res.end('Hello, World!');
//      } else if (req.method === 'GET' && req.url === '/about') {
//        res.writeHead(200, { 'Content-Type': 'text/plain' });
//        res.end('About page');
//      } else {
//        res.writeHead(404);
//        res.end('Not Found');
//      }
//    });
//    server.listen(3000);
//
//  With Express, the same thing is MUCH simpler:
//
//    const app = express();
//    app.get('/', (req, res) => res.send('Hello, World!'));
//    app.get('/about', (req, res) => res.send('About page'));
//    app.listen(3000);
//
//  WHY USE EXPRESS?
//    ✓ Simpler routing system (no if/else chains for URLs)
//    ✓ Built-in middleware support (plug-in system for adding features)
//    ✓ Easy request/response handling (req.body, req.params, res.json())
//    ✓ Template engine support (EJS, Pug, Handlebars for server-rendered HTML)
//    ✓ Static file serving (serve CSS, images, JS files)
//    ✓ Huge ecosystem (thousands of Express middleware packages)
//    ✓ Industry standard — used by Netflix, IBM, Uber, PayPal
//
//  KEY TERMS:
//
//    "Minimal" = Express gives you the basics, doesn't force a structure.
//    You decide how to organize your code (unlike Django or Rails which
//    have strict folder conventions).
//
//    "Unopinionated" = Express doesn't impose its preferences on you.
//    You choose your database, template engine, project structure, etc.
//    (Opposite: "Opinionated" frameworks like Next.js or NestJS make
//    many decisions for you.)
//
//    "Framework" vs "Library":
//      - Library: You call library code when YOU want (you're in control)
//        Example: Lodash — you call _.map() when you need it
//      - Framework: The framework calls YOUR code (it's in control)
//        Example: Express — you define routes, Express calls them when
//        a request matches
//      This is called "Inversion of Control"


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 7: CREATING AN EXPRESS APPLICATION
// ════════════════════════════════════════════════════════════════════════════════
//
//  Step 1: require('express') returns a FUNCTION
//  Step 2: Calling that function — express() — creates an APPLICATION object
//  Step 3: The app object has methods for:
//    - Defining routes (app.get, app.post, app.put, app.delete, app.patch)
//    - Adding middleware (app.use)
//    - Starting the server (app.listen)
//    - Configuring settings (app.set)
//
//  The `app` object is the HEART of your Express application.
//  Everything revolves around it.


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 8: HTTP METHODS — THE VERBS OF THE WEB
// ════════════════════════════════════════════════════════════════════════════════
//
//  HTTP methods tell the server what ACTION the client wants to perform.
//  Think of them as "verbs" — they describe WHAT to do with a resource.
//
//  ┌─────────┬──────────────┬────────────────────────────────────────────┐
//  │ Method  │ CRUD Action  │ What It Does                               │
//  ├─────────┼──────────────┼────────────────────────────────────────────┤
//  │ GET     │ READ         │ Retrieve data (show me the users)          │
//  │ POST    │ CREATE       │ Send data to create something new          │
//  │ PUT     │ UPDATE       │ Replace an entire resource with new data   │
//  │ PATCH   │ UPDATE       │ Update only specific fields of a resource  │
//  │ DELETE  │ DELETE       │ Remove a resource                          │
//  │ OPTIONS │ —            │ Ask what methods are allowed               │
//  │ HEAD    │ —            │ Like GET but only returns headers, no body │
//  └─────────┴──────────────┴────────────────────────────────────────────┘
//
//  CRUD = Create, Read, Update, Delete — the four basic database operations.
//
//  REAL-WORLD EXAMPLE (Twitter-like API):
//    GET    /api/tweets         → Get all tweets
//    GET    /api/tweets/42      → Get tweet #42
//    POST   /api/tweets         → Create a new tweet (send text in body)
//    PUT    /api/tweets/42      → Replace tweet #42 entirely
//    PATCH  /api/tweets/42      → Edit just the text of tweet #42
//    DELETE /api/tweets/42      → Delete tweet #42
//
//  GET vs POST — KEY DIFFERENCES:
//    GET:
//      - Data is sent in the URL (query string): /search?q=cats
//      - Data is visible in the address bar
//      - Has a URL length limit (~2048 chars)
//      - Can be bookmarked and cached
//      - Used for READING data (should never change data on server)
//      - Is IDEMPOTENT: calling it 100 times gives the same result
//
//    POST:
//      - Data is sent in the REQUEST BODY (hidden from URL)
//      - No size limit (can send large files, JSON data)
//      - Cannot be bookmarked
//      - Used for CREATING data (signup forms, file uploads)
//      - Is NOT idempotent: calling it 100 times creates 100 items
//
//  PUT vs PATCH:
//    PUT replaces the ENTIRE resource:
//      PUT /api/users/1 { name: "John", email: "john@new.com", age: 30 }
//      → The whole user object is replaced with this new data
//
//    PATCH updates ONLY the fields you send:
//      PATCH /api/users/1 { email: "john@new.com" }
//      → Only the email changes, name and age stay the same
//
//  IDEMPOTENT = "Doing it once or 100 times gives the same end result."
//    GET    → idempotent (reading data doesn't change anything)
//    PUT    → idempotent (replacing with same data = same result)
//    DELETE → idempotent (deleting something already deleted = still gone)
//    POST   → NOT idempotent (posting twice = 2 items created)
//    PATCH  → depends on implementation


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 9: ROUTES & ROUTING
// ════════════════════════════════════════════════════════════════════════════════
//
//  A ROUTE = HTTP Method + URL Path + Handler Function
//
//  It's like a signpost: "When someone goes to THIS address using THIS method,
//  run THIS function."
//
//  SYNTAX:
//    app.METHOD(PATH, HANDLER)
//
//    app.get('/',        (req, res) => { ... })  // Root page
//    app.get('/about',   (req, res) => { ... })  // About page
//    app.post('/signup', (req, res) => { ... })  // Signup form submission
//
//  ROUTE PARAMETERS — Dynamic parts of the URL:
//    app.get('/users/:id', (req, res) => {
//      console.log(req.params.id);  // If URL is /users/42, this logs "42"
//    });
//
//    The colon (:) marks a parameter. :id can match anything:
//      /users/1, /users/42, /users/john → all match this route!
//
//    Multiple params:
//      app.get('/users/:userId/posts/:postId', (req, res) => {
//        req.params.userId;   // "5"
//        req.params.postId;   // "12"
//      });
//      // URL: /users/5/posts/12
//
//  QUERY STRINGS — Extra data in the URL after a "?":
//    URL: /search?q=javascript&page=2&limit=10
//
//    app.get('/search', (req, res) => {
//      req.query.q;       // "javascript"
//      req.query.page;    // "2" (always a string!)
//      req.query.limit;   // "10"
//    });
//
//  ROUTE ORDER MATTERS:
//    Express checks routes TOP to BOTTOM and uses the FIRST match.
//
//    app.get('/users/new', handler1);   // ← Must be ABOVE :id
//    app.get('/users/:id', handler2);   // ← This would catch "new" as an id!
//
//  ROUTE CHAINING (cleaner for same paths):
//    app.route('/users')
//      .get((req, res) => { /* get all users */ })
//      .post((req, res) => { /* create a user */ });
//
//  EXPRESS ROUTER (for organizing routes into separate files):
//    // routes/userRoutes.js
//    const router = express.Router();
//    router.get('/', getAllUsers);
//    router.post('/', createUser);
//    router.get('/:id', getUserById);
//    module.exports = router;
//
//    // server.js
//    const userRoutes = require('./routes/userRoutes');
//    app.use('/api/users', userRoutes);
//    // Now: GET /api/users, POST /api/users, GET /api/users/:id all work!


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 10: REQUEST OBJECT (req) — DEEP DIVE
// ════════════════════════════════════════════════════════════════════════════════
//
//  The `req` object represents the incoming HTTP request from the client.
//  It contains ALL the information about what the client is asking for.
//
//  MOST USEFUL req PROPERTIES:
//
//    req.params  → Route parameters (from the URL path)
//      Example: app.get('/users/:id') → req.params.id
//
//    req.query   → Query string parameters (from ?key=value in URL)
//      Example: /search?q=cats → req.query.q === "cats"
//
//    req.body    → The data sent in the request body (POST/PUT/PATCH)
//      ⚠ IMPORTANT: req.body is UNDEFINED by default!
//      You need middleware to parse it:
//        app.use(express.json());          // for JSON bodies
//        app.use(express.urlencoded());    // for form data
//
//    req.headers → All HTTP headers sent by the client
//      req.headers['content-type']    // "application/json"
//      req.headers['authorization']   // "Bearer eyJhb..."
//      req.headers['user-agent']      // "Mozilla/5.0 ..."
//
//    req.method  → The HTTP method (GET, POST, PUT, DELETE, etc.)
//    req.url     → The full URL path (/users?page=2)
//    req.path    → Just the path without query string (/users)
//    req.ip      → The client's IP address
//    req.cookies → Cookies sent by the browser (needs cookie-parser middleware)
//    req.hostname → The domain name (e.g., "example.com")
//    req.protocol → "http" or "https"
//    req.secure  → true if the connection is HTTPS
//
//  EXAMPLE — Reading everything from a request:
//    app.post('/api/users', (req, res) => {
//      console.log(req.method);               // "POST"
//      console.log(req.path);                 // "/api/users"
//      console.log(req.body);                 // { name: "John", age: 25 }
//      console.log(req.headers['content-type']); // "application/json"
//      console.log(req.ip);                   // "127.0.0.1"
//    });


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 11: RESPONSE OBJECT (res) — DEEP DIVE
// ════════════════════════════════════════════════════════════════════════════════
//
//  The `res` object is what you use to SEND DATA BACK to the client.
//  Think of it as your "reply" to the client's "question" (request).
//
//  MOST USEFUL res METHODS:
//
//    res.send('Hello')
//      → Sends a response. Auto-detects content type.
//        String → text/html, Object → application/json, Buffer → binary
//
//    res.json({ name: 'John' })
//      → Sends a JSON response. Automatically sets Content-Type header.
//        ALWAYS use this for APIs.
//
//    res.status(404).json({ error: 'Not found' })
//      → Sets the status code AND sends a JSON response.
//        status() can be chained because it returns the res object.
//
//    res.sendFile('/absolute/path/to/file.html')
//      → Sends a file as the response (HTML page, image, PDF, etc.)
//
//    res.redirect('/login')
//      → Redirects the client to a different URL (302 by default)
//      → res.redirect(301, '/new-url')  for permanent redirect
//
//    res.render('template', { data })
//      → Renders an HTML template (EJS, Pug, Handlebars) with data
//
//    res.cookie('name', 'value', { httpOnly: true })
//      → Sets a cookie in the client's browser
//
//    res.set('Header-Name', 'value')
//      → Sets a custom response header
//
//    res.download('/path/to/file.pdf')
//      → Prompts the user to download the file
//
//  ⚠ IMPORTANT RULE: You can only send ONE response per request!
//    Calling res.send() or res.json() twice will cause an error:
//    "Error: Cannot set headers after they are sent to the client"


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 12: CALLBACK FUNCTIONS & ARROW FUNCTIONS
// ════════════════════════════════════════════════════════════════════════════════
//
//  A CALLBACK is a function that you give to another function, saying:
//  "Hey, run this function LATER when you're done with your task."
//
//  ANALOGY: You order pizza and give them your phone number (the callback).
//  When the pizza is ready, they CALL YOU BACK. You don't stand at the
//  counter waiting — you go do other things.
//
//  In Express routes, the handler IS a callback:
//
//    app.get('/', (req, res) => {
//      res.send('Hello');
//    });
//
//    Translation: "Express, when someone visits '/', CALL BACK this function
//    and give it the request and response objects."
//
//  ARROW FUNCTION SYNTAX:
//
//    Traditional function:
//      function greet(name) {
//        return 'Hello ' + name;
//      }
//
//    Arrow function (same thing, shorter syntax):
//      const greet = (name) => {
//        return 'Hello ' + name;
//      };
//
//    Even shorter (when there's only ONE expression):
//      const greet = (name) => 'Hello ' + name;
//
//    With NO parameters:
//      const sayHi = () => 'Hi!';
//
//    With ONE parameter (parentheses optional):
//      const double = x => x * 2;
//
//  ARROW FUNCTIONS vs REGULAR FUNCTIONS:
//    - Arrow functions DON'T have their own `this` keyword
//      (they inherit `this` from the surrounding code)
//    - Arrow functions CAN'T be used as constructors (no `new`)
//    - Arrow functions DON'T have an `arguments` object
//    - Arrow functions are always ANONYMOUS (no name)
//
//  CALLBACK HELL (what happens when you nest too many callbacks):
//    getUser(id, (user) => {
//      getPosts(user, (posts) => {
//        getComments(posts[0], (comments) => {
//          // This pyramid of doom is hard to read!
//        });
//      });
//    });
//
//    SOLUTION: Use Promises or async/await (modern JavaScript):
//    const user = await getUser(id);
//    const posts = await getPosts(user);
//    const comments = await getComments(posts[0]);
//    // Much cleaner! Reads like normal code.


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 13: MIDDLEWARE — THE BACKBONE OF EXPRESS
// ════════════════════════════════════════════════════════════════════════════════
//
//  Middleware = a function that runs BETWEEN the request arriving and
//  the response being sent. Think of it as a "middleman" or "checkpoint."
//
//  ANALOGY: Airport security checkpoints.
//    Your flight (response) is at the gate, but before you get there:
//    → Check ticket (authentication middleware)
//    → Security scan (validation middleware)
//    → Passport control (authorization middleware)
//    → Boarding gate (route handler = final destination)
//
//  Every middleware function gets THREE parameters:
//    function myMiddleware(req, res, next) {
//      // Do something with req or res
//      next();  // Pass control to the NEXT middleware/route handler
//    }
//
//    `next()` is crucial! If you don't call it, the request gets STUCK
//    and the client just waits forever (timeout).
//
//  TYPES OF MIDDLEWARE:
//
//    1. APPLICATION-LEVEL — Runs for every request
//       app.use(express.json());               // Parse JSON bodies
//       app.use(express.urlencoded());          // Parse form data
//       app.use(cors());                        // Enable CORS
//       app.use(morgan('dev'));                 // Log all requests
//
//    2. ROUTE-LEVEL — Runs only for specific routes
//       app.get('/admin', isAdmin, (req, res) => { ... });
//       //                ↑ This middleware only runs for /admin
//
//    3. ERROR-HANDLING — Has FOUR parameters (err, req, res, next)
//       app.use((err, req, res, next) => {
//         console.error(err.stack);
//         res.status(500).json({ error: 'Something broke!' });
//       });
//
//    4. BUILT-IN (Express):
//       express.json()        → Parses JSON request bodies
//       express.urlencoded()   → Parses URL-encoded form data
//       express.static('public') → Serves static files (CSS, images, JS)
//
//    5. THIRD-PARTY (installed via npm):
//       cors        → Enables Cross-Origin Resource Sharing
//       helmet      → Adds security headers
//       morgan      → Logs HTTP requests
//       compression → Compresses responses (gzip)
//       cookie-parser → Parses cookies
//       express-rate-limit → Rate limiting (prevent abuse)
//
//  MIDDLEWARE EXECUTION ORDER:
//    Middleware runs in the ORDER you define it. Order matters!
//
//    app.use(express.json());      // 1st: Parse the body
//    app.use(morgan('dev'));       // 2nd: Log the request
//    app.use(cors());              // 3rd: Set CORS headers
//    app.get('/', handler);        // 4th: Handle the route
//    app.use(errorHandler);        // 5th: Catch any errors
//
//  CUSTOM MIDDLEWARE EXAMPLE — Log every request:
//    app.use((req, res, next) => {
//      console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
//      next();  // Don't forget this! Or the request gets stuck.
//    });
//    // Output: "GET /api/users at 2026-02-11T10:30:00.000Z"


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 14: PORTS & NETWORKING
// ════════════════════════════════════════════════════════════════════════════════
//
//  A PORT is like an apartment number in a building.
//
//  ANALOGY:
//    - IP Address = the building's street address (192.168.1.1)
//    - Port = the apartment number (3000, 8080, 443)
//    - Together they form a complete address: 192.168.1.1:3000
//
//  A single computer can run MANY servers at the same time, each on a
//  different port. The port number tells the OS which program should
//  receive the incoming request.
//
//  PORT NUMBER RANGES (0 to 65535):
//
//    ┌────────────────┬───────────┬──────────────────────────────────────────┐
//    │ Range          │ Name      │ Notes                                    │
//    ├────────────────┼───────────┼──────────────────────────────────────────┤
//    │ 0 – 1023       │ Well-Known│ Reserved for system services,            │
//    │                │ (Privileged│ need admin/root to use them              │
//    │                │  Ports)   │                                          │
//    ├────────────────┼───────────┼──────────────────────────────────────────┤
//    │ 1024 – 49151   │ Registered│ Used by applications (databases,         │
//    │                │           │ dev servers). No special privileges.     │
//    ├────────────────┼───────────┼──────────────────────────────────────────┤
//    │ 49152 – 65535  │ Dynamic/  │ Temporary ports assigned by the OS       │
//    │                │ Ephemeral │ for client-side connections              │
//    └────────────────┴───────────┴──────────────────────────────────────────┘
//
//  COMMON WELL-KNOWN PORTS:
//    ┌───────┬─────────────────────────────────────────────────────────────┐
//    │ Port  │ Service                                                     │
//    ├───────┼─────────────────────────────────────────────────────────────┤
//    │ 20/21 │ FTP (File Transfer Protocol) — file uploads/downloads      │
//    │ 22    │ SSH (Secure Shell) — remote server access (encrypted)      │
//    │ 25    │ SMTP — sending emails                                      │
//    │ 53    │ DNS — domain name resolution (google.com → 142.250.x.x)   │
//    │ 80    │ HTTP — unencrypted web traffic                             │
//    │ 443   │ HTTPS — encrypted web traffic (SSL/TLS)                    │
//    │ 3000  │ Common dev port (Express, React default)                   │
//    │ 3306  │ MySQL database                                             │
//    │ 5432  │ PostgreSQL database                                        │
//    │ 5173  │ Vite dev server (React/Vue with Vite)                      │
//    │ 6379  │ Redis (in-memory cache/database)                           │
//    │ 8080  │ Alternative HTTP / dev servers                             │
//    │ 27017 │ MongoDB database                                           │
//    └───────┴─────────────────────────────────────────────────────────────┘
//
//  WHY PORT 3000?
//    - It's in the "registered" range (no admin needed)
//    - Not used by any major service
//    - Express and many Node.js tutorials default to it
//    - Easy to remember
//    - Convention, not a rule — you can use any available port!


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 15: LOCALHOST & IP ADDRESSES
// ════════════════════════════════════════════════════════════════════════════════
//
//  LOCALHOST = "This computer."
//
//  When you type http://localhost:3000:
//    - You're NOT going to the internet
//    - You're telling the browser: "Connect to a server running on THIS machine"
//    - localhost maps to IP address 127.0.0.1 (called the "loopback" address)
//
//  IP ADDRESSES:
//    Every device on a network has an IP address (like a phone number).
//
//    IPv4: 192.168.1.100 (four numbers, 0-255 each, ~4.3 billion addresses)
//    IPv6: 2001:0db8:85a3::8a2e:0370:7334 (longer, ~340 undecillion addresses)
//
//    Special addresses:
//      127.0.0.1  = localhost (always refers to your own machine)
//      0.0.0.0    = "Listen on ALL network interfaces"
//                   (allows access from other devices on the network)
//      192.168.x.x = Private/local network (your home WiFi)
//      10.x.x.x    = Private network (corporate/office)
//
//  DNS (Domain Name System) — The internet's "phonebook":
//    Humans type: google.com
//    DNS translates it to: 142.250.185.14
//    The browser connects to that IP address
//
//    Without DNS, you'd have to memorize IP addresses for every website!


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 16: WEB SERVERS
// ════════════════════════════════════════════════════════════════════════════════
//
//  A WEB SERVER is software that listens for HTTP requests and sends responses.
//
//  TWO meanings:
//    1. HARDWARE: A physical computer in a datacenter that's always on
//    2. SOFTWARE: A program (like Express, Nginx, Apache) that handles requests
//
//  COMMON WEB SERVERS:
//    ┌───────────┬──────────────────────────────────────────────────────────┐
//    │ Server    │ Description                                             │
//    ├───────────┼──────────────────────────────────────────────────────────┤
//    │ Express   │ Node.js framework (what we're using!) — app server      │
//    │ Nginx     │ High-performance reverse proxy & static file server     │
//    │ Apache    │ Oldest, most widely used web server (powers ~25% of web)│
//    │ Caddy     │ Modern server with automatic HTTPS                      │
//    │ Kestrel   │ ASP.NET Core web server                                 │
//    │ Tomcat    │ Java servlet container                                  │
//    └───────────┴──────────────────────────────────────────────────────────┘
//
//  APPLICATION SERVER vs REVERSE PROXY:
//
//    Application Server (Express):
//      - Runs your code (routes, logic, database queries)
//      - Generates dynamic responses
//      - Usually not exposed directly to the internet in production
//
//    Reverse Proxy (Nginx):
//      - Sits IN FRONT of your app server
//      - Handles: SSL, load balancing, caching, serving static files
//      - Protects your app from direct internet exposure
//
//    Production setup:
//      Internet → Nginx (port 80/443) → Express (port 3000)


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 17: REST APIs & API DESIGN
// ════════════════════════════════════════════════════════════════════════════════
//
//  REST = REpresentational State Transfer
//
//  It's a set of GUIDELINES (not strict rules) for designing web APIs.
//  An API that follows REST principles is called a "RESTful API."
//
//  THE 6 PRINCIPLES OF REST:
//
//    1. CLIENT-SERVER SEPARATION
//       Frontend and backend are independent. Either can change without
//       breaking the other (as long as the API contract stays the same).
//
//    2. STATELESS
//       The server doesn't remember anything between requests.
//       Each request must contain ALL the info the server needs.
//       (That's why we send auth tokens with EVERY request.)
//
//    3. UNIFORM INTERFACE
//       Consistent URL patterns and HTTP methods:
//         GET    /api/users     → Get all users
//         GET    /api/users/42  → Get user #42
//         POST   /api/users     → Create a user
//         PUT    /api/users/42  → Update user #42
//         DELETE /api/users/42  → Delete user #42
//
//    4. RESOURCE-BASED
//       Everything is a "resource" identified by a URL:
//         /api/users        = collection of users
//         /api/users/42     = single user #42
//         /api/users/42/posts = posts belonging to user #42
//
//    5. CACHEABLE
//       Responses should say whether they can be cached.
//       Caching reduces load and speeds up responses.
//
//    6. LAYERED SYSTEM
//       Client doesn't need to know if it's talking to the real server
//       or a proxy, load balancer, cache layer, etc.
//
//  API NAMING BEST PRACTICES:
//    ✓ Use NOUNS (not verbs): /api/users NOT /api/getUsers
//    ✓ Use PLURAL names: /api/users NOT /api/user
//    ✓ Use lowercase: /api/user-profiles NOT /api/UserProfiles
//    ✓ Use hyphens: /api/user-profiles NOT /api/user_profiles
//    ✓ Nest for relationships: /api/users/42/posts
//    ✗ Avoid: /api/getAllUsers, /api/deleteUser, /api/User_Data
//
//  ALTERNATIVES TO REST:
//    - GraphQL: Client chooses exactly what data it wants (by Facebook)
//    - gRPC: Fast binary protocol (by Google, used for microservices)
//    - WebSocket: Real-time two-way communication (chat, live updates)
//    - tRPC: Type-safe API calls (popular in TypeScript full-stack apps)


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 18: HTTP STATUS CODES
// ════════════════════════════════════════════════════════════════════════════════
//
//  Status codes tell the client what happened with their request.
//  They are 3-digit numbers grouped by CATEGORY:
//
//  ┌───────────┬──────────────────────────────────────────────────────────┐
//  │ Range     │ Category                                                │
//  ├───────────┼──────────────────────────────────────────────────────────┤
//  │ 1xx       │ INFORMATIONAL — Request received, processing            │
//  │ 2xx       │ SUCCESS — Request worked!                                │
//  │ 3xx       │ REDIRECTION — Go somewhere else                         │
//  │ 4xx       │ CLIENT ERROR — You (the client) did something wrong     │
//  │ 5xx       │ SERVER ERROR — The server broke                         │
//  └───────────┴──────────────────────────────────────────────────────────┘
//
//  MOST IMPORTANT STATUS CODES YOU'LL USE:
//
//    200 OK              → Success! Here's the data you asked for
//    201 Created         → Success! A new resource was created
//    204 No Content      → Success, but nothing to send back (often for DELETE)
//
//    301 Moved Permanently → This URL has permanently moved to a new location
//    302 Found/Redirect   → Temporarily go to this other URL
//    304 Not Modified     → Use your cached version (nothing changed)
//
//    400 Bad Request      → The request was malformed (invalid JSON, missing fields)
//    401 Unauthorized     → You need to log in first (no/invalid auth token)
//    403 Forbidden        → You're logged in but don't have permission
//    404 Not Found        → The resource doesn't exist
//    405 Method Not Allowed → This URL exists but doesn't support that method
//    409 Conflict         → Request conflicts with current state (duplicate email)
//    422 Unprocessable    → Data format is right but values are wrong
//    429 Too Many Requests → Rate limit exceeded (slow down!)
//
//    500 Internal Server Error → Something crashed on the server (bug!)
//    502 Bad Gateway      → The proxy/load balancer can't reach the server
//    503 Service Unavailable → Server is overloaded or down for maintenance
//    504 Gateway Timeout  → The server took too long to respond
//
//  USAGE IN EXPRESS:
//    res.status(200).json({ users: [...] });      // OK
//    res.status(201).json({ message: 'Created' }); // Created
//    res.status(404).json({ error: 'Not found' }); // Not Found
//    res.status(500).json({ error: 'Server error' }); // Internal Error


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 19: JSON — THE LANGUAGE OF APIs
// ════════════════════════════════════════════════════════════════════════════════
//
//  JSON = JavaScript Object Notation
//
//  It's a TEXT FORMAT for storing and exchanging data.
//  It's the most common format for sending data between
//  client and server in modern web development.
//
//  JSON LOOKS LIKE THIS:
//    {
//      "name": "John Doe",
//      "age": 25,
//      "email": "john@example.com",
//      "isAdmin": false,
//      "hobbies": ["coding", "gaming", "reading"],
//      "address": {
//        "city": "New York",
//        "zip": "10001"
//      }
//    }
//
//  JSON RULES:
//    ✓ Keys MUST be in double quotes: "name" (not name or 'name')
//    ✓ Values can be: string, number, boolean, null, array, object
//    ✗ NO trailing commas: { "a": 1, }   ← INVALID
//    ✗ NO comments: // this  ← INVALID
//    ✗ NO functions: { "fn": function() {} }  ← INVALID
//    ✗ NO undefined: { "a": undefined }  ← INVALID (use null)
//    ✗ NO single quotes: { 'name': 'John' }  ← INVALID
//
//  CONVERTING BETWEEN JSON AND JAVASCRIPT:
//
//    JavaScript Object → JSON String:
//      const jsonString = JSON.stringify({ name: 'John' });
//      // '{"name":"John"}'
//
//    JSON String → JavaScript Object:
//      const obj = JSON.parse('{"name":"John"}');
//      // { name: 'John' }
//
//  WHY JSON?
//    - Human-readable (easy to debug)
//    - Language-independent (Python, Java, Go, etc. all understand JSON)
//    - Lightweight (less data than XML)
//    - Native to JavaScript (easy to work with in Node.js)
//
//  EXPRESS AND JSON:
//    app.use(express.json()); // MUST add this to parse JSON request bodies!
//
//    // Sending JSON response:
//    res.json({ message: 'Hello', status: 'success' });
//
//    // Reading JSON from request:
//    app.post('/api/users', (req, res) => {
//      const { name, email } = req.body; // Destructured from JSON body
//    });


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 20: ERROR HANDLING
// ════════════════════════════════════════════════════════════════════════════════
//
//  Things WILL go wrong. The database might be down. The user might send
//  bad data. A file might not exist. Good error handling is what separates
//  a professional backend from a fragile one.
//
//  TYPES OF ERRORS:
//
//    1. OPERATIONAL ERRORS (expected, can be handled):
//       - User sends invalid data (missing email, wrong format)
//       - Database connection lost
//       - API rate limit exceeded
//       - File not found
//       → Handle gracefully: return a clear error message
//
//    2. PROGRAMMING ERRORS (bugs in your code):
//       - Accessing a property of undefined
//       - Forgetting to await an async function
//       - Infinite loops
//       → Fix the bug! These shouldn't happen in production.
//
//  TRY-CATCH — Catching errors in async code:
//    app.get('/api/users', async (req, res) => {
//      try {
//        const users = await User.find();  // might fail
//        res.json(users);
//      } catch (err) {
//        console.error(err);
//        res.status(500).json({ error: 'Failed to fetch users' });
//      }
//    });
//
//  GLOBAL ERROR HANDLER in Express (catches ALL unhandled errors):
//    // Must have 4 parameters — Express identifies it as error middleware
//    app.use((err, req, res, next) => {
//      const statusCode = err.statusCode || 500;
//      const message = err.message || 'Internal Server Error';
//      res.status(statusCode).json({
//        status: 'error',
//        message: message,
//        // Only show stack trace in development (not production!)
//        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
//      });
//    });
//
//  UNHANDLED REJECTIONS (promises that fail without a .catch):
//    process.on('unhandledRejection', (err) => {
//      console.log('UNHANDLED REJECTION! Shutting down...');
//      console.log(err.name, err.message);
//      server.close(() => process.exit(1));
//    });
//
//  UNCAUGHT EXCEPTIONS (bugs like referencing an undefined variable):
//    process.on('uncaughtException', (err) => {
//      console.log('UNCAUGHT EXCEPTION! Shutting down...');
//      console.log(err.name, err.message);
//      process.exit(1);
//    });


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 21: ENVIRONMENT VARIABLES & SECURITY
// ════════════════════════════════════════════════════════════════════════════════
//
//  ENVIRONMENT VARIABLES = configuration values stored OUTSIDE your code.
//
//  WHY? Because you NEVER hardcode sensitive data like:
//    ✗ Database passwords
//    ✗ API keys
//    ✗ JWT secrets
//    ✗ AWS credentials
//
//  If you push these to GitHub, hackers WILL find them (bots scan for this).
//
//  HOW TO USE:
//    1. Install dotenv: npm install dotenv
//    2. Create a .env file (add to .gitignore!):
//         PORT=3000
//         DATABASE_URL=mongodb://localhost:27017/myapp
//         JWT_SECRET=my-super-secret-key-123
//         API_KEY=abc123def456
//
//    3. Load it at the top of your entry file:
//         require('dotenv').config();
//
//    4. Access variables via process.env:
//         const port = process.env.PORT || 3000;
//         const dbUrl = process.env.DATABASE_URL;
//
//  SECURITY BEST PRACTICES:
//    - NEVER commit .env to Git (add ".env" to .gitignore)
//    - Use HTTPS in production (encrypt data in transit)
//    - Hash passwords with bcrypt (never store plain text passwords!)
//    - Validate and sanitize ALL user input (prevent injection attacks)
//    - Use Helmet middleware (sets security-related HTTP headers)
//    - Rate limit your API (prevent brute force attacks)
//    - Use parameterized queries (prevent SQL injection)
//    - Set secure cookie flags (httpOnly, secure, sameSite)
//    - Keep dependencies updated (npm audit fix)
//    - Use CORS properly (don't allow all origins in production)


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 22: CORS (Cross-Origin Resource Sharing)
// ════════════════════════════════════════════════════════════════════════════════
//
//  CORS is a SECURITY FEATURE built into browsers.
//
//  THE PROBLEM:
//    Your frontend runs on http://localhost:5173 (Vite dev server)
//    Your backend runs on http://localhost:3000 (Express)
//    These are DIFFERENT ORIGINS (different ports = different origin).
//    Browsers BLOCK requests between different origins by default!
//
//  WHAT IS AN "ORIGIN"?
//    Origin = Protocol + Domain + Port
//    http://localhost:3000  ← origin
//    http://localhost:5173  ← DIFFERENT origin (different port)
//    http://example.com     ← DIFFERENT origin (different domain)
//    https://example.com    ← DIFFERENT origin (different protocol!)
//
//  THE FIX:
//    npm install cors
//
//    const cors = require('cors');
//
//    // Allow ALL origins (fine for development, BAD for production):
//    app.use(cors());
//
//    // Allow only specific origins (GOOD for production):
//    app.use(cors({
//      origin: 'https://myfrontend.com',
//      methods: ['GET', 'POST', 'PUT', 'DELETE'],
//      credentials: true  // allow cookies across origins
//    }));
//
//  WHY DOES CORS EXIST?
//    Without it, any malicious website could make requests to your bank's
//    API using your logged-in cookies. CORS prevents this by making the
//    browser ask the server "Hey, is this frontend allowed to talk to you?"


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 23: DATABASES — SQL vs NoSQL
// ════════════════════════════════════════════════════════════════════════════════
//
//  A Database = organized storage for your application's data.
//
//  TWO MAIN CATEGORIES:
//
//  ┌──────────────────────────┬──────────────────────────────────────────────┐
//  │ SQL (Relational)          │ NoSQL (Non-Relational)                      │
//  ├──────────────────────────┼──────────────────────────────────────────────┤
//  │ Data in TABLES with rows  │ Data in DOCUMENTS, key-value,              │
//  │ and columns (like Excel)  │ graphs, or wide-columns                    │
//  ├──────────────────────────┼──────────────────────────────────────────────┤
//  │ Strict SCHEMA (define    │ FLEXIBLE schema (fields can vary            │
//  │ structure before adding  │ between documents)                          │
//  │ data)                    │                                              │
//  ├──────────────────────────┼──────────────────────────────────────────────┤
//  │ Relationships via        │ Can embed related data in one               │
//  │ FOREIGN KEYS & JOINs     │ document (denormalization)                  │
//  ├──────────────────────────┼──────────────────────────────────────────────┤
//  │ Examples:                │ Examples:                                    │
//  │ PostgreSQL, MySQL,       │ MongoDB (documents), Redis (key-value),     │
//  │ SQLite, SQL Server       │ Cassandra (wide-column), Neo4j (graph)     │
//  ├──────────────────────────┼──────────────────────────────────────────────┤
//  │ Best for: Structured     │ Best for: Flexible data, rapid              │
//  │ data, complex queries,   │ development, large scale, real-time         │
//  │ transactions (banking)   │ data (social media, IoT, gaming)           │
//  ├──────────────────────────┼──────────────────────────────────────────────┤
//  │ Node.js Tools:           │ Node.js Tools:                              │
//  │ Prisma, Sequelize,       │ Mongoose (MongoDB), ioredis (Redis),       │
//  │ Knex, pg (PostgreSQL)    │ firebase-admin                              │
//  └──────────────────────────┴──────────────────────────────────────────────┘
//
//  ORM (Object-Relational Mapping) / ODM (Object-Document Mapping):
//    Instead of writing raw SQL or Mongo queries, you use JavaScript:
//
//    Raw SQL:  SELECT * FROM users WHERE age > 18
//    Prisma:   await prisma.user.findMany({ where: { age: { gt: 18 } } })
//
//    Raw Mongo: db.users.find({ age: { $gt: 18 } })
//    Mongoose:  await User.find({ age: { $gt: 18 } })


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 24: AUTHENTICATION & AUTHORIZATION
// ════════════════════════════════════════════════════════════════════════════════
//
//  Authentication = "WHO are you?" (proving your identity)
//    → Login with username and password
//    → Login with Google/GitHub (OAuth)
//    → Fingerprint / Face ID
//
//  Authorization = "WHAT are you allowed to do?" (permissions)
//    → Regular user can view posts
//    → Admin user can delete posts
//    → Moderator can edit other people's posts
//
//  COMMON AUTH STRATEGIES:
//
//    1. SESSION-BASED AUTH:
//       - User logs in → server creates a session (stored in memory/DB)
//       - Server sends a session ID cookie to the browser
//       - Browser sends the cookie with every request
//       - Server looks up the session to identify the user
//       - PROS: Easy to invalidate (just delete the session)
//       - CONS: Server stores state (hard to scale horizontally)
//
//    2. TOKEN-BASED AUTH (JWT):
//       - User logs in → server creates a JWT (JSON Web Token)
//       - Token is sent to the client (stored in localStorage or cookie)
//       - Client sends token in Authorization header: "Bearer eyJhb..."
//       - Server VERIFIES the token (no database lookup needed!)
//       - PROS: Stateless, scalable, works across services
//       - CONS: Can't easily revoke (until it expires)
//
//       JWT structure: HEADER.PAYLOAD.SIGNATURE
//         Header:  { "alg": "HS256", "typ": "JWT" }
//         Payload: { "userId": "42", "role": "admin", "exp": 1735689600 }
//         Signature: HMACSHA256(header + payload, SECRET_KEY)
//
//    3. OAuth 2.0 (Social Login):
//       "Login with Google" / "Login with GitHub"
//       - User authenticates with Google, Google sends a token to your server
//       - Your server verifies the token with Google's API
//       - PROS: Users don't need another password
//       - CONS: More complex to implement
//
//  PASSWORD SECURITY:
//    NEVER store passwords as plain text!
//    Always HASH them using bcrypt:
//
//    const bcrypt = require('bcrypt');
//    const hash = await bcrypt.hash('user_password', 12);  // 12 = salt rounds
//    // hash = "$2b$12$LJ3m4ys7..." (irreversible!)
//
//    // To verify:
//    const isMatch = await bcrypt.compare('user_password', hash); // true


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 25: DEPLOYMENT & PRODUCTION
// ════════════════════════════════════════════════════════════════════════════════
//
//  Development = your laptop, localhost:3000
//  Production = a real server that the whole world can access
//
//  POPULAR DEPLOYMENT PLATFORMS:
//    ┌──────────────────┬──────────────────────────────────────────────────┐
//    │ Platform         │ Notes                                            │
//    ├──────────────────┼──────────────────────────────────────────────────┤
//    │ Vercel           │ Best for Next.js / serverless functions          │
//    │ Railway          │ Easy, connects to GitHub, free tier              │
//    │ Render           │ Free tier, auto-deploys from GitHub              │
//    │ Fly.io           │ Docker-based, global edge                       │
//    │ DigitalOcean     │ VPS (Virtual Private Server), more control      │
//    │ AWS (EC2/Lambda) │ Enterprise-grade, complex but powerful           │
//    │ Google Cloud     │ App Engine, Cloud Run, Cloud Functions           │
//    │ Azure            │ Microsoft's cloud platform                       │
//    │ Heroku           │ Pioneer of PaaS, simple but limited free tier   │
//    └──────────────────┴──────────────────────────────────────────────────┘
//
//  PRODUCTION CHECKLIST:
//    □ Use environment variables (not hardcoded secrets)
//    □ Enable HTTPS (SSL/TLS certificate)
//    □ Set up CORS properly (restrict origins)
//    □ Add rate limiting (prevent abuse)
//    □ Use Helmet for security headers
//    □ Set NODE_ENV=production
//    □ Use a process manager (PM2 or systemd) to keep the app running
//    □ Set up logging (Winston, Pino, or Morgan)
//    □ Set up error monitoring (Sentry, Datadog)
//    □ Enable gzip compression
//    □ Use a reverse proxy (Nginx)
//    □ Set up CI/CD (GitHub Actions, GitLab CI)
//    □ Database backups
//    □ Health check endpoint: GET /health → { status: 'ok' }
//
//  PROCESS MANAGER (PM2):
//    PM2 keeps your Node.js app running 24/7, restarts on crash,
//    enables clustering (using all CPU cores).
//
//    npm install -g pm2
//    pm2 start server.js        // Start the app
//    pm2 list                   // See all running apps
//    pm2 logs                   // View logs
//    pm2 restart server         // Restart
//    pm2 start server.js -i max // Cluster mode (1 instance per CPU core)


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 26: HTTP METHODS — COMPLETE ENCYCLOPEDIA WITH EXPRESS EXAMPLES
// ════════════════════════════════════════════════════════════════════════════════
//
//  HTTP methods (also called "HTTP verbs") are the ACTIONS a client can perform
//  on a server resource. Think of resources as NOUNS (users, products, orders)
//  and methods as VERBS (get, create, update, delete).
//
//  There are 9 HTTP methods defined in the HTTP/1.1 spec (RFC 7231),
//  but we primarily use 5 in everyday web development. Let's cover ALL of them.
//
//  ┌─────────────────────────────────────────────────────────────────────────────┐
//  │                        COMPLETE HTTP METHODS TABLE                          │
//  ├──────────┬────────────┬────────┬──────────┬──────────┬──────────────────────┤
//  │ Method   │ CRUD       │ Safe?  │ Idempotent│ Has Body │ Typical Use          │
//  ├──────────┼────────────┼────────┼──────────┼──────────┼──────────────────────┤
//  │ GET      │ Read       │ Yes    │ Yes      │ No       │ Fetch data           │
//  │ POST     │ Create     │ No     │ No       │ Yes      │ Submit/create data   │
//  │ PUT      │ Replace    │ No     │ Yes      │ Yes      │ Full update          │
//  │ PATCH    │ Partial    │ No     │ Maybe    │ Yes      │ Partial update       │
//  │ DELETE   │ Delete     │ No     │ Yes      │ Maybe    │ Remove resource      │
//  │ OPTIONS  │ —          │ Yes    │ Yes      │ No       │ CORS preflight       │
//  │ HEAD     │ —          │ Yes    │ Yes      │ No       │ Check resource       │
//  │ TRACE    │ —          │ Yes    │ Yes      │ No       │ Debug (rarely used)  │
//  │ CONNECT  │ —          │ No     │ No       │ No       │ Tunneling (proxy)    │
//  └──────────┴────────────┴────────┴──────────┴──────────┴──────────────────────┘
//
//  KEY TERMS:
//    "Safe" = Does NOT change data on the server (read-only).
//    "Idempotent" = Calling it 1 time or 100 times produces the SAME result.
//    "Has Body" = Whether the request typically includes a body (payload).
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  1. GET — "Show me the data"                                            ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  PURPOSE: Retrieve (read) data from the server without changing anything.
//
//  CHARACTERISTICS:
//    - Safe (doesn't modify data)
//    - Idempotent (calling it 100 times = same result)
//    - Data is sent via URL (query strings), NOT in the body
//    - Can be cached by browsers and CDNs
//    - Can be bookmarked
//    - Has URL length limit (~2048 characters)
//    - Should NEVER create, update, or delete data
//
//  ANATOMY OF A GET REQUEST:
//    ┌────────────────────────────────────────────────────────────────────────┐
//    │  GET /api/users?page=1&limit=10 HTTP/1.1                             │
//    │  Host: api.example.com                                                │
//    │  Authorization: Bearer eyJhbGciOi...                                  │
//    │  Accept: application/json                                             │
//    │  User-Agent: Mozilla/5.0                                              │
//    │                                                                       │
//    │  (NO BODY — GET requests don't send a body)                           │
//    └────────────────────────────────────────────────────────────────────────┘
//
//  ANATOMY OF THE RESPONSE:
//    ┌────────────────────────────────────────────────────────────────────────┐
//    │  HTTP/1.1 200 OK                                                      │
//    │  Content-Type: application/json                                       │
//    │  X-Total-Count: 150                                                   │
//    │                                                                       │
//    │  {                                                                    │
//    │    "data": [ { "id": 1, "name": "John" }, ... ],                     │
//    │    "page": 1,                                                        │
//    │    "totalPages": 15                                                   │
//    │  }                                                                    │
//    └────────────────────────────────────────────────────────────────────────┘
//
//  EXPRESS EXAMPLES:
//
//    // Example 1: Get ALL users
//    app.get('/api/users', (req, res) => {
//      const users = [
//        { id: 1, name: 'Alice', email: 'alice@mail.com' },
//        { id: 2, name: 'Bob', email: 'bob@mail.com' },
//      ];
//      res.status(200).json({
//        status: 'success',
//        results: users.length,
//        data: { users }
//      });
//    });
//    // curl http://localhost:3000/api/users
//
//    // Example 2: Get a SINGLE user by ID (route parameter)
//    app.get('/api/users/:id', (req, res) => {
//      const userId = parseInt(req.params.id);   // params are strings!
//      const user = users.find(u => u.id === userId);
//
//      if (!user) {
//        return res.status(404).json({
//          status: 'fail',
//          message: `User with ID ${userId} not found`
//        });
//      }
//
//      res.status(200).json({ status: 'success', data: { user } });
//    });
//    // curl http://localhost:3000/api/users/1
//
//    // Example 3: GET with query string (filtering, sorting, pagination)
//    app.get('/api/products', (req, res) => {
//      const { category, minPrice, maxPrice, sort, page, limit } = req.query;
//      // req.query.category = "electronics"
//      // req.query.minPrice = "100"    ← always strings! convert to number
//      // req.query.sort     = "price"
//      // req.query.page     = "1"
//      // req.query.limit    = "10"
//
//      // In a real app, you'd filter the database with these params
//      res.json({ filters: req.query, data: [] });
//    });
//    // curl "http://localhost:3000/api/products?category=electronics&minPrice=100&sort=price"
//
//    // Example 4: GET — nested resource (posts belonging to a user)
//    app.get('/api/users/:userId/posts', (req, res) => {
//      const { userId } = req.params;
//      // Fetch posts where authorId === userId from database
//      res.json({ userId, posts: [] });
//    });
//    // curl http://localhost:3000/api/users/5/posts
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  2. POST — "Create something new"                                       ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  PURPOSE: Send data to the server to CREATE a new resource.
//
//  CHARACTERISTICS:
//    - NOT safe (creates data)
//    - NOT idempotent (posting twice = 2 resources created!)
//    - Data is sent in the REQUEST BODY (not the URL)
//    - Cannot be cached or bookmarked
//    - No size limit on the body (can send large payloads)
//    - Response typically includes the newly created resource + 201 status
//
//  ANATOMY OF A POST REQUEST:
//    ┌────────────────────────────────────────────────────────────────────────┐
//    │  POST /api/users HTTP/1.1                                             │
//    │  Host: api.example.com                                                │
//    │  Content-Type: application/json           ← tells server: "I'm       │
//    │  Authorization: Bearer eyJhbGciOi...         sending JSON data"       │
//    │                                                                       │
//    │  {                                                                    │
//    │    "name": "Jane Doe",                    ← THE REQUEST BODY          │
//    │    "email": "jane@example.com",              (the data we're sending) │
//    │    "password": "securePass123"                                        │
//    │  }                                                                    │
//    └────────────────────────────────────────────────────────────────────────┘
//
//  ANATOMY OF THE RESPONSE:
//    ┌────────────────────────────────────────────────────────────────────────┐
//    │  HTTP/1.1 201 Created                     ← 201 = new resource made  │
//    │  Content-Type: application/json                                       │
//    │  Location: /api/users/3                   ← where the new resource   │
//    │                                              lives                    │
//    │  {                                                                    │
//    │    "status": "success",                                               │
//    │    "data": {                                                          │
//    │      "user": { "id": 3, "name": "Jane Doe", "email": "jane@..." }   │
//    │    }                                                                  │
//    │  }                                                                    │
//    └────────────────────────────────────────────────────────────────────────┘
//
//  EXPRESS EXAMPLES:
//
//    // Example 1: Create a new user
//    app.post('/api/users', (req, res) => {
//      // req.body contains the JSON sent by the client
//      // (only works if express.json() middleware is active!)
//      const { name, email, password } = req.body;
//
//      // Validate input
//      if (!name || !email || !password) {
//        return res.status(400).json({
//          status: 'fail',
//          message: 'Please provide name, email, and password'
//        });
//      }
//
//      // In a real app: hash password, save to database
//      const newUser = { id: Date.now(), name, email };
//
//      res.status(201).json({
//        status: 'success',
//        data: { user: newUser }
//      });
//    });
//    // curl -X POST http://localhost:3000/api/users \
//    //   -H "Content-Type: application/json" \
//    //   -d '{"name":"Jane","email":"jane@mail.com","password":"abc123"}'
//
//    // Example 2: POST — Upload/submit a form (URL-encoded)
//    app.use(express.urlencoded({ extended: true }));  // parse form data
//    app.post('/login', (req, res) => {
//      const { username, password } = req.body;
//      // req.body.username = "john"
//      // req.body.password = "secret"
//      res.json({ message: `Welcome, ${username}!` });
//    });
//    // <form action="/login" method="POST">
//    //   <input name="username"> <input name="password" type="password">
//    // </form>
//
//    // Example 3: POST — Bulk create (create multiple items at once)
//    app.post('/api/products/bulk', (req, res) => {
//      const products = req.body.products;  // expects an array
//      // [{ name: "Laptop", price: 999 }, { name: "Mouse", price: 29 }]
//
//      // In a real app: insertMany into database
//      res.status(201).json({
//        status: 'success',
//        message: `${products.length} products created`,
//        data: { products }
//      });
//    });
//
//    // REAL-WORLD POST USE CASES:
//    //   - User registration (POST /api/auth/signup)
//    //   - Login (POST /api/auth/login) — returns a token
//    //   - Submit a comment (POST /api/posts/42/comments)
//    //   - Place an order (POST /api/orders)
//    //   - Upload a file (POST /api/upload — with multipart/form-data)
//    //   - Send a message (POST /api/messages)
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  3. PUT — "Replace the entire thing"                                    ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  PURPOSE: Replace an ENTIRE resource with new data. Full update.
//
//  CHARACTERISTICS:
//    - NOT safe (modifies data)
//    - IS idempotent (putting the same data 100 times = same result)
//    - Requires the COMPLETE resource in the body
//    - If the resource doesn't exist, PUT can create it (in theory)
//    - Missing fields in the body will be set to null/empty!
//
//  THE KEY DIFFERENCE — PUT vs PATCH:
//    Imagine a user: { id: 1, name: "John", email: "john@mail.com", age: 25 }
//
//    PUT /api/users/1  with body { name: "John Smith", email: "john@new.com" }
//    → Result: { id: 1, name: "John Smith", email: "john@new.com", age: null }
//    ↑ age is GONE because you didn't include it! PUT replaces EVERYTHING.
//
//    PATCH /api/users/1  with body { email: "john@new.com" }
//    → Result: { id: 1, name: "John", email: "john@new.com", age: 25 }
//    ↑ Only email changed. Everything else stays.
//
//  ANATOMY OF A PUT REQUEST:
//    ┌────────────────────────────────────────────────────────────────────────┐
//    │  PUT /api/users/1 HTTP/1.1                                            │
//    │  Content-Type: application/json                                       │
//    │                                                                       │
//    │  {                                                                    │
//    │    "name": "John Smith",          ← ALL fields must be included!     │
//    │    "email": "john@newmail.com",      You're replacing the whole      │
//    │    "age": 26,                        resource.                        │
//    │    "role": "admin"                                                    │
//    │  }                                                                    │
//    └────────────────────────────────────────────────────────────────────────┘
//
//  EXPRESS EXAMPLES:
//
//    // Example 1: Replace a user entirely
//    app.put('/api/users/:id', (req, res) => {
//      const { id } = req.params;
//      const { name, email, age, role } = req.body;
//
//      // Validate: ALL fields must be present for PUT
//      if (!name || !email || !age || !role) {
//        return res.status(400).json({
//          status: 'fail',
//          message: 'PUT requires ALL fields: name, email, age, role'
//        });
//      }
//
//      // In a real app: replace the entire document in database
//      // db.collection('users').replaceOne({ _id: id }, req.body);
//      const updatedUser = { id: parseInt(id), name, email, age, role };
//
//      res.status(200).json({
//        status: 'success',
//        data: { user: updatedUser }
//      });
//    });
//    // curl -X PUT http://localhost:3000/api/users/1 \
//    //   -H "Content-Type: application/json" \
//    //   -d '{"name":"John","email":"john@mail.com","age":26,"role":"admin"}'
//
//    // Example 2: PUT — Replace application settings
//    app.put('/api/settings', (req, res) => {
//      const { theme, language, notifications, timezone } = req.body;
//      // Replace ALL settings at once
//      // In contrast to PATCH where you'd update just one setting
//      const newSettings = { theme, language, notifications, timezone };
//      res.json({ status: 'success', data: { settings: newSettings } });
//    });
//
//    // WHEN TO USE PUT:
//    //   - Updating a user profile form (all fields submitted)
//    //   - Replacing configuration/settings
//    //   - Updating a document that should be completely overwritten
//    //   - When the client has the COMPLETE new version of the resource
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  4. PATCH — "Update only what changed"                                  ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  PURPOSE: Partially update a resource. Only send the fields that changed.
//
//  CHARACTERISTICS:
//    - NOT safe (modifies data)
//    - Idempotency depends on implementation
//    - Only the fields included in the body are updated
//    - Other fields remain UNCHANGED
//    - More bandwidth-efficient than PUT (smaller payload)
//    - Most commonly used update method in modern APIs
//
//  EXPRESS EXAMPLES:
//
   // Example 1: Partially update a user
//    app.patch('/api/users/:id', (req, res) => {
//      const { id } = req.params;
//      const updates = req.body;  // Only the fields that changed
     // e.g., { email: "newemail@mail.com" }
     // or    { name: "New Name", age: 30 }

     // In a real app with Mongoose:
     // const user = await User.findByIdAndUpdate(id, updates, {
     //   new: true,           // return the updated document
     //   runValidators: true   // validate the update
     // });
//
//      res.status(200).json({
//        status: 'success',
//        message: `Updated fields: ${Object.keys(updates).join(', ')}`,
//        data: { user: { id, ...updates } }
//      });
//    });
   // curl -X PATCH http://localhost:3000/api/users/1 \
   //   -H "Content-Type: application/json" \
   //   -d '{"email":"newemail@mail.com"}'

   // Example 2: PATCH — Toggle a boolean (like/unlike, active/inactive)
//    app.patch('/api/posts/:id/like', (req, res) => {
//      const { id } = req.params;
//      // Toggle: if liked → unlike, if not liked → like
//      // In real app: update the likes array in database
//      res.json({ status: 'success', message: `Post ${id} like toggled` });
//    });
//
//    // Example 3: PATCH — Change password (only updating one field)
//    app.patch('/api/users/change-password', (req, res) => {
//      const { currentPassword, newPassword, confirmPassword } = req.body;
//
//      if (newPassword !== confirmPassword) {
//        return res.status(400).json({
//          status: 'fail',
//          message: 'New password and confirm password do not match'
//        });
//      }
//
//      // In real app: verify current password, hash new password, save
//      res.json({ status: 'success', message: 'Password updated' });
//    });
//
//    // WHEN TO USE PATCH vs PUT:
//    //   PATCH: User changes just their email → send only { email: "..." }
//    //   PUT:   User fills out entire profile form → send ALL fields
//    //   Rule of thumb: If you're updating 1-2 fields, use PATCH.
//    //                  If you're replacing the whole thing, use PUT.
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  5. DELETE — "Remove it"                                                ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  PURPOSE: Remove a resource from the server.
//
//  CHARACTERISTICS:
//    - NOT safe (removes data)
//    - IS idempotent (deleting something already deleted = still gone)
//    - Usually doesn't have a request body (resource identified by URL)
//    - Response typically has no body (204 No Content) or a confirmation
//
//  TWO TYPES OF DELETE:
//
//    HARD DELETE — Actually removes data from the database permanently
//      → The record is GONE. Cannot be recovered.
//      → Use for: temporary data, test records, user-requested permanent deletion
//
//    SOFT DELETE — Marks the record as "deleted" but keeps it in the database
//      → Adds a field like { deleted: true, deletedAt: "2026-01-15" }
//      → Queries filter out deleted records: find({ deleted: false })
//      → Use for: important business data, audit trails, GDPR compliance
//      → Users see it as "deleted" but admins can recover it
//
//  ANATOMY OF A DELETE REQUEST:
//    ┌────────────────────────────────────────────────────────────────────────┐
//    │  DELETE /api/users/42 HTTP/1.1                                        │
//    │  Host: api.example.com                                                │
//    │  Authorization: Bearer eyJhbGciOi...                                  │
//    │                                                                       │
//    │  (Usually NO BODY)                                                    │
//    └────────────────────────────────────────────────────────────────────────┘
//
//  EXPRESS EXAMPLES:
//
//    // Example 1: Hard delete a user
//    app.delete('/api/users/:id', (req, res) => {
//      const { id } = req.params;
//
//      // In a real app with Mongoose:
//      // const user = await User.findByIdAndDelete(id);
//      // if (!user) return res.status(404).json({ error: 'User not found' });
//
//      // 204 = "Success, but nothing to send back"
//      res.status(204).json(null);  // .json(null) sends empty body
//    });
//    // curl -X DELETE http://localhost:3000/api/users/42
//
//    // Example 2: Soft delete (mark as deleted, don't actually remove)
//    app.delete('/api/posts/:id', (req, res) => {
//      const { id } = req.params;
//
//      // In a real app:
//      // await Post.findByIdAndUpdate(id, {
//      //   deleted: true,
//      //   deletedAt: new Date()
//      // });
//
//      res.status(200).json({
//        status: 'success',
//        message: `Post ${id} has been deleted (soft delete)`
//      });
//    });
//
//    // Example 3: DELETE — Bulk delete (delete multiple items)
//    app.delete('/api/notifications', (req, res) => {
//      // Delete all read notifications for the logged-in user
//      // In real app: await Notification.deleteMany({
//      //   userId: req.user.id,
//      //   read: true
//      // });
//      res.json({ status: 'success', message: 'All read notifications cleared' });
//    });
//
//    // REAL-WORLD DELETE EXAMPLES:
//    //   DELETE /api/users/42          → Delete user account
//    //   DELETE /api/posts/15          → Delete a blog post
//    //   DELETE /api/cart/items/7      → Remove item from cart
//    //   DELETE /api/sessions          → Logout (delete the session)
//    //   DELETE /api/files/photo.jpg   → Delete an uploaded file
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  6. OPTIONS — "What can I do here?"                                     ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  PURPOSE: Ask the server what HTTP methods are allowed for a given URL.
//           Primarily used for CORS PREFLIGHT REQUESTS.
//
//  CHARACTERISTICS:
//    - Safe and Idempotent
//    - No request body
//    - Response includes an "Allow" header listing permitted methods
//    - Browsers send OPTIONS automatically before cross-origin requests
//      (this is the "preflight" check)
//
//  WHAT IS A PREFLIGHT REQUEST?
//    When your React app (http://localhost:5173) makes an API call to
//    your Express server (http://localhost:3000), the browser FIRST
//    sends a secret OPTIONS request to check: "Is this allowed?"
//
//    Step 1: Browser sends OPTIONS /api/users
//            "Hey server, can localhost:5173 do a POST to /api/users?"
//    Step 2: Server responds with headers:
//            Access-Control-Allow-Origin: http://localhost:5173
//            Access-Control-Allow-Methods: GET, POST, PUT, DELETE
//            "Yes, that origin is allowed to use those methods."
//    Step 3: Browser then sends the ACTUAL POST /api/users request
//
//    If the server says NO (no CORS headers), the browser BLOCKS the request.
//    The server never even sees the actual request.
//
//  EXPRESS EXAMPLE:
//
//    // Manually handling OPTIONS (usually the cors() middleware does this)
//    app.options('/api/users', (req, res) => {
//      res.set('Allow', 'GET, POST, PUT, DELETE, PATCH');
//      res.set('Access-Control-Allow-Origin', '*');
//      res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
//      res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//      res.status(204).end();  // 204 = No Content
//    });
//
//    // Or handle OPTIONS for ALL routes at once:
//    app.options('*', (req, res) => {
//      res.set('Allow', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//      res.status(204).end();
//    });
//
//    // In practice, just use the cors() middleware — it handles OPTIONS
//    // automatically:
//    // const cors = require('cors');
//    // app.use(cors());  // handles all preflight OPTIONS requests
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  7. HEAD — "Same as GET, but just the headers"                          ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  PURPOSE: Exactly like GET, but the server ONLY returns headers, no body.
//           Used to check if a resource exists without downloading it.
//
//  CHARACTERISTICS:
//    - Safe and Idempotent
//    - Response has the same headers as a GET request, but NO body
//    - Useful for checking if a file exists, or its size/type, without downloading
//
//  REAL-WORLD USE CASES:
//    - Check if a large file exists before downloading it
//    - Get the file size (Content-Length header) without downloading
//    - Check if a website is up (health check without data transfer)
//    - Validate cache freshness (Last-Modified / ETag headers)
//
//  EXPRESS EXAMPLE:
//
//    // Express automatically handles HEAD for any GET route!
//    // If you define app.get('/api/users', handler), Express will
//    // also respond to HEAD /api/users with just the headers.
//
//    // But you can define a specific HEAD handler:
//    app.head('/api/files/:filename', (req, res) => {
//      const { filename } = req.params;
//      // In real app: check if file exists, get its stats
//      // const stats = fs.statSync(`/uploads/${filename}`);
//
//      res.set('Content-Type', 'application/pdf');
//      res.set('Content-Length', '2048576');  // file size in bytes (2MB)
//      res.set('Last-Modified', 'Wed, 15 Jan 2026 10:30:00 GMT');
//      res.status(200).end();  // NO body sent!
//    });
//    // curl -I http://localhost:3000/api/files/report.pdf  (-I = HEAD request)
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  8. TRACE & CONNECT (rarely used, but good to know)                     ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  TRACE:
//    - Echoes back the request so you can see what the server received
//    - Used for debugging network issues (see if proxies modified the request)
//    - DISABLED on most servers for security (can leak sensitive headers)
//    - Express does NOT support TRACE by default
//
//  CONNECT:
//    - Establishes a tunnel to the server (used by HTTP proxies)
//    - Used for HTTPS tunneling through an HTTP proxy
//    - You will almost NEVER use this directly in web development
//    - Not supported by Express
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  COMPLETE CRUD API EXAMPLE (putting it all together)                    ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  Here's how a full REST API for "books" would look with ALL methods:
//
//    // ── In-memory data (in real app, this would be a database) ──
//    let books = [
//      { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
//      { id: 2, title: 'Dune', author: 'Frank Herbert', year: 1965 },
//    ];
//    let nextId = 3;
//
//    // ── GET all books ──
//    app.get('/api/books', (req, res) => {
//      res.json({ status: 'success', results: books.length, data: { books } });
//    });
//
//    // ── GET a single book ──
//    app.get('/api/books/:id', (req, res) => {
//      const book = books.find(b => b.id === parseInt(req.params.id));
//      if (!book) return res.status(404).json({ error: 'Book not found' });
//      res.json({ status: 'success', data: { book } });
//    });
//
//    // ── POST create a new book ──
//    app.post('/api/books', (req, res) => {
//      const { title, author, year } = req.body;
//      if (!title || !author) {
//        return res.status(400).json({ error: 'Title and author required' });
//      }
//      const newBook = { id: nextId++, title, author, year: year || null };
//      books.push(newBook);
//      res.status(201).json({ status: 'success', data: { book: newBook } });
//    });
//
//    // ── PUT replace a book entirely ──
//    app.put('/api/books/:id', (req, res) => {
//      const index = books.findIndex(b => b.id === parseInt(req.params.id));
//      if (index === -1) return res.status(404).json({ error: 'Not found' });
//      books[index] = { id: parseInt(req.params.id), ...req.body };
//      res.json({ status: 'success', data: { book: books[index] } });
//    });
//
//    // ── PATCH update specific fields ──
//    app.patch('/api/books/:id', (req, res) => {
//      const book = books.find(b => b.id === parseInt(req.params.id));
//      if (!book) return res.status(404).json({ error: 'Not found' });
//      Object.assign(book, req.body);  // merge new fields into existing book
//      res.json({ status: 'success', data: { book } });
//    });
//
//    // ── DELETE a book ──
//    app.delete('/api/books/:id', (req, res) => {
//      const index = books.findIndex(b => b.id === parseInt(req.params.id));
//      if (index === -1) return res.status(404).json({ error: 'Not found' });
//      books.splice(index, 1);
//      res.status(204).json(null);
//    });
//
//  TESTING WITH CURL (command line):
//    curl http://localhost:3000/api/books                          # GET all
//    curl http://localhost:3000/api/books/1                        # GET one
//    curl -X POST http://localhost:3000/api/books \
//      -H "Content-Type: application/json" \
//      -d '{"title":"Neuromancer","author":"William Gibson"}'      # POST
//    curl -X PUT http://localhost:3000/api/books/1 \
//      -H "Content-Type: application/json" \
//      -d '{"title":"1984","author":"Orwell","year":1949}'         # PUT
//    curl -X PATCH http://localhost:3000/api/books/1 \
//      -H "Content-Type: application/json" \
//      -d '{"year":1950}'                                          # PATCH
//    curl -X DELETE http://localhost:3000/api/books/1              # DELETE


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 27: MIDDLEWARE — COMPLETE DEEP DIVE WITH REAL-WORLD EXAMPLES
// ════════════════════════════════════════════════════════════════════════════════
//
//  Middleware is the MOST IMPORTANT CONCEPT in Express.js.
//  Express is literally just a routing + middleware framework.
//  Understanding middleware deeply = understanding Express deeply.
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  WHAT IS MIDDLEWARE? (Simple Explanation)                                ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  Middleware = A function that has access to the request (req), response (res),
//  and the next function (next) in the application's request-response cycle.
//
//  ANALOGY — The Assembly Line:
//    Imagine a car factory assembly line:
//      Station 1: Install engine (parse the body)
//      Station 2: Paint the car (add CORS headers)
//      Station 3: Quality check (validate authentication)
//      Station 4: Add license plate (log the request)
//      Station 5: Ship to customer (send the response)
//
//    Each station does ONE job, then passes the car to the NEXT station.
//    If any station finds a problem (bad engine), it STOPS the line
//    and sends the car back (error response).
//
//    In Express, each "station" is a middleware function.
//    The "car" is the request object (req).
//    "Passing to next station" = calling next()
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  ANATOMY OF A MIDDLEWARE FUNCTION                                       ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//    function middlewareName(req, res, next) {
//    //                      │    │    │
//    //                      │    │    └── next: A function that, when called,
//    //                      │    │        passes control to the NEXT middleware
//    //                      │    │        in the stack. If you DON'T call it,
//    //                      │    │        the request hangs forever.
//    //                      │    │
//    //                      │    └── res: The response object. You can modify
//    //                      │        it (add headers, set status) or END the
//    //                      │        cycle by sending a response.
//    //                      │
//    //                      └── req: The request object. You can READ data
//    //                          from it or ADD properties to it (req.user,
//    //                          req.startTime, etc.)
//
//      // Do something here:
//      //   - Read/modify the request
//      //   - Read/modify the response
//      //   - End the request-response cycle (res.send / res.json)
//      //   - Call next() to pass to the next middleware
//
//      next();
//    }
//
//  THE THREE THINGS A MIDDLEWARE CAN DO:
//    1. MODIFY req or res (add data, set headers)
//    2. END the cycle (send a response — no next() needed)
//    3. CALL next() to pass to the next middleware
//
//  ⚠ WARNING: If a middleware doesn't send a response AND doesn't call next(),
//    the request gets STUCK. The client waits forever until timeout.
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  THE MIDDLEWARE CHAIN — HOW REQUESTS FLOW THROUGH EXPRESS               ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  When a request arrives, Express passes it through a CHAIN of middleware
//  functions, one by one, in the ORDER they were defined:
//
//    CLIENT REQUEST
//         │
//         ▼
//    ┌─────────────────────┐
//    │ 1. express.json()   │  → Parses JSON body → sets req.body
//    │    calls next()     │
//    └────────┬────────────┘
//             ▼
//    ┌─────────────────────┐
//    │ 2. cors()           │  → Sets CORS headers on res
//    │    calls next()     │
//    └────────┬────────────┘
//             ▼
//    ┌─────────────────────┐
//    │ 3. morgan('dev')    │  → Logs: "POST /api/users 201 - 5ms"
//    │    calls next()     │
//    └────────┬────────────┘
//             ▼
//    ┌─────────────────────┐
//    │ 4. authMiddleware   │  → Checks JWT token → sets req.user
//    │    calls next()     │     OR sends 401 Unauthorized (no next!)
//    └────────┬────────────┘
//             ▼
//    ┌─────────────────────┐
//    │ 5. Route Handler    │  → app.get('/api/users', handler)
//    │    sends response   │     res.json(users)
//    └────────┬────────────┘
//             ▼
//       RESPONSE SENT
//       TO CLIENT
//
//    If any middleware sends a response (res.json), the chain STOPS.
//    If middleware calls next(error), it SKIPS to the error handler.
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  5 TYPES OF MIDDLEWARE IN EXPRESS                                       ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  ── TYPE 1: APPLICATION-LEVEL MIDDLEWARE ──
//     Bound to the app object using app.use() or app.METHOD()
//     Runs for EVERY request (or specific paths).
//
//     // Runs for ALL requests to ALL routes:
//     app.use((req, res, next) => {
//       console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//       next();
//     });
//
//     // Runs only for requests to /api/admin/*:
//     app.use('/api/admin', (req, res, next) => {
//       // Check admin authentication
//       if (!req.headers.authorization) {
//         return res.status(401).json({ error: 'Admin access required' });
//       }
//       next();
//     });
//
//
//  ── TYPE 2: ROUTER-LEVEL MIDDLEWARE ──
//     Same as application-level but bound to express.Router()
//     Used to modularize middleware for specific route groups.
//
//     const router = express.Router();
//
//     // This middleware runs only for routes in this router
//     router.use((req, res, next) => {
//       console.log('Router-level middleware');
//       next();
//     });
//
//     router.get('/profile', (req, res) => {
//       res.json({ user: req.user });
//     });
//
//     app.use('/api/users', router);
//     // The middleware runs for: GET /api/users/profile
//     // But NOT for: GET /api/products
//
//
//  ── TYPE 3: ERROR-HANDLING MIDDLEWARE ──
//     Has FOUR parameters: (err, req, res, next)
//     Express identifies error middleware by the 4 params — this is required!
//     MUST be defined AFTER all other middleware and routes.
//
//     // Global error handler
//     app.use((err, req, res, next) => {
//       console.error('ERROR:', err.message);
//       console.error('STACK:', err.stack);
//
//       // Determine status code
//       const statusCode = err.statusCode || 500;
//
//       res.status(statusCode).json({
//         status: 'error',
//         message: err.message || 'Internal Server Error',
//         // Show stack trace only in development
//         ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
//       });
//     });
//
//     // How to TRIGGER the error handler from a route:
//     app.get('/api/users/:id', (req, res, next) => {
//       const user = null; // pretend database returned nothing
//       if (!user) {
//         const error = new Error('User not found');
//         error.statusCode = 404;
//         return next(error);  // next(error) → jumps to error handler!
//       }
//       res.json(user);
//     });
//
//
//  ── TYPE 4: BUILT-IN MIDDLEWARE (Express ships with these) ──
//
//     express.json()
//       - Parses incoming requests with JSON payloads
//       - Reads the raw body, runs JSON.parse(), puts result in req.body
//       - If the body isn't valid JSON, it throws a 400 error
//       - MUST be added before routes that read req.body!
//       app.use(express.json({ limit: '10kb' }));
//       // { limit: '10kb' } = reject bodies larger than 10KB (security)
//
//     express.urlencoded({ extended: true })
//       - Parses URL-encoded data (from HTML forms)
//       - HTML form: <input name="email"> → req.body.email
//       - extended: true uses 'qs' library (supports nested objects)
//       - extended: false uses 'querystring' (flat key-value only)
//       app.use(express.urlencoded({ extended: true }));
//
//     express.static('public')
//       - Serves static files (CSS, JS, images) from a directory
//       - Files in /public are served directly:
//         /public/style.css → accessible at http://localhost:3000/style.css
//         /public/images/logo.png → http://localhost:3000/images/logo.png
//       - Express looks for files in the directory and serves them directly
//         WITHOUT going through your route handlers
//       app.use(express.static('public'));
//       // Or with a URL prefix:
//       app.use('/static', express.static('public'));
//       // /public/style.css → http://localhost:3000/static/style.css
//
//
//  ── TYPE 5: THIRD-PARTY MIDDLEWARE (installed via npm) ──
//     These are community-built middleware packages:
//
//     See the detailed breakdown below for each one.
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  REAL-WORLD MIDDLEWARE EXAMPLES (with full code)                        ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//
//  ── 1. LOGGING MIDDLEWARE (custom) ──
//
//     // Logs every request with method, URL, and response time
//     const requestLogger = (req, res, next) => {
//       const start = Date.now();
//
//       // This runs AFTER the response is sent:
//       res.on('finish', () => {
//         const duration = Date.now() - start;
//         console.log(
//           `[${new Date().toISOString()}] ` +
//           `${req.method} ${req.originalUrl} ` +
//           `${res.statusCode} - ${duration}ms`
//         );
//       });
//
//       next();
//     };
//     app.use(requestLogger);
//     // Output: [2026-02-11T10:30:00.000Z] GET /api/users 200 - 12ms
//
//
//  ── 2. AUTHENTICATION MIDDLEWARE ──
//
//     // Verifies JWT token and attaches user to request
//     const authenticate = (req, res, next) => {
//       // Step 1: Get the token from the Authorization header
//       const authHeader = req.headers.authorization;
//
//       if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({
//           status: 'fail',
//           message: 'No authentication token provided. Please log in.'
//         });
//       }
//
//       // Step 2: Extract the token (remove "Bearer " prefix)
//       const token = authHeader.split(' ')[1];
//
//       try {
//         // Step 3: Verify the token
//         // const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         // Step 4: Attach user data to the request
//         // req.user = decoded;  // { userId: '42', role: 'admin' }
//         next();  // Token valid → proceed to route handler
//       } catch (err) {
//         return res.status(401).json({
//           status: 'fail',
//           message: 'Invalid or expired token. Please log in again.'
//         });
//       }
//     };
//
//     // Use it on specific routes:
//     app.get('/api/profile', authenticate, (req, res) => {
//       res.json({ user: req.user });
//     });
//
//     // Or protect ALL routes under a path:
//     app.use('/api/admin', authenticate);
//
//
//  ── 3. AUTHORIZATION MIDDLEWARE (role-based access) ──
//
//     // Checks if the authenticated user has the required role
//     const authorize = (...allowedRoles) => {
//       // This returns a middleware function (closure pattern)
//       return (req, res, next) => {
//         // req.user was set by the authenticate middleware
//         if (!req.user) {
//           return res.status(401).json({ error: 'Not authenticated' });
//         }
//
//         if (!allowedRoles.includes(req.user.role)) {
//           return res.status(403).json({
//             status: 'fail',
//             message: `Access denied. Required role: ${allowedRoles.join(' or ')}`
//           });
//         }
//
//         next();  // User has the right role → proceed
//       };
//     };
//
//     // Usage:
//     app.delete('/api/users/:id',
//       authenticate,                    // 1st: verify login
//       authorize('admin'),              // 2nd: verify role
//       (req, res) => {                  // 3rd: handle deletion
//         res.json({ message: 'User deleted' });
//       }
//     );
//
//     // Multiple roles:
//     app.put('/api/posts/:id',
//       authenticate,
//       authorize('admin', 'moderator'), // admin OR moderator
//       (req, res) => { /* update post */ }
//     );
//
//
//  ── 4. VALIDATION MIDDLEWARE ──
//
//     // Validates request body before reaching the route handler
//     const validateUser = (req, res, next) => {
//       const { name, email, password } = req.body;
//       const errors = [];
//
//       if (!name || name.trim().length < 2) {
//         errors.push('Name must be at least 2 characters');
//       }
//       if (!email || !email.includes('@')) {
//         errors.push('Valid email is required');
//       }
//       if (!password || password.length < 8) {
//         errors.push('Password must be at least 8 characters');
//       }
//
//       if (errors.length > 0) {
//         return res.status(400).json({
//           status: 'fail',
//           message: 'Validation failed',
//           errors: errors
//         });
//       }
//
//       next();  // All validations passed → proceed
//     };
//
//     app.post('/api/users', validateUser, (req, res) => {
//       // If we reach here, data is guaranteed valid!
//       res.status(201).json({ message: 'User created' });
//     });
//
//
//  ── 5. RATE LIMITING MIDDLEWARE ──
//
//     // Prevents abuse by limiting how many requests a user can make
//     // Using express-rate-limit package: npm install express-rate-limit
//     //
//     // const rateLimit = require('express-rate-limit');
//     //
//     // const apiLimiter = rateLimit({
//     //   windowMs: 15 * 60 * 1000,  // 15 minutes
//     //   max: 100,                   // max 100 requests per window per IP
//     //   message: {
//     //     status: 'fail',
//     //     message: 'Too many requests. Please try again in 15 minutes.'
//     //   },
//     //   standardHeaders: true,      // Send rate limit info in headers
//     //   legacyHeaders: false,       // Disable X-RateLimit-* headers
//     // });
//     //
//     // // Apply to all API routes:
//     // app.use('/api', apiLimiter);
//     //
//     // // Or create stricter limits for auth routes:
//     // const authLimiter = rateLimit({
//     //   windowMs: 60 * 60 * 1000,   // 1 hour
//     //   max: 5,                      // 5 login attempts per hour
//     //   message: 'Too many login attempts. Try again in 1 hour.'
//     // });
//     // app.use('/api/auth/login', authLimiter);
//
//
//  ── 6. CORS MIDDLEWARE (detailed) ──
//
//     // npm install cors
//     // const cors = require('cors');
//     //
//     // // Simple: allow ALL origins (for development only!)
//     // app.use(cors());
//     //
//     // // Production: allow only specific origins
//     // app.use(cors({
//     //   origin: ['https://myapp.com', 'https://admin.myapp.com'],
//     //   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//     //   allowedHeaders: ['Content-Type', 'Authorization'],
//     //   credentials: true,   // allow cookies to be sent cross-origin
//     //   maxAge: 86400,       // cache preflight response for 24 hours
//     // }));
//     //
//     // // Dynamic origin (check against a whitelist):
//     // const whitelist = ['https://myapp.com', 'https://staging.myapp.com'];
//     // app.use(cors({
//     //   origin: function (origin, callback) {
//     //     if (!origin || whitelist.includes(origin)) {
//     //       callback(null, true);
//     //     } else {
//     //       callback(new Error('Not allowed by CORS'));
//     //     }
//     //   }
//     // }));
//
//
//  ── 7. HELMET MIDDLEWARE (security headers) ──
//
//     // npm install helmet
//     // const helmet = require('helmet');
//     // app.use(helmet());
//     //
//     // Helmet sets 15+ HTTP headers for security:
//     //   X-Content-Type-Options: nosniff      → prevents MIME sniffing
//     //   X-Frame-Options: DENY                → prevents clickjacking
//     //   Strict-Transport-Security            → forces HTTPS
//     //   X-XSS-Protection: 0                  → modern approach
//     //   Content-Security-Policy              → controls resource loading
//     //   X-Download-Options: noopen           → prevents IE file execution
//     //   X-Permitted-Cross-Domain-Policies    → prevents Flash/PDF abuse
//     //   Referrer-Policy: no-referrer         → controls referrer header
//     //
//     // Without helmet, your server is vulnerable to many common attacks.
//     // ALWAYS use helmet in production!
//
//
//  ── 8. MORGAN MIDDLEWARE (HTTP request logger) ──
//
//     // npm install morgan
//     // const morgan = require('morgan');
//     //
//     // // Predefined formats:
//     // app.use(morgan('dev'));       // Colored output for development
//     //   // Output: GET /api/users 200 12.345 ms - 248
//     //
//     // app.use(morgan('combined')); // Apache combined log format
//     //   // Output: ::1 - - [11/Feb/2026:10:30:00 +0000]
//     //   //   "GET /api/users HTTP/1.1" 200 248 "-" "Mozilla/5.0"
//     //
//     // app.use(morgan('tiny'));     // Minimal output
//     //   // Output: GET /api/users 200 248 - 12.345 ms
//     //
//     // // Custom format:
//     // app.use(morgan(':method :url :status :response-time ms'));
//     //
//     // // Log to a file (in production):
//     // const fs = require('fs');
//     // const accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' });
//     // app.use(morgan('combined', { stream: accessLogStream }));
//
//
//  ── 9. COMPRESSION MIDDLEWARE ──
//
//     // npm install compression
//     // const compression = require('compression');
//     // app.use(compression());
//     //
//     // Compresses response bodies using gzip or deflate
//     // A 100KB JSON response might compress to 10KB!
//     // Reduces bandwidth and makes your API faster
//     // Auto-detects if the client supports compression (Accept-Encoding)
//
//
//  ── 10. REQUEST TIMING MIDDLEWARE (custom) ──
//
//     const requestTimer = (req, res, next) => {
//       req.startTime = process.hrtime();  // High-resolution timer
//
//       res.on('finish', () => {
//         const [seconds, nanoseconds] = process.hrtime(req.startTime);
//         const durationMs = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);
//
//         // Add timing as a response header
//         // (already sent, but useful for logging)
//         console.log(
//           `${req.method} ${req.originalUrl} → ` +
//           `${res.statusCode} (${durationMs}ms)`
//         );
//       });
//
//       next();
//     };
//     app.use(requestTimer);
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  MIDDLEWARE BEST PRACTICES                                              ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  1. ORDER MATTERS:
//     // ✓ CORRECT ORDER:
//     app.use(express.json());     // 1st: Parse body (so req.body is available)
//     app.use(cors());             // 2nd: Set CORS (before any response)
//     app.use(helmet());           // 3rd: Security headers
//     app.use(morgan('dev'));      // 4th: Logging
//     app.use(rateLimiter);        // 5th: Rate limiting
//     app.use('/api', apiRouter);  // 6th: Routes
//     app.use(errorHandler);       // LAST: Error handling (must be last!)
//
//  2. ALWAYS CALL next() (unless you're sending a response)
//
//  3. PUT ERROR MIDDLEWARE LAST (after all routes)
//
//  4. USE next(error) TO TRIGGER ERROR MIDDLEWARE (don't throw in routes)
//
//  5. KEEP MIDDLEWARE SMALL AND FOCUSED (one job per middleware)
//
//  6. USE app.use() FOR GLOBAL, route-specific for targeted middleware
//
//  7. COMMON MISTAKE — Calling next() AND sending a response:
//     // ✗ BAD — sends response AND calls next (causes "headers sent" error):
//     app.use((req, res, next) => {
//       res.send('Done');
//       next();  // This will cause problems!
//     });
//
//     // ✓ GOOD — either send a response OR call next, never both:
//     app.use((req, res, next) => {
//       if (someCondition) {
//         return res.send('Done');  // return prevents next() from running
//       }
//       next();
//     });


// ════════════════════════════════════════════════════════════════════════════════
// SECTION 28: MONGODB & MONGOOSE — COMPLETE DATABASE DEEP DIVE
// ════════════════════════════════════════════════════════════════════════════════
//
//  MongoDB is the most popular NoSQL database used with Node.js.
//  Mongoose is the most popular ODM (Object Document Mapper) for MongoDB.
//  Together, they are the "M" in the MERN stack (MongoDB, Express, React, Node).
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  WHAT IS MONGODB?                                                       ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  MongoDB is a DOCUMENT-ORIENTED database that stores data as JSON-like
//  objects called "documents" (technically BSON — Binary JSON).
//
//  ANALOGY — MongoDB vs a Filing Cabinet:
//    SQL Database = A filing cabinet with fixed folders (tables).
//      Every document in a folder MUST have the exact same fields.
//      A "Users" folder requires: name, email, age — always.
//
//    MongoDB = A filing cabinet with flexible folders (collections).
//      Documents in the same folder CAN have different fields.
//      One user document might have { name, email }.
//      Another might have { name, email, age, phone, address }.
//      No rules — each document is independent.
//
//  SQL vs MONGODB TERMINOLOGY:
//    ┌──────────────────────┬──────────────────────┬──────────────────────────┐
//    │ SQL Term             │ MongoDB Term          │ What It Is               │
//    ├──────────────────────┼──────────────────────┼──────────────────────────┤
//    │ Database             │ Database             │ Container for everything │
//    │ Table                │ Collection           │ Group of related items   │
//    │ Row                  │ Document             │ A single data record     │
//    │ Column               │ Field                │ A property/attribute     │
//    │ Primary Key          │ _id (ObjectId)       │ Unique identifier        │
//    │ JOIN                 │ $lookup / populate   │ Combining related data   │
//    │ Schema               │ (optional/Mongoose)  │ Structure definition     │
//    │ Index                │ Index                │ Speed up queries         │
//    └──────────────────────┴──────────────────────┴──────────────────────────┘
//
//  A MONGODB DOCUMENT looks like a JavaScript object:
//    {
//      _id: ObjectId("507f1f77bcf86cd799439011"),   ← auto-generated unique ID
//      name: "John Doe",
//      email: "john@example.com",
//      age: 25,
//      hobbies: ["coding", "gaming"],                ← arrays are allowed!
//      address: {                                    ← nested objects too!
//        street: "123 Main St",
//        city: "New York",
//        zip: "10001"
//      },
//      createdAt: ISODate("2026-01-15T10:30:00Z")
//    }
//
//  WHY MONGODB?
//    ✓ Flexible schema (no migrations needed for simple changes)
//    ✓ Stores data as JSON (natural for JavaScript developers)
//    ✓ Horizontal scaling (sharding across multiple servers)
//    ✓ Fast reads (especially with proper indexing)
//    ✓ Rich query language (filters, sorting, aggregation)
//    ✓ Free cloud hosting via MongoDB Atlas
//    ✓ Huge community and ecosystem
//
//  WHEN TO USE MONGODB vs SQL:
//    MongoDB: Social media, content management, real-time analytics,
//             IoT data, catalogs, user profiles, game state
//    SQL: Banking/financial, inventory, booking systems, anything
//         requiring strict data integrity and complex joins
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  MONGODB INSTALLATION & SETUP                                           ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  OPTION 1: LOCAL INSTALLATION
//    1. Download from: https://www.mongodb.com/try/download/community
//    2. Install MongoDB Community Server
//    3. MongoDB runs as a service on port 27017 by default
//    4. Connect: mongodb://localhost:27017
//
//  OPTION 2: MONGODB ATLAS (Cloud — Recommended for learning!)
//    1. Go to: https://www.mongodb.com/atlas
//    2. Create a free account
//    3. Create a free cluster (M0 Sandbox — 512MB, forever free)
//    4. Set up a database user (username + password)
//    5. Whitelist your IP address (or allow 0.0.0.0/0 for development)
//    6. Get the connection string:
//       mongodb+srv://username:password@cluster0.abc123.mongodb.net/mydb
//    7. Put it in your .env file:
//       DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/mydb
//
//  MONGODB SHELL COMMANDS (mongosh):
//    show dbs                           → List all databases
//    use myDatabase                     → Switch to (or create) a database
//    show collections                   → List all collections in current db
//    db.users.find()                    → Get all documents in "users"
//    db.users.find({ age: { $gt: 18 }}) → Find users older than 18
//    db.users.insertOne({ name: "John" }) → Insert a document
//    db.users.updateOne(
//      { name: "John" },
//      { $set: { age: 26 } }
//    )                                  → Update a document
//    db.users.deleteOne({ name: "John" }) → Delete a document
//    db.users.countDocuments()           → Count documents
//    db.dropDatabase()                   → Delete the entire database!
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  WHAT IS MONGOOSE?                                                      ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  Mongoose is an ODM (Object Document Mapper) for MongoDB and Node.js.
//  It provides a schema-based solution to model your application data.
//
//  WHY MONGOOSE (instead of the raw MongoDB driver)?
//    ✓ Schema validation (enforce data structure)
//    ✓ Type casting (auto-converts "25" to 25 for Number fields)
//    ✓ Query building (chainable, clean syntax)
//    ✓ Middleware/hooks (run code before/after save, delete, etc.)
//    ✓ Population (like SQL JOINs — link documents together)
//    ✓ Plugins ecosystem (pagination, soft-delete, etc.)
//
//  INSTALLATION:
//    npm install mongoose
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  CONNECTING TO MONGODB WITH MONGOOSE                                    ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//    // const mongoose = require('mongoose');
//    //
//    // // Connection string from .env file
//    // const DB_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp';
//    //
//    // mongoose.connect(DB_URL)
//    //   .then(() => console.log('Connected to MongoDB successfully!'))
//    //   .catch(err => {
//    //     console.error('MongoDB connection error:', err.message);
//    //     process.exit(1);  // Exit if database connection fails
//    //   });
//    //
//    // // Connection events (optional but useful for debugging):
//    // mongoose.connection.on('connected', () => {
//    //   console.log('Mongoose connected to MongoDB');
//    // });
//    //
//    // mongoose.connection.on('error', (err) => {
//    //   console.error('Mongoose connection error:', err);
//    // });
//    //
//    // mongoose.connection.on('disconnected', () => {
//    //   console.log('Mongoose disconnected from MongoDB');
//    // });
//    //
//    // // Graceful shutdown (close connection when app stops):
//    // process.on('SIGINT', async () => {
//    //   await mongoose.connection.close();
//    //   console.log('MongoDB connection closed (app shutdown)');
//    //   process.exit(0);
//    // });
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  SCHEMAS & MODELS — Defining Your Data Structure                       ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  SCHEMA = A blueprint that defines the SHAPE of documents in a collection.
//           Like a blueprint for a house — defines what each room looks like.
//
//  MODEL = A wrapper around the schema that provides CRUD methods.
//          Like the construction company that builds houses from the blueprint.
//
//    Schema → "A user must have a name (string), email (string), age (number)"
//    Model  → "Here's a User class you can use to create, find, update users"
//
//  DEFINING A SCHEMA:
//
//    // const mongoose = require('mongoose');
//    //
//    // const userSchema = new mongoose.Schema({
//    //   // ── Field definitions ──
//    //   name: {
//    //     type: String,            // Data type
//    //     required: [true, 'A user must have a name'],  // Required + error msg
//    //     trim: true,              // Remove whitespace from both ends
//    //     minlength: [2, 'Name must be at least 2 characters'],
//    //     maxlength: [50, 'Name cannot exceed 50 characters']
//    //   },
//    //
//    //   email: {
//    //     type: String,
//    //     required: [true, 'Email is required'],
//    //     unique: true,            // No two users with the same email
//    //     lowercase: true,         // Auto-convert to lowercase
//    //     match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
//    //   },
//    //
//    //   password: {
//    //     type: String,
//    //     required: [true, 'Password is required'],
//    //     minlength: [8, 'Password must be at least 8 characters'],
//    //     select: false            // NEVER include password in queries by default
//    //   },
//    //
//    //   age: {
//    //     type: Number,
//    //     min: [0, 'Age cannot be negative'],
//    //     max: [150, 'Age cannot exceed 150']
//    //   },
//    //
//    //   role: {
//    //     type: String,
//    //     enum: ['user', 'admin', 'moderator'],  // Only these values allowed
//    //     default: 'user'          // Default value if not provided
//    //   },
//    //
//    //   active: {
//    //     type: Boolean,
//    //     default: true
//    //   },
//    //
//    //   hobbies: [String],         // Array of strings
//    //
//    //   address: {                 // Nested object (sub-document)
//    //     street: String,
//    //     city: String,
//    //     zip: String,
//    //     country: { type: String, default: 'US' }
//    //   },
//    //
//    //   // Reference to another collection (like a foreign key in SQL)
//    //   posts: [{
//    //     type: mongoose.Schema.Types.ObjectId,
//    //     ref: 'Post'              // References the 'Post' model
//    //   }],
//    //
//    //   profilePicture: {
//    //     type: String,
//    //     default: 'default.jpg'
//    //   }
//    // }, {
//    //   // ── Schema Options ──
//    //   timestamps: true,          // Auto-adds createdAt & updatedAt fields
//    //   toJSON: { virtuals: true }, // Include virtual fields in JSON output
//    //   toObject: { virtuals: true }
//    // });
//
//  MONGOOSE DATA TYPES:
//    ┌──────────────────────┬──────────────────────────────────────────────────┐
//    │ Type                 │ Description                                      │
//    ├──────────────────────┼──────────────────────────────────────────────────┤
//    │ String               │ Text: "Hello"                                    │
//    │ Number               │ Integer or float: 42, 3.14                       │
//    │ Boolean              │ true or false                                    │
//    │ Date                 │ Date object: new Date(), Date.now               │
//    │ Buffer               │ Binary data (images, files)                      │
//    │ ObjectId             │ MongoDB's unique identifier                      │
//    │ Array                │ [String], [Number], [ObjectId], [{...}]         │
//    │ Mixed                │ Any type (no validation): Schema.Types.Mixed    │
//    │ Map                  │ Key-value pairs: Map<String, Number>            │
//    │ Decimal128           │ High-precision decimal (for money)               │
//    └──────────────────────┴──────────────────────────────────────────────────┘
//
//
//  CREATING A MODEL FROM A SCHEMA:
//
//    // const User = mongoose.model('User', userSchema);
//    //
//    // 'User' = the model name (Mongoose auto-creates a collection called "users")
//    // Convention: Model name is singular + capitalized → "User"
//    //             Collection name is auto-pluralized + lowercased → "users"
//    //
//    // Export for use in other files:
//    // module.exports = User;
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  CRUD OPERATIONS WITH MONGOOSE — Complete Examples                      ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  ── CREATE (Insert documents) ──
//
//    // Method 1: Create and save (two steps)
//    // const user = new User({
//    //   name: 'John Doe',
//    //   email: 'john@example.com',
//    //   password: 'hashedPassword123',
//    //   age: 25
//    // });
//    // await user.save();  // Saves to database
//    //
//    // Method 2: Create in one step (shorthand)
//    // const user = await User.create({
//    //   name: 'Jane Doe',
//    //   email: 'jane@example.com',
//    //   password: 'hashedPassword456',
//    //   age: 28
//    // });
//    //
//    // Method 3: Insert many documents at once
//    // const users = await User.insertMany([
//    //   { name: 'Alice', email: 'alice@mail.com', password: 'hashed1' },
//    //   { name: 'Bob', email: 'bob@mail.com', password: 'hashed2' },
//    //   { name: 'Charlie', email: 'charlie@mail.com', password: 'hashed3' }
//    // ]);
//
//
//  ── READ (Query/Find documents) ──
//
//    // Find ALL documents:
//    // const users = await User.find();
//    //
//    // Find with FILTER:
//    // const admins = await User.find({ role: 'admin' });
//    //
//    // Find ONE document:
//    // const user = await User.findOne({ email: 'john@example.com' });
//    //
//    // Find by ID:
//    // const user = await User.findById('507f1f77bcf86cd799439011');
//    //
//    // SELECT specific fields (projection):
//    // const users = await User.find().select('name email -_id');
//    //   // Returns only name and email, excludes _id
//    //   // Minus (-) prefix = exclude that field
//    //
//    // SORTING:
//    // const users = await User.find().sort({ createdAt: -1 });
//    //   // -1 = descending (newest first)
//    //   //  1 = ascending (oldest first)
//    //   // String shorthand: .sort('-createdAt')  (minus = descending)
//    //
//    // PAGINATION:
//    // const page = 1;
//    // const limit = 10;
//    // const skip = (page - 1) * limit;
//    // const users = await User.find()
//    //   .skip(skip)       // Skip the first N documents
//    //   .limit(limit);    // Return only N documents
//    //
//    // COUNTING:
//    // const count = await User.countDocuments({ role: 'admin' });
//    //
//    // CHECK IF EXISTS:
//    // const exists = await User.exists({ email: 'john@example.com' });
//    //   // Returns the _id if found, null if not
//
//
//  ── UPDATE (Modify documents) ──
//
//    // Update ONE document:
//    // const user = await User.findByIdAndUpdate(
//    //   '507f1f77bcf86cd799439011',       // the ID to find
//    //   { name: 'John Smith', age: 26 },  // the fields to update
//    //   {
//    //     new: true,            // Return the UPDATED document (not the old one)
//    //     runValidators: true   // Run schema validators on the update
//    //   }
//    // );
//    //
//    // Update ONE with filter:
//    // await User.findOneAndUpdate(
//    //   { email: 'john@example.com' },
//    //   { $set: { age: 26 } },
//    //   { new: true }
//    // );
//    //
//    // Update MANY documents:
//    // await User.updateMany(
//    //   { role: 'user' },          // Filter: all regular users
//    //   { $set: { active: false }} // Set active to false
//    // );
//    //
//    // MongoDB UPDATE OPERATORS:
//    //   $set       → Set field value:    { $set: { name: 'New' } }
//    //   $unset     → Remove a field:     { $unset: { phone: '' } }
//    //   $inc       → Increment:          { $inc: { views: 1 } }
//    //   $push      → Add to array:       { $push: { hobbies: 'coding' } }
//    //   $pull      → Remove from array:  { $pull: { hobbies: 'gaming' } }
//    //   $addToSet  → Add unique to array: { $addToSet: { tags: 'new' } }
//    //   $rename    → Rename a field:     { $rename: { nm: 'name' } }
//    //   $min       → Update if less:     { $min: { score: 50 } }
//    //   $max       → Update if greater:  { $max: { score: 100 } }
//
//
//  ── DELETE (Remove documents) ──
//
//    // Delete ONE by ID:
//    // const user = await User.findByIdAndDelete('507f1f77bcf86cd799439011');
//    //
//    // Delete ONE with filter:
//    // await User.findOneAndDelete({ email: 'john@example.com' });
//    //
//    // Delete MANY:
//    // const result = await User.deleteMany({ active: false });
//    // console.log(`Deleted ${result.deletedCount} inactive users`);
//    //
//    // Delete ALL documents in a collection:
//    // await User.deleteMany({});  // Empty filter = delete everything!
//    // ⚠ Be VERY careful with this!
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  QUERY OPERATORS — Advanced Filtering                                  ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  MongoDB query operators start with $ (dollar sign):
//
//  COMPARISON:
//    // $eq   → Equal:          User.find({ age: { $eq: 25 } })  (same as { age: 25 })
//    // $ne   → Not equal:      User.find({ role: { $ne: 'admin' } })
//    // $gt   → Greater than:   User.find({ age: { $gt: 18 } })
//    // $gte  → Greater or eq:  User.find({ age: { $gte: 18 } })
//    // $lt   → Less than:      User.find({ age: { $lt: 65 } })
//    // $lte  → Less or equal:  User.find({ age: { $lte: 65 } })
//    // $in   → In array:       User.find({ role: { $in: ['admin', 'mod'] } })
//    // $nin  → Not in array:   User.find({ role: { $nin: ['banned'] } })
//
//  LOGICAL:
//    // $and  → All conditions:  User.find({ $and: [{ age: { $gte: 18 } }, { active: true }] })
//    // $or   → Any condition:   User.find({ $or: [{ role: 'admin' }, { role: 'mod' }] })
//    // $not  → Negate:          User.find({ age: { $not: { $lt: 18 } } })
//    // $nor  → None match:     User.find({ $nor: [{ deleted: true }, { banned: true }] })
//
//  ELEMENT:
//    // $exists → Field exists:  User.find({ phone: { $exists: true } })
//    // $type   → Field type:    User.find({ age: { $type: 'number' } })
//
//  ARRAY:
//    // $size   → Array length:  User.find({ hobbies: { $size: 3 } })
//    // $all    → Contains all:  User.find({ hobbies: { $all: ['coding', 'gaming'] } })
//    // $elemMatch → Element match: User.find({
//    //   scores: { $elemMatch: { $gt: 80, $lt: 90 } }
//    // })
//
//  TEXT SEARCH:
//    // $regex  → Pattern match: User.find({ name: { $regex: /^john/i } })
//    //   /^john/i =  starts with "john", case-insensitive
//    //   Useful for search functionality!
//
//  EXAMPLE — Complex query:
//    // "Find active users aged 18-30 who are admins or moderators,
//    //  sorted by name, showing only name and email, page 2, 10 per page"
//    //
//    // const users = await User.find({
//    //   active: true,
//    //   age: { $gte: 18, $lte: 30 },
//    //   role: { $in: ['admin', 'moderator'] }
//    // })
//    //   .select('name email')
//    //   .sort('name')
//    //   .skip(10)
//    //   .limit(10);
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  AGGREGATION PIPELINE — Advanced Data Processing                       ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  The aggregation pipeline is MongoDB's most POWERFUL feature.
//  It processes documents through a series of STAGES (like a factory assembly line).
//  Each stage transforms the data and passes results to the next stage.
//
//  COMMON STAGES:
//    $match    → Filter documents (like .find() but in a pipeline)
//    $group    → Group by a field and compute aggregates (sum, avg, count)
//    $sort     → Sort the results
//    $project  → Reshape documents (select/rename/compute fields)
//    $limit    → Limit number of results
//    $skip     → Skip N documents
//    $unwind   → Deconstruct an array field into separate documents
//    $lookup   → Join with another collection (like SQL JOIN)
//    $count    → Count the documents
//    $addFields → Add new computed fields
//
//  EXAMPLE — Order analytics:
//    // "Get total revenue per product category for 2025, sorted by revenue"
//    //
//    // const stats = await Order.aggregate([
//    //   // Stage 1: Filter orders from 2025
//    //   { $match: {
//    //       createdAt: {
//    //         $gte: new Date('2025-01-01'),
//    //         $lt: new Date('2026-01-01')
//    //       }
//    //   }},
//    //
//    //   // Stage 2: Group by category, calculate totals
//    //   { $group: {
//    //       _id: '$category',           // group by the "category" field
//    //       totalRevenue: { $sum: '$amount' },  // sum all amounts
//    //       avgOrderValue: { $avg: '$amount' }, // average
//    //       totalOrders: { $sum: 1 },           // count
//    //       maxOrder: { $max: '$amount' }       // largest order
//    //   }},
//    //
//    //   // Stage 3: Sort by total revenue descending
//    //   { $sort: { totalRevenue: -1 } },
//    //
//    //   // Stage 4: Reshape the output
//    //   { $project: {
//    //       category: '$_id',
//    //       _id: 0,
//    //       totalRevenue: 1,
//    //       avgOrderValue: { $round: ['$avgOrderValue', 2] },
//    //       totalOrders: 1
//    //   }}
//    // ]);
//    //
//    // Result:
//    // [
//    //   { category: 'Electronics', totalRevenue: 150000, avgOrderValue: 299.50, totalOrders: 501 },
//    //   { category: 'Clothing', totalRevenue: 85000, avgOrderValue: 45.00, totalOrders: 1889 },
//    //   ...
//    // ]
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  INDEXING — Making Queries Fast                                        ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  Without an index, MongoDB must scan EVERY document to find matches.
//  This is called a "collection scan" — very slow for large collections!
//
//  With an index, MongoDB can jump directly to matching documents.
//  Like a book's index — instead of reading every page, go straight
//  to page 234.
//
//  TYPES OF INDEXES:
//    // Single field index:
//    // userSchema.index({ email: 1 });          // 1 = ascending
//    //
//    // Compound index (multiple fields):
//    // userSchema.index({ role: 1, age: -1 });  // -1 = descending
//    //
//    // Unique index (no duplicates):
//    // userSchema.index({ email: 1 }, { unique: true });
//    //
//    // Text index (for full-text search):
//    // postSchema.index({ title: 'text', content: 'text' });
//    // const posts = await Post.find({ $text: { $search: 'javascript tutorial' } });
//    //
//    // TTL index (auto-delete after time):
//    // sessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });
//    // // Auto-deletes sessions after 1 hour!
//
//  WHEN TO CREATE INDEXES:
//    ✓ Fields you frequently query on (email, username)
//    ✓ Fields you sort by (createdAt, price)
//    ✓ Fields used in JOIN-like operations ($lookup / populate)
//    ✗ Don't index fields you rarely query
//    ✗ Don't over-index (each index slows down writes)
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  POPULATION — MongoDB's Version of "JOIN"                              ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  Population lets you reference documents in other collections and
//  automatically replace ObjectId references with actual document data.
//
//  EXAMPLE — Posts with author info:
//
//    // Post schema with a reference to User:
//    // const postSchema = new mongoose.Schema({
//    //   title: String,
//    //   content: String,
//    //   author: {
//    //     type: mongoose.Schema.Types.ObjectId,
//    //     ref: 'User'   // Reference to the User model
//    //   },
//    //   comments: [{
//    //     type: mongoose.Schema.Types.ObjectId,
//    //     ref: 'Comment'
//    //   }]
//    // });
//    //
//    // // Without populate — returns just the ObjectId:
//    // const post = await Post.findById(id);
//    // // { title: 'Hello', author: ObjectId('507f1f77...') }
//    //
//    // // With populate — returns the full user document:
//    // const post = await Post.findById(id)
//    //   .populate('author', 'name email');  // only get name & email
//    // // { title: 'Hello', author: { _id: '...', name: 'John', email: 'john@...' } }
//    //
//    // // Populate multiple fields:
//    // const post = await Post.findById(id)
//    //   .populate('author', 'name email')
//    //   .populate('comments');
//    //
//    // // Nested populate (comments with their authors):
//    // const post = await Post.findById(id)
//    //   .populate({
//    //     path: 'comments',
//    //     populate: { path: 'author', select: 'name' }
//    //   });
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  RELATIONSHIPS — Embedding vs Referencing                              ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  In SQL, you JOIN tables. In MongoDB, you have two choices:
//
//  1. EMBEDDING (denormalization) — Store related data INSIDE the document
//
//    // {
//    //   name: "John",
//    //   email: "john@mail.com",
//    //   address: {                   ← address is EMBEDDED
//    //     street: "123 Main St",
//    //     city: "NYC",
//    //     zip: "10001"
//    //   },
//    //   orders: [                    ← orders are EMBEDDED
//    //     { product: "Laptop", price: 999, date: "2026-01-15" },
//    //     { product: "Mouse", price: 29, date: "2026-01-16" }
//    //   ]
//    // }
//
//    PROS: Fast reads (one query gets everything), no joins needed
//    CONS: Document size limit (16MB), duplicated data, hard to update
//          embedded data independently
//
//  2. REFERENCING (normalization) — Store a reference (ObjectId) to another document
//
//    // User document:
//    // { _id: ObjectId("abc"), name: "John" }
//    //
//    // Order documents (separate collection):
//    // { product: "Laptop", price: 999, user: ObjectId("abc") }
//    // { product: "Mouse", price: 29, user: ObjectId("abc") }
//
//    PROS: No data duplication, smaller documents, can update independently
//    CONS: Requires populate (extra query), slightly slower reads
//
//  WHEN TO EMBED vs REFERENCE:
//    ┌──────────────────────┬───────────────┬───────────────────────────────┐
//    │ Criteria             │ Embed         │ Reference                     │
//    ├──────────────────────┼───────────────┼───────────────────────────────┤
//    │ Data is read together│ ✓ Embed       │                               │
//    │ Data changes often   │               │ ✓ Reference                   │
//    │ 1-to-few (1:3-5)    │ ✓ Embed       │                               │
//    │ 1-to-many (1:1000+) │               │ ✓ Reference                   │
//    │ Many-to-many         │               │ ✓ Reference                   │
//    │ Data is shared/reused│               │ ✓ Reference                   │
//    │ Need atomic updates  │ ✓ Embed       │                               │
//    │ Document growing     │               │ ✓ Reference (avoid 16MB limit)│
//    └──────────────────────┴───────────────┴───────────────────────────────┘
//
//  RULE OF THUMB:
//    "If you usually need the data TOGETHER, embed it.
//     If you need it SEPARATELY or it grows large, reference it."
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  MONGOOSE MIDDLEWARE (Hooks) — Run Code Before/After Operations         ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  Mongoose middleware (also called hooks) lets you run code automatically
//  before or after certain operations.
//
//    // PRE middleware (runs BEFORE the operation):
//    //
//    // Hash password before saving:
//    // userSchema.pre('save', async function(next) {
//    //   // Only hash if password was modified (not on every save)
//    //   if (!this.isModified('password')) return next();
//    //
//    //   // Hash the password with bcrypt (12 rounds)
//    //   this.password = await bcrypt.hash(this.password, 12);
//    //   next();
//    // });
//    //
//    // Set slug before saving:
//    // postSchema.pre('save', function(next) {
//    //   this.slug = this.title.toLowerCase().replace(/\s+/g, '-');
//    //   next();
//    // });
//    //
//    // Auto-populate author on find:
//    // postSchema.pre(/^find/, function(next) {
//    //   // /^find/ matches find, findOne, findById, etc.
//    //   this.populate('author', 'name email');
//    //   next();
//    // });
//    //
//    //
//    // POST middleware (runs AFTER the operation):
//    //
//    // Log after saving:
//    // userSchema.post('save', function(doc) {
//    //   console.log(`New user created: ${doc.name} (${doc.email})`);
//    // });
//    //
//    // Send welcome email after creating user:
//    // userSchema.post('save', async function(doc) {
//    //   if (doc.isNew) {
//    //     await sendWelcomeEmail(doc.email, doc.name);
//    //   }
//    // });
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  VIRTUAL FIELDS — Computed Properties                                  ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  Virtuals are fields that DON'T exist in the database but are
//  computed on-the-fly when you access them. Saves storage space!
//
//    // userSchema.virtual('fullName').get(function() {
//    //   return `${this.firstName} ${this.lastName}`;
//    // });
//    //
//    // // Usage:
//    // const user = await User.findById(id);
//    // console.log(user.fullName);  // "John Doe" (computed, not stored)
//    //
//    // // Virtual populate (get posts belonging to a user without
//    // // storing post IDs on the user document):
//    // userSchema.virtual('posts', {
//    //   ref: 'Post',
//    //   foreignField: 'author',   // field on Post that references User
//    //   localField: '_id'         // field on User to match against
//    // });
//    //
//    // const userWithPosts = await User.findById(id).populate('posts');
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  INSTANCE & STATIC METHODS — Custom Functionality                      ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//  INSTANCE METHODS — Available on individual documents:
//
//    // userSchema.methods.verifyPassword = async function(candidatePassword) {
//    //   return await bcrypt.compare(candidatePassword, this.password);
//    // };
//    //
//    // // Usage:
//    // const user = await User.findOne({ email }).select('+password');
//    // const isCorrect = await user.verifyPassword('myPassword123');
//
//  STATIC METHODS — Available on the Model (like class methods):
//
//    // userSchema.statics.findByEmail = function(email) {
//    //   return this.findOne({ email });
//    // };
//    //
//    // // Usage:
//    // const user = await User.findByEmail('john@example.com');
//
//
//  ╔═══════════════════════════════════════════════════════════════════════════╗
//  ║  COMPLETE EXPRESS + MONGOOSE EXAMPLE                                   ║
//  ╚═══════════════════════════════════════════════════════════════════════════╝
//
//    // This is how a real-world Express + MongoDB app file looks:
//    //
//    // const express = require('express');
//    // const mongoose = require('mongoose');
//    // require('dotenv').config();
//    //
//    // const app = express();
//    // app.use(express.json());
//    //
//    // // ── Connect to MongoDB ──
//    // mongoose.connect(process.env.DATABASE_URL)
//    //   .then(() => console.log('DB connected'))
//    //   .catch(err => console.error('DB error:', err));
//    //
//    // // ── Define Schema & Model ──
//    // const todoSchema = new mongoose.Schema({
//    //   task: { type: String, required: true, trim: true },
//    //   completed: { type: Boolean, default: false },
//    //   priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' }
//    // }, { timestamps: true });
//    //
//    // const Todo = mongoose.model('Todo', todoSchema);
//    //
//    // // ── Routes ──
//    // app.get('/api/todos', async (req, res) => {
//    //   const todos = await Todo.find().sort('-createdAt');
//    //   res.json({ results: todos.length, data: { todos } });
//    // });
//    //
//    // app.post('/api/todos', async (req, res) => {
//    //   const todo = await Todo.create(req.body);
//    //   res.status(201).json({ data: { todo } });
//    // });
//    //
//    // app.patch('/api/todos/:id', async (req, res) => {
//    //   const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//    //     new: true, runValidators: true
//    //   });
//    //   if (!todo) return res.status(404).json({ error: 'Not found' });
//    //   res.json({ data: { todo } });
//    // });
//    //
//    // app.delete('/api/todos/:id', async (req, res) => {
//    //   const todo = await Todo.findByIdAndDelete(req.params.id);
//    //   if (!todo) return res.status(404).json({ error: 'Not found' });
//    //   res.status(204).json(null);
//    // });
//    //
//    // app.listen(3000, () => console.log('Server running on port 3000'));


// ════════════════════════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════════════════════════
//
//  SECTION 29: THE ACTUAL CODE — LINE BY LINE
//
//  Now let's walk through the actual server code with full explanations.
//
// ════════════════════════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════════════════════════


// ─────────────────────────────────────────────────────────────────────────────
// LINE 1: Import the Express module
// ─────────────────────────────────────────────────────────────────────────────
//
//  `const` = declares a variable that CANNOT be reassigned later.
//    Why const? Because `express` should always point to the same thing.
//    We never want to accidentally overwrite it.
//
//  `require('express')` = Node.js's way of importing a module.
//    - Node looks for 'express' in the node_modules folder
//    - This folder was created when you ran: npm install express
//    - require() reads the module, executes it, and returns its "export"
//    - In Express's case, it returns a FUNCTION that creates an app
//
//  The result: `express` is now a function we can call to create our app.
//
const express = require('express');


// ─────────────────────────────────────────────────────────────────────────────
// LINE 2: Create an Express application instance
// ─────────────────────────────────────────────────────────────────────────────
//
//  `express()` — Calling the express function creates an APPLICATION object.
//
//  This `app` object is the core of everything. It's like the "engine"
//  that powers your entire server. It has methods for:
//    - Defining routes:   app.get(), app.post(), app.put(), app.delete()
//    - Adding middleware:  app.use()
//    - Starting server:   app.listen()
//    - Setting config:    app.set()
//
//  Think of it as: you imported a car factory (require('express')),
//  and now you're building one car (express()) that you'll configure.
//
const app = express();


// ─────────────────────────────────────────────────────────────────────────────
// OPTIONAL: Define the port (best practice: use environment variable)
// ─────────────────────────────────────────────────────────────────────────────
//
//  In production, hosting platforms set process.env.PORT automatically.
//  The || (OR) operator means: "use the env variable, or 3000 if it's not set."
//
const PORT = process.env.PORT || 3000;


// ─────────────────────────────────────────────────────────────────────────────
// MIDDLEWARE: Parse incoming JSON request bodies
// ─────────────────────────────────────────────────────────────────────────────
//
//  Without this line, req.body would be UNDEFINED when clients send JSON.
//  This middleware reads the raw JSON string from the request,
//  runs JSON.parse() on it, and puts the result into req.body.
//
//  Example: Client sends POST /api/users with body {"name":"John"}
//  → Without express.json(): req.body is undefined
//  → With express.json():    req.body is { name: "John" }
//
app.use(express.json());


// ─────────────────────────────────────────────────────────────────────────────
// LINE 3: Define a route for the root URL
// ─────────────────────────────────────────────────────────────────────────────
//
//  app.get(PATH, HANDLER) = "When someone sends a GET request to PATH,
//                            run the HANDLER function."
//
//  Breaking it down:
//
//  `app`   = our Express application (created on line 2)
//
//  `.get`  = the HTTP method. This route ONLY responds to GET requests.
//            (POST, PUT, DELETE to '/' would get a 404 or 405)
//
//  `'/'`   = the URL path. '/' is the ROOT of the website.
//            When someone visits http://localhost:3000/, this matches.
//            Other paths: '/about', '/api/users', '/contact'
//
//  `(req, res) => { ... }` = the HANDLER function (a callback).
//    Express calls this function when a GET request hits '/'.
//    Express passes it two objects:
//
//    `req` (request) — Everything about what the client asked for:
//      req.method   → "GET"
//      req.url      → "/"
//      req.headers  → { host: 'localhost:3000', ... }
//      req.query    → {} (no query string)
//      req.params   → {} (no route params)
//      req.ip       → "127.0.0.1" (client's IP)
//
//    `res` (response) — Methods to send data back to the client:
//      res.send()   → Send text/HTML response
//      res.json()   → Send JSON response
//      res.status() → Set HTTP status code
//      res.redirect() → Send client to a different URL
//
//  `res.send('Hello, World!')` = Send the string "Hello, World!" back
//    to the client. The browser will display this text.
//    Content-Type is automatically set to "text/html".
//
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// ─────────────────────────────────────────────────────────────────────────────
// LINE 4: Start the server
// ─────────────────────────────────────────────────────────────────────────────
//
//  app.listen(PORT, CALLBACK) = "Start the server, listen on this port,
//                                and run the callback when ready."
//
//  `PORT` = 3000 (the port number our server binds to)
//    Think of this as: "Our server is now sitting in apartment #3000,
//    waiting for visitors."
//
//  `() => { console.log(...) }` = a callback that runs ONCE when the
//    server has successfully started. This is just a friendly log
//    so you know the server is ready.
//
//  WHAT HAPPENS WHEN YOU RUN `node server.js`:
//    1. Node.js reads this file from top to bottom
//    2. require('express') loads the Express library
//    3. express() creates the app object
//    4. app.get() registers the route (doesn't run the handler yet!)
//    5. app.listen() starts the HTTP server on port 3000
//    6. The callback logs "Server listening on port 3000"
//    7. The server now WAITS — it sits in an event loop, listening
//       for incoming requests indefinitely
//    8. When a request arrives at '/', Express matches the route
//       and calls the handler function
//    9. The handler sends "Hello, World!" back to the client
//    10. The server continues waiting for more requests...
//
//  The server runs FOREVER until you:
//    - Press Ctrl+C in the terminal
//    - The process crashes (unhandled error)
//    - The system shuts down
//
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


// ════════════════════════════════════════════════════════════════════════════════
// BONUS: NEXT STEPS — WHERE TO GO FROM HERE
// ════════════════════════════════════════════════════════════════════════════════
//
//  Day 2:  More routes, route parameters, query strings
//  Day 3:  Middleware deep dive, custom middleware, express.json()
//  Day 4:  Connect to a database (MongoDB with Mongoose OR PostgreSQL with Prisma)
//  Day 5:  CRUD operations (Create, Read, Update, Delete)
//  Day 6:  Error handling, validation (Joi or Zod)
//  Day 7:  Authentication (bcrypt + JWT)
//  Day 8:  Authorization (roles, permissions, protected routes)
//  Day 9:  File uploads (Multer)
//  Day 10: API documentation (Swagger / OpenAPI)
//  Day 11: Testing (Jest, Supertest)
//  Day 12: Deployment (Railway, Render, or DigitalOcean)
//
//  ESSENTIAL PACKAGES TO LEARN:
//    express      → Web framework (you're using it!)
//    mongoose     → MongoDB ODM
//    prisma       → Modern database ORM (PostgreSQL, MySQL, SQLite)
//    bcrypt       → Password hashing
//    jsonwebtoken → JWT authentication
//    dotenv       → Environment variables
//    cors         → Cross-origin resource sharing
//    helmet       → Security headers
//    morgan       → HTTP request logger
//    joi / zod    → Data validation
//    multer       → File upload handling
//    nodemailer   → Send emails
//    socket.io    → Real-time communication (WebSockets)
//    rate-limit   → API rate limiting
//    winston      → Production logging
//
//  HAPPY CODING! 🚀
// ════════════════════════════════════════════════════════════════════════════════
