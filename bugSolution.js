To fix this, ensure you access the data only after the promise resolves.  Use `.then()` to handle the result:
```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data().myField); // Access data after promise resolves
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```
Alternatively, use `async/await` for cleaner asynchronous code:
```javascript
async function getData() {
  try {
    const docRef = db.collection('myCollection').doc('myDoc');
    const doc = await docRef.get();
    if (doc.exists) {
      console.log(doc.data().myField);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}
getData();
```