var admin = require("firebase-admin");

var serviceAccount = require("../config/com-atizriicon-vov-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://com-atizriicon-vov.firebaseio.com",
});

let db = admin.firestore();

function getUsersList() {
  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log("doc", doc.id, "=>", doc.data());
      });
      return snapshot;
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
}

module.exports = getUsersList;
