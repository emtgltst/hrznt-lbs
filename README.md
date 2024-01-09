# NodeJS REST API

This project is a NodeJS REST API built with ExpressJS as a task for a Backend Developer job application to Horizontal Labs. It provides an endpoint to retrieve numbers that are either palindromes, prime numbers, or both, depending on the input parameters.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- Node.js
- npm (Node Package Manager)
- Docker (optional, for running the application in a Docker container)

### Installing and Running Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/emtgltst/hrznt-lbs.git

2. **Navigate to the Project Directory**

   ```bash
   cd hrznt-lbs

3. **Install Dependencies**

   ```bash
   npm install

4. **Compile TypeScript to JavaScript**

   ```bash
   npm run build

5. **Start the Server**

   ```bash
   npm start

The server will start running on http://localhost:3000.

### Running with Docker

1. **Build the Docker Image**

   ```bash
   docker build -t hrznt-lbs .

2. **Run the Docker Container**

   ```bash
   docker run -p 3000:3000 -d hrznt-lbs .

Access the application at http://localhost:3000.

### API Usage

**Endpoint**: `POST /api/numbers`

**Body**:

```json
{
  "minNumber": 1,
  "maxNumber": 100,
  "feature": ["palindrome", "prime"]
}
```

**Response Example**:
```json
{
  "data": [2, 3, 5, 7, 11, ...],
  "timeOfExecution": "15.2"
}
```

### Running the Tests

**To run the automated tests for this system:**

   ```bash
   npm run test
