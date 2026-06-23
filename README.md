# AffordMed Backend Assessment

## Project Overview

This project is developed as part of the AffordMed Backend Assessment.

The application uses:

* Node.js
* Express.js
* Axios
* Logging Middleware
* REST APIs

The logging middleware has been integrated from the first function as required by the assessment guidelines.

---

## Project Structure

```text
A23126512103-backend
│
├── src
│   ├── middleware
│   │   └── logger.js
│   ├── services
│   │   └── apiService.js
│   ├── routes
│   │   └── analyticsRoutes.js
│   └── app.js
│
├── screenshots
├── package.json
├── README.md
└── test.js
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd A23126512103-backend
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the server:

```bash
node src/app.js
```

Expected output:

```text
Server running on port 3000
```

---

## Logging Middleware

The project includes a custom logging middleware that sends logs to the evaluation logging service.

Supported log levels:

* debug
* info
* warn
* error
* fatal

Example:

```javascript
await Log(
  "backend",
  "info",
  "handler",
  "Fetching users",
  token
);
```

---

## API Endpoints

### Health Check

```http
GET /api/health
```

Response:

```json
{
  "success": true,
  "message": "API is working"
}
```

---

## Authentication

The application uses Bearer Token Authentication obtained from the AffordMed Authorization API.

---

## Screenshots

Screenshots of:

* Server Execution
* API Responses
* Route Testing

are included in the `screenshots` folder.

---

## Technologies Used

* Node.js
* Express.js
* Axios
* REST API
* JavaScript (ES Modules)

---

## Author

Roll Number: A23126512103
