import firebaseApp from "./firebase";

class Database {
  syncData(userId, onSycn) {
    const ref = firebaseApp.database().ref(`${userId}`);
    ref.once("value", (snapshot) => {
      const value = snapshot.val();
      value && onSycn(value);
    });
  }

  addCard(userId, card) {
    firebaseApp.database().ref(`${userId}`).set(card);
  }
  addComment(userId, card) {
    firebaseApp.database().ref(`${userId}`).set(card);
  }
}

export default Database;
