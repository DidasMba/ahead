const printStringStats = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    const wordCount = wordArray.length;
    let letterCount = 0;
    for (let word of wordArray) {
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      letterCount += word.length;
    }
    const averageWordLength = parseFloat((letterCount / wordCount).toFixed(2));
    const stringStats = {
      wordCount: wordCount,
      letterCount: letterCount,
      averageWordLength: averageWordLength
    };
    console.log(stringStats);
    console.log(stringsta) 
   }
