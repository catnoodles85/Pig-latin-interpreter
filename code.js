const testVowelWords = {
  eat: "eat-yay",
  omelet: "omelet-yay",
  are: "are-yay",
  egg: "egg-yay",
  explain: "explain-yay",
  always: "always-yay",
  ends: "ends-yay",
  every: "every-yay",
  another: "another-yay",
  under: "under-yay",
  island: "island-yay",
  elegant: "elegant-yay",
};
const testSimpleConsonantWords = {
  latin: "atin-lay",
  banana: "anana-bay",
  happy: "appy-hay",
  duck: "uck-day",
  dopest: "opest-day",
  me: "e-may",
  too: "oo-tay",
  will: "ill-way",
  moist: "oist-may",
  wet: "et-way",
  real: "eal-ray",
  simple: "imple-say",
  say: "ay-say",
  bagel: "agel-bay",
  you: "ou-yay",
};
const testClusteredConsonantWords = {
  cheers: "eers-chay",
  shesh: "esh-shay",
  smile: "ile-smay",
  string: "ing-stray",
  thanks: "anks-thay",
  trash: "ash-tray",
  stupid: "upid-stay",
  glove: "ove-glay",
};


// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.


/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
        */
  
let text 
const searchBar = document.getElementById('input-Bar')
const outPutH2 = document.getElementById('output-Bar')
let value = searchBar.value 

searchBar.addEventListener("keydown", (e) => {
    value = e.target.value
    text = value
    outPutH2.innerText = encodeText(text) 
  });



  
function encodeVowelWord(word) {
  
    return word + "-yay";

}

//TEST:
function VowelWordTest() {
  console.assert(encodeVowelWord('eat') === 'eat-yay',{
    test: 'eat should equal: eat-yay',
    expected: 'eat-yay',
    result: encodeVowelWord('eat')
  })
  
  console.assert(encodeVowelWord('omelet') === 'omelet-yay',{
    test: 'omelet should equal: omelet-yay',
    expected: 'omelet-yay',
    result: encodeVowelWord('omelet')
  })
}
VowelWordTest();

/*  --------------------------------------------------------
encodeConsonantWord()

Encode words that begin with a consonant sound from english to pig latin.
For words that begin with consonant sounds, all letters before the initial vowel 
are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 

For example:
"latin" becomes "atin-lay"
"cheers" becomes "eers-chay"
    */
   

   
   
   function encodeConsonantWord(word) {
    
       let x = word[0];
       result = word.slice(1)
      return result + `-${x}ay`;
    }
  
  
    
    
    
  function encodeConsonantWordCluster(word){
    let vowels = [ "a","e","i","o","u"];
    for (let index = 0; index < vowels.length; index +=1) {
      let vowel = vowels[index];
     if (word[2] !== vowel) {
    return word.slice(2) + "-" + word.slice(0,2) +"ay"
    }
  }
}

  function encodeConsonantWordClusterThree(word){
    return word.slice(3) + "-" + word.slice(0,3) +"ay"
  }

function encodeConsonantWordTest(){
  console.assert(encodeConsonantWord('latin') === 'atin-lay',{
    test: 'latin should equal: atin-lay',
    expected: 'atin-lay',
    result: encodeConsonantWord('latin')
  })
  console.assert(encodeConsonantWord('banana') === 'anana-bay',{
    test: ' banana should equal: anana-bay ',
    expected: 'anana-bay',
    result: encodeConsonantWord('banana')
  })
}
encodeConsonantWordTest();
/*  --------------------------------------------------------
encodeWord()

Decide whether a given word starts with a vowel sound or consonant sound,
and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

For example:
"eat" becomes "eatyay" because it starts with a vowel "e"
"omelet" becomes "omeletyay" because it starts with a vowel "o"
"latin" becomes "atin-lay" because it starts with a consonant "l""
"cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
"you" becomes "ou-yay" because it starts with a consonant "y"
*/




function encodeWord(word) {
  let vowels = [ "a","e","i","o","u","A","E","I","O","U"];
  for (let index = 0; index < vowels.length; index +=1) {
    let vowel = vowels[index];
    if(word[0] === vowel){
      return encodeVowelWord(word);
    }if(word[1] === vowel){
      return encodeConsonantWord(word);
    }if (word[2] === vowel){
      return encodeConsonantWordCluster(word);
    }if (word[2] === vowel){
      return encodeConsonantWordCluster(word)
    }if(word[3] === vowel){
      return encodeConsonantWordClusterThree(word);
    }
}
}

function encodeWordTest(){
  
  console.assert(encodeWord('are') === 'are-yay',{
    test: 'are should equal: are-yay',
    expected: 'are-yay',
    result: encodeWord('are')
  })
  
  console.assert(encodeWord('cheers') === 'eers-chay',{
    test: 'cheers should equal: eers-chay ',
    expected: 'eers-chay',
    result: encodeWord('cheers')
  })
  
  console.assert(encodeWord('duck') === 'uck-day',{
    test: 'duck should equal: uck-day ',
    expected: 'uck-day',
    result: encodeWord('duck')
  })

  console.assert(encodeWord('string') === 'ing-stray', {
    test: 'string should equal ing-stray ',
    expected: 'ing-stray',
    result: encodeWord('string')
  })
}
encodeWordTest()









/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {
 
  let english = text.split(" ")
  let textArray = [];
  
  for (let index = 0; index < english.length; index += 1) {
    let result = encodeWord(english[index])
    textArray.push(result)
  }
  
  return textArray.join("");
  
   
 
}
//return text + "";

function encodeTextTest() {
  console.assert(encodeText('may the force be with you') === 'ay-may e-thay orce-fay e-bay ith-way ou-yay', {
    test: 'may the force be with you should equal ay-may e-thay orce-fay e-bay ith-way ou-yay ',
    expected: 'ay-may e-thay orce-fay e-bay ith-way ou-yay',
    result: encodeText('may the force be with you')
  })
  
  console.assert(encodeText('Put the lotion in the basket') === 'ut-Pay e-thay ion-lotay in-yay e-thay asket-bay', {
    test: 'Put the lotion in the basket should equal ut-Pay e-thay ion-lotay in-yay e-thay asket-bay ',
    expected: 'ut-Pay e-thay ion-lotay in-yay e-thay asket-bay',
    result: encodeText('Put the lotion in the basket')
  })
  console.assert(encodeText('Cowards die many times before their deaths only the valiant taste death but once') === 'ards-Coway e-diay any-may es-timay efore-bay eir-thay aths-deay only-yay e-thay aliant-vay aste-tay ath-deay ut-bay e-oncay', {
    test: 'Cowards die many times before their deaths only the valiant taste death but once should equal: ards-Coway e-diay any-may es-timay efore-bay eir-thay aths-deay only-yay e-thay aliant-vay aste-tay ath-deay ut-bay e-oncay ',
    expected: 'ards-Coway e-diay any-may es-timay efore-bay eir-thay aths-deay only-yay e-thay aliant-vay aste-tay ath-deay ut-bay e-oncay',
    result: encodeText('Cowards die many times before their deaths only the valiant taste death but once')
  })
}
encodeTextTest();