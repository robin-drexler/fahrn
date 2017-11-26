const db = window.firebase.firestore();

const COLLECTION_RIDES = 'rides';
const FIELD_DEPARTURE_TIME = 'departure_time';

export function loadAndUpdateRides(callback) {
  db
    .collection(COLLECTION_RIDES)
    .orderBy(FIELD_DEPARTURE_TIME)
    .onSnapshot(snapshots => {
      callback(
        snapshots.docs.map(snapshot => {
          return { ...snapshot.data(), id: snapshot.id };
        })
      );
    });
}
