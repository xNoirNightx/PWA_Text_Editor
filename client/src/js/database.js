import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


  // Clear the existing data in the object store
export const clearDb = async () => {
  const db = await initdb();
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.clear(); // Clear all existing data in the object store to stop errors

};
// Store the header text in the database
export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  console.log('Adding content to IndexedDB:', content); // Add this line for debugging
  await store.clear();
  await store.add({ content });
};

// Retrieve the header text from the database
export const getDb = async () => {
  try {
    const db = await initdb();
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    return store.get(1);
  } catch (error) {
    console.error('Error while retrieving data from IndexedDB:', error);
    return null;
  }
};