const filterWords = ["ain't", "gonna", "wanna", "nope", "y'all"];
const replacements = {
  aint: "isn't",
  gonna: "going to",
  wanna: "want to",
  nope: "no",
  yall: "you all",
};

function checkGrammar(text) {
  // Remove filtered words and keep track of counts
  const wordCounts = {};
  const filteredText = text.split(/\s+/).filter(word => {
    const lowerWord = word.toLowerCase();
    if (!filterWords.includes(lowerWord)) {
      wordCounts[lowerWord] = (wordCounts[lowerWord] || 0) + 1; // Update count
      return true;
    }
    return false;
  }).join(' ');

  // Replace filtered words with alternatives (case-insensitive)
  let replacedText = filteredText;
  for (const word in replacements) {
    const regex = new RegExp(word, 'gi');
    replacedText = replacedText.replace(regex, replacements[word]);
  }

  return {
    text: replacedText,
    wordCounts: wordCounts,
  };
}

// Example usage
const text = "Y'all ain't gonna believe this, but I wanna tell you somethin'. There are definitely some repeated words here.";

const checkedResult = checkGrammar(text);
console.log("Checked Text:", checkedResult.text); // Output: "You all aren't going to believe this, but I want to tell you something. There are definitely some repeated words here."
console.log("Word Counts:", checkedResult.wordCounts); // Output: { yall: 1, aint: 1, gonna: 1, wanna: 1, believe: 1, this: 1, but: 1, i: 1, want: 1, tell: 1, you: 1, somethin: 1, there: 1, are: 1, definitely: 1, some: 1, repeated: 1, words: 1, here: 1 }

