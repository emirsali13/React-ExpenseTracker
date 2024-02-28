# Expense Tracker App

Expense Tracker application built with React.js and Firebase for managing personal expenses.

## Overview

The Expense Tracker allows users to log in with their Google account, add transactions (both income and expenses), view their balance, and see a list of all transactions. It utilizes Firebase for authentication, storing transactions, and real-time updates.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/emirsali13/react-expensetracker.git
    ```

2. Install dependencies:

    ```bash
    cd react-expensetracker
    npm install
    ```

3. Create a Firebase project and set up Authentication and Firestore database.

4. Create a `.env` file in the root directory and add your Firebase configuration:

    ```
    REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
    REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
    REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
    REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
    REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
    ```

5. Run the app:

    ```bash
    npm start
    ```

## Features

- Google authentication: Users can sign in with their Google account.
- Add transactions: Users can add income and expenses with descriptions and amounts.
- View balance: Users can see their current balance, income, and expenses.
- Real-time updates: Transactions are updated in real-time with Firebase Firestore.

## Technologies Used

- React.js
- Firebase Authentication
- Firebase Firestore
- React Router
- CSS (stylesheets)
- Firebase SDK for JavaScript

## Folder Structure

- `src/App.js`: Main component for routing.
- `src/pages/auth/index.js`: Authentication page component.
- `src/pages/expense-tracker/index.js`: Expense Tracker main page component.
- `src/hooks/useAddTransaction.js`: Custom hook for adding transactions.
- `src/hooks/useGetTransactions.js`: Custom hook for fetching transactions.
- `src/hooks/useGetUserInfo.js`: Custom hook for getting user information.
- `src/config/firebase-config.js`: Firebase configuration and initialization.
- `src/App.css` and `src/pages/**/*.css`: CSS stylesheets for styling components.

## Deployment

To deploy the app to Firebase:

1. Install Firebase CLI:

    ```bash
    npm install -g firebase-tools
    ```

2. Initialize Firebase:

    ```bash
    firebase init
    ```

3. Follow the prompts to set up Firebase Hosting and select the Firebase project.

4. Deploy the app:

    ```bash
    firebase deploy
    ```
