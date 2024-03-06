// ჯეირანი

const rockPaperScissors = () => {
  

    const choices = ["მაკრატელი", "ჭა", "ქაღალდი"];
  
    while (true) {
      let bot = Math.floor(Math.random() * 3);
  
      let val = prompt("ჩაწერეთ მაკრატელი, ჭა ან ქაღალდი");
  
      if (val === null) {
        break;
      }
  
      console.log(val);
      if (!(val === "მაკრატელი" || val === "ჭა" || val === "ქაღალდი")) {
        alert("შეცდომა: გთხოვთ შეიყვანოთ 'მაკრატელი', 'ჭა' ან 'ქაღალდი'");
        continue;
      }
  
      if (choices[bot] === val) {
        alert("ფრე");
      } else if (bot === 0 && val === "ჭა") {
        alert(`გილოცავთ თქვენ გაიმარჯვეთ\n${val} -> ${choices[bot]}`);
      } else if (bot === 1 && val === "ქაღალდი") {
        alert(`გილოცავთ თქვენ გაიმარჯვეთ\n${val} -> ${choices[bot]}`);
      } else if (bot === 2 && val === "მაკრატელი") {
        alert(`გილოცავთ თქვენ გაიმარჯვეთ\n${val} -> ${choices[bot]}`);
      } else {
        alert(`თქვენ დამარცხდით\n${val} -> ${choices[bot]}`);
      }
  
      // console.log(choices[bot]);
    }
  };
  
  //გამოიცანი სიტყვა
  
  function arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  
  const guessTheWord = () => {
    const words = ["მაკრატელი", "ქვა", "ჭა", "ქაღალდი", "გამარჯობა"];
    let wordIndex = Math.floor(Math.random() * words.length);
    const wordToGuess = words[wordIndex].split("");
    const word = [];
    let tries = prompt("შეიყვანეთ ცდების რაოდენობა");;
  
    console.log(wordToGuess);
    for (let i = 0; i < wordToGuess.length; i++) {
      word.push("_");
    }
  
    while (!arraysAreIdentical(word, wordToGuess) && tries > 0) {
      let letter = prompt(`
      გთხოვთ შეიყვანოთ ასო
  
      ${word.join(" ")}
  
      ცდების რაოდენობა: ${tries}
  
      `);
  
      if (letter === null) {
        break;
      }
  
      if (wordToGuess.includes(letter)) {
        wordToGuess.forEach((element, index) => {
          if (element === letter) {
            word[index] = letter;
          }
        });
        alert(`სიტყვაში არის ასო "${letter}"
  
        ${word.join(" ")}
        
        `);
      } else {
        tries--;
        alert(`
        სიტყვაში არის ასო "${letter}"
  
        ცდების რაოდენობა: ${tries}
  
        `);
      }
    }
  
    if (arraysAreIdentical(word, wordToGuess)) {
      alert("გილოცავთ თქვენ გამოიცანით სიტყვა");
    } else {
      alert("სამწუხაროდ თქვენ ვერ გამოიცანით სიტყვა");
    }
  };
  
  
  