function cloneListItem() {
    const list = document.getElementById("myList");
    const item = list.children[0].cloneNode(true);
    list.appendChild(item);
  }
  