const db = window.firebase.firestore();

const COLLECTION_RIDES = 'rides';

export function loadAndUpdateRides(callback) {
  db.collection(COLLECTION_RIDES).onSnapshot(snapshots => {
    callback(
      snapshots.docs.map(snapshot => {
        return { ...snapshot.data(), id: snapshot.id };
      })
    );
  });
}
