# Medicine App

This is a web application designed to search for and display information about various drugs. The app provides users with detailed information about drugs, including their pros, cons, and potential drug interactions. Additionally, it allows users to view the sources of the drug information.

## Features

- **Search for Drugs**: Users can enter the name of a drug to view detailed information.
- **View Drug Information**: The app displays the pros, cons, and potential interactions for each drug.
- **View Sources**: Each drug's information includes sources that are available when the "Sources" button is clicked.

## Technologies Used

- **HTML/CSS**: For building the frontend and styling the application.
- **JavaScript**: For handling the logic, fetching data from the backend, and dynamically updating the UI.
- **Node.js (Express)**: For creating the backend server that serves the drug data and sources.

## Setup

To run this application locally:

### Prerequisites

1. **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

2. **npm (Node Package Manager)**: npm comes bundled with Node.js, but you can check if you have it installed by running:
    ```bash
    npm --version
    ```

### Instructions

1. **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2. **Install dependencies**:
    In the project directory, run:
    ```bash
    npm install
    ```

3. **Start the server**:
    To start the backend server, run:
    ```bash
    node server.js
    ```

    This will start the server on `http://localhost:3000`.

4. **Open the app**:
    Open `index.html` in your browser to access the frontend.

### File Structure

