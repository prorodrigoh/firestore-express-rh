const functions = require("firebase-functions");
const express = require("express");

// express APP
const app = express();
app.get('/', (req, res) => res.send('This is HOME 😶‍🌫️'))

app.get('/test', (req, res) => res.send('This is firebase functions 🔥'))

// CLOUD app - CLOUD function
//      app here is defined in the firebase.json. if i change here i need to change there
exports.app = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
