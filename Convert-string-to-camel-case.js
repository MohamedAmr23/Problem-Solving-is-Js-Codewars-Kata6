function toCamelCase(str) {
    return str.replace(/[-_]/g, ' ').split(' ').map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }

  console.log(toCamelCase('The_stealth-warrior'))