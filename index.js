

  $('#changeVerse').click((e)=> {
    console.log("clicked!!!!1");
    let verseIndex, prevIndex;
    const generateRand = () => {
      verseIndex = Math.floor(Math.random() * verses.length );
      console.log('verseIndex', verseIndex);
      console.log('prevIndex', prevIndex);

      if (prevIndex && verseIndex === prevIndex) {
        console.log('recurse')
        generateRand();
      }
      return verseIndex;
    }
    generateRand();
    console.log(verseIndex);
    console.log(verses[verseIndex].verse);
    $('#quote').text(verses[verseIndex].verse);
    $('#author').text(verses[verseIndex].location);
    prevIndex = verseIndex;


  });
