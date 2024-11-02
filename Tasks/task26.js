function createAndRemoveParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "This is a new paragraph.";
    document.body.appendChild(paragraph);
    
    setTimeout(() => {
      document.body.removeChild(paragraph);
    }, 3000);
  }
  