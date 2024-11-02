function greet(languageCode) {
    switch (languageCode) {
      case 'en':
        console.log("Hello");
        break;
      case 'fr':
        console.log("Bonjour");
        break;
      case 'es':
        console.log("Hola");
        break;
      default:
        console.log("Hello (default)");
    }
  }
  
  greet('fr');
  