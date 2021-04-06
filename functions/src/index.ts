import * as functions from 'firebase-functions';
import admin from 'firebase-admin'
admin.initializeApp()

const db = admin.firestore()
const citiesRef = db.collection('cities');

await citiesRef.doc('SF').set({
  name: 'San Francisco', state: 'CA', country: 'USA',
  capital: false, population: 860000
});
await citiesRef.doc('LA').set({
  name: 'Los Angeles', state: 'CA', country: 'USA',
  capital: false, population: 3900000
});
await citiesRef.doc('DC').set({
  name: 'Washington, D.C.', state: null, country: 'USA',
  capital: true, population: 680000
});
await citiesRef.doc('TOK').set({
  name: 'Tokyo', state: null, country: 'Japan',
  capital: true, population: 9000000
});
await citiesRef.doc('BJ').set({
  name: 'Beijing', state: null, country: 'China',
  capital: true, population: 21500000
});

const query = db.collection('cities').doc('SF')
const doc = await query.get()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    if (!doc.exists) {
        console.log('No such document!')
    } else {
        console.log('Document data:', doc.data())
    }
    // db.collection('users')
    //     .get()
    //     .then((snapshot) => {
    //         snapshot.forEach((doc) => {
    //             console.log(doc.id, '=>', doc.data())
    //         })
    //     })
    //     .catch((err) => {
    //         console.log('Error getting documents', err)
    //     })
    response.send(doc.data());
    // response.send('test')
});
