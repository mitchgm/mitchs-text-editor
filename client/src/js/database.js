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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // this connects the DB to the data
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  // this makes a new transaction 
  const store = tx.objectStore("jate");
  // opens the store
  const request = store.getAll();
  // this will use the add method
  const result = await request;
  // this makes sure the corrcet date is added 
  return result.value;
};

initdb();
