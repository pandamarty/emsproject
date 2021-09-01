import firebase from "firebase";

export function addItem(item, addComplete) {
  firebase.firestore()
  .collection("items")
  .add(item)
  .then((snapshot) => {
    item.id = snapshot.id
    snapshot.set(item)
  })
  .then(() => addComplete())
  .catch((error) => console.log(error))
}

export async function getItems(itemRetrieved) {
    var itemList = []
    var snapshot = await firebase.firestore()
                                .collection("items")
                                .orderBy("name")
                                .get()
    snapshot.forEach((doc) => {
        const itemDoc = doc.data()
        itemList.push(itemDoc)
    })

    itemRetrieved(itemList)
}