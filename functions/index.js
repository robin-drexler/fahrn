const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((req, res) => {
  console.log();

  const docRef = admin
    .firestore()
    .collection('users')
    .doc('Yx4CwklT9hQICwgIZFtMFm6n4mI2');

  docRef
    .get()
    .then(doc => {
      const data = doc.data();
      const tokens = Object.keys(data.notificationTokens);

      console.log(tokens);

      // Notification details.
      const payload = {
        notification: {
          title: 'Your ride was accepted!',
          body: 'Please check back.'
        }
      };

      return admin
        .messaging()
        .sendToDevice(tokens, payload)
        .then(response => {
          console.log(response);
          res.send('ok');
        })
        .catch(e => {
          console.log(e);
          res.send(':(');
        });
    })
    .catch(() => {});
});
