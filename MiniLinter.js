let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];


let storyWords = story.split(' ');
// console.log(storyWords.length);
// console.log(storyWords);



const betterWords = storyWords.filter(n => {
    return (!unnecessaryWords.includes(n))
});

console.log(`Word count: ${betterWords.length}`);
// console.log(betterWords);
console.log();



// To show how many times items in one array appear in another
function findOverused(array1, array2) {
    let countOverused = 0;
    for (i of array1) {
        // console.log(i);
        for (j of array2) {
            // console.log(countOverused);
            if (i === j) {
                countOverused += 1;

            }
        }
    }
    return countOverused;
}

console.log('Tot overused words: ' + findOverused(storyWords, overusedWords));
console.log();
console.log();


let reallyTot = 0;
let veryTot = 0;
let basicallyTot = 0;

for (word of storyWords) {
    if (word === 'really') {
        reallyTot += 1;
    } else if (word === 'very') {
        veryTot += 1;
    } else if (word === 'basically') {
        basicallyTot += 1;
    }
}

console.log(`really appears ${reallyTot} times`);
console.log();
console.log(`very appears ${veryTot} times`);
console.log();
console.log(`basically appears ${basicallyTot} times`);
console.log();




// to count how many sentences in the text

let sentences = 0;
storyWords.forEach(word => {
    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        sentences += 1;
    }
});
console.log(`There are ${sentences} sentences`);
console.log();
console.log();




// to log the array to the console as a single string.
console.log(betterWords.join(' '));
console.log();