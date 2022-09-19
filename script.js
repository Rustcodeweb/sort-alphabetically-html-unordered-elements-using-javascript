function sortFunction() {
  var array = [];
  var item = document.getElementsByTagName("li")
  for (var i = 0; i < item.length; i++) {
    array.push(item[i].innerHTML);
  }

  array.sort();
  for (var i = 0; i < array.length; i++) {
    item[i].innerHTML = array[i];
  }
}
