//Mini Linter with a story

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
//duz yaziyi 'bosluk'lardan array haline parcaladik
let storyWords = story.split(' ');


//unneccessaryWord is removed from storywords
let betterWords = storyWords.filter(function(word){
  return !unnecessaryWords.includes(word)
})
////console.log(storyWords.length)
console.log(betterWords.length)
// recognise the count of overusedWords

//deneme for 4th sonuc olan 39 ilk relly kelimesinin gectigi element
let cokKullanilan = storyWords.findIndex(function(word){
  return overusedWords.includes(word)
})

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for(word of storyWords){
  if (word === "really"){
    reallyCount += 1
  } else if (word === "very"){
    veryCount += 1
  } else if (word === "basically"){
    basicallyCount += 1
  }
}
let overusedWordsCount = reallyCount + veryCount + basicallyCount; 

console.log("really count:", reallyCount)
console.log("really very:", veryCount)
console.log("basically count:", basicallyCount)



//sentences count at the paragrapgh with 2 ways
let sentencesCount = 0;

for (word of storyWords){
  if (word[word.length -1] === "." || word[word.length -1] === "!") {
   sentencesCount +=1
  }
}
//console.log(sentencesCount)


let sentencesCount2 = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentencesCount2 +=1;
  }
});

//console.log(sentencesCount2)

// LOG to console 

console.log('The word count:', storyWords.length)
console.log('The sentence count:', sentencesCount)
console.log("really count:", reallyCount)
console.log("really very:", veryCount)
console.log("basically count:", basicallyCount)
console.log('The number of times each overused words appers:', overusedWordsCount)

//Log to console with function
/*
const logInfo = (storyWords, sentencesCount, overusedWordsCount) => {
console.log('The word count:', storyWords.length);
console.log('The sentence count:', sentencesCount);
console.log('The number of times each overused words appers:', overusedWordsCount);
}
*/
const betterWordsString = betterWords.join(' ');
console.log(betterWordsString);

/*
//START Replaced overused words with something else.

for (word of storyWords){
  if (word === "very"){
    "very" == "BIG";
  }
}
const storyWordsString = storyWords.join(' ')
console.log('!!!!!!START!!!!!!', storyWordsString)
//FINISH Replaced overused words with something else.
*/