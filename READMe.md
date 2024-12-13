# Exa API Project

This project demonstrates how to use the `exa-js` library to interact with the Exa API for retrieving content based on queries.

---

## **Setup Instructions**

### 1. Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- IDE (e.g., VS Code)

---

### 2. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-repo-name/exa-api-project.git
cd exa-api-project
```
---

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Up Environment Variables
- Create an .env file in the root directory
```bash
touch .env
```
- Add the EXA API key to the .env file
```bash
EXA_API_KEY=your_actual_api_key_here
```

### 5. Project Structure
- main.js: main entry point for interacting with the API
- .env: stores environment variables, like your API key
- package.json: contains your project's dependencies 


### 6. Troubleshooting
- If you encounter issues with dotenv, ensure it is installed
```bash
npm install dotenv
```