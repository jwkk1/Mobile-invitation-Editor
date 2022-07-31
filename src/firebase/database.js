import firebaseApp from "./firebase";

class Database {
  addCard(userId, card) {
    firebaseApp.database().ref(`${userId}`).set(card);
  }
  addComment(userId, card) {
    firebaseApp.database().ref(`${userId}/${card.id}/comment`).set(card);
  }
}

export default Database;
