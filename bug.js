The Firebase SDK may throw an error if you try to access a property of a document snapshot before the snapshot has fully loaded.  This can happen if you're using asynchronous functions and trying to access the data before the promise resolves. For example:
```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  console.log(doc.data().myField); // Error if doc.data() is not available yet
});
```