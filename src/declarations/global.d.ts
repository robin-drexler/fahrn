interface DocumentReference {
  id: string;
}

interface CollectionReference {
  add(value: Object): Promise<DocumentReference>;
}

interface Firestore {
  get(name: string): CollectionReference;
}

interface Firebase {
  firestore(): Firestore;
  auth(): any;
}

interface Window {
  firebase: Firebase;
}
