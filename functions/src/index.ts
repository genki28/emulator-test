import * as functions from 'firebase-functions';
import admin from 'firebase-admin'
admin.initializeApp()

const db = admin.firestore()
const citiesRef = db.collection('cities');

citiesRef.doc('SF').set({
  name: 'San Francisco', state: 'CA', country: 'USA',
  capital: false, population: 860000
});
citiesRef.doc('LA').set({
  name: 'Los Angeles', state: 'CA', country: 'USA',
  capital: false, population: 3900000
});
citiesRef.doc('DC').set({
  name: 'Washington, D.C.', state: null, country: 'USA',
  capital: true, population: 680000
});
citiesRef.doc('TOK').set({
  name: 'Tokyo', state: null, country: 'Japan',
  capital: true, population: 9000000
});
citiesRef.doc('BJ').set({
  name: 'Beijing', state: null, country: 'China',
  capital: true, population: 21500000
});



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    // if (!doc.exists) {
    //     console.log('No such document!')
    // } else {
    //     console.log('Document data:', doc.data())
    // }
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
    sample().then(result => {
        response.send(result);
    })
    // response.send('test')
});

async function sample() {
    const query = db.collection('cities')
    const result = await query.get()
    console.log(result)
    const datas: any = []
    result.forEach(data => {
      datas.push(data.data())
    })
    // console.log(result.data())
    return datas
}