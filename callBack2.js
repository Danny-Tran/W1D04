function findWaldo(arr, found) {
  arr.forEach(function(arr1,inde) {
  if (arr1 === "Waldo") {
    found(inde);
  }
});
}

function actionWhenFound(act) {
  console.log("Found him " + act + " index" );
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);