const listItems = document.querySelectorAll("li");

listItems.forEach(item => {
  console.log("Node Name:", item.nodeName);
  console.log("Parent Node Name:", item.parentNode.nodeName);
  
  item.childNodes.forEach(child => {
    console.log("Child Node Name:", child.nodeName);
  });
});

