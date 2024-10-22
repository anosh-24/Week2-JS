// finding length of a string

const str = "                                         ok";
const length = str.length;
console.log(length);

// Removing the starting space of string 

const str = "                                         ok";
const trimmedStr = str.trimStart();
const length = trimmedStr.length;
console.log(length);

// checks if the length of a string is greater than 10 characters

function isLengthGreaterThan10(str) {
    return str.length > 10;
}

const exampleString = "Hello, Welcome";
const result = isLengthGreaterThan10(exampleString);

if (result) {
    console.log("The string is greater than 10 characters.");
} else {
    console.log("The string is 10 characters or less.");
}

// Given a sentence, find the length of the longest word in the sentence
function findLongestWordLength(sentence) {

    const words = sentence.split(/\s+/);
    let longestLength = 0;

    for (const word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    return longestLength;
}
const sentence = "Hello welcome to JavaScript Coding";
const longestWordLength = findLongestWordLength(sentence);
console.log("Length of the longest word:", longestWordLength);

// charAt() - returns the first and last character of a string

function getFirstAndLastCharacter(str) {
    if (str.length === 0) {
        return "The string is empty.";
    }
    const firstChar = str.charAt(0);
    const lastChar = str.charAt(str.length - 1);
    return {
        first: firstChar,
        last: lastChar
    };
}

const exampleString = "Hello, World!";
const result = getFirstAndLastCharacter(exampleString);
console.log("First character:", result.first);
console.log("Last character:", result.last);

    // Convert the sentence to lowercase

function containsJavaScript(sentence) {
    const lowerCaseSentence = sentence.toLowerCase();
    
    // Check if it contains the word "javascript"
    return lowerCaseSentence.includes("javascript");
}

// Example usage:
const exampleString = "I love learning JavaScript and building projects!";
const result = containsJavaScript(exampleString);

if (result) {
    console.log("The sentence contains the word 'javascript'.");
} else {
    console.log("The sentence does not contain the word 'javascript'.");
}

// convert the first character to uppercase and the rest to lowercase.

function capitalizeFirstCharacter(str) {
    if (str.length === 0) {
        return "The string is empty.";
    }
    
    const firstChar = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1).toLowerCase();
    
    return firstChar + restOfString;
}

// Example usage:
const exampleString = "hELLO, wORLD!";
const result = capitalizeFirstCharacter(exampleString);
console.log("Converted string:", result);


// Use indexOf() to check if the word exists in the sentence


function containsWord(sentence, word) {
    
    return lowerCaseSentence.indexOf(lowerCaseWord) !== -1;
}

const exampleString = "The quick brown fox jumps over the lazy dog.";
const wordToCheck = "FOX";
const result = containsWord(exampleString, wordToCheck);

if (result) {
    console.log(`The word "${wordToCheck}" exists in the sentence.`);
} else {
    console.log(`The word "${wordToCheck}" does not exist in the sentence.`);
}

// Use indexOf() to find the first occurrence of the character

function findFirstOccurrenceIndex(str, char) {
    const index = str.indexOf(char);
    
    if (index !== -1) {
        return index;
    } else {
        return "Character not found in the string.";
    }
}
const exampleString = "Hello, World!";
const characterToFind = "o";
const result = findFirstOccurrenceIndex(exampleString, characterToFind);
console.log(`The first occurrence of "${characterToFind}" is at index:`, result);
    

// Using slice()

function extractFirstFiveCharacters(str) {
    const firstFiveSlice = str.slice(0, 5);
    
    const firstFiveSubstring = str.substring(0, 5);
    
    return {
        slice: firstFiveSlice,
        substring: firstFiveSubstring
    };
}

const exampleString = "Hello, World!";
const result = extractFirstFiveCharacters(exampleString);

console.log("First 5 characters using slice():", result.slice);
console.log("First 5 characters using substring():", result.substring);


// Ensure the indices are within the valid range

function extractSubstring(str, startIndex, endIndex) {
    if (startIndex < 0 || endIndex > str.length || startIndex >= endIndex) {
        return "Invalid indices.";
    }
    
    const substring = str.slice(startIndex, endIndex);
    return substring;
}

const exampleString = "Hello, World!";
const startIndex = 7; 
const endIndex = 12; 
const result = extractSubstring(exampleString, startIndex, endIndex);

console.log("Extracted substring:", result);


// Use the replace method with a regular expression to replace spaces with underscores

function replaceSpacesWithUnderscores(sentence) {
    return sentence.replace(/ /g, '_');
}


const exampleSentence = "Hello World! How are you?";
const result = replaceSpacesWithUnderscores(exampleSentence);

console.log("Modified sentence:", result);


// Find the index of the first occurrence of the target character


function replaceFirstOccurrence(str, targetChar, replacementChar) {
    const index = str.indexOf(targetChar);
    
    if (index !== -1) {
        return str.slice(0, index) + replacementChar + str.slice(index + 1);
    } else {
        return "Character not found in the string.";
    }
}

const exampleString = "Hello, World!";
const targetCharacter = "o";
const replacementCharacter = "a";
const result = replaceFirstOccurrence(exampleString, targetCharacter, replacementCharacter);

console.log("Modified string:", result);


// Use the split method to divide the string by commas

function splitCommaSeparatedString(str) {
    return str.split(',');
}

const exampleString = "apple,banana,cherry,dates";
const result = splitCommaSeparatedString(exampleString);

console.log("Array of values:", result);


// Use the split method to divide the sentence into individual characters

function splitSentenceIntoCharacters(sentence) {
    return sentence.split('');
}
const exmpleSentence = "Hello, World!";
const result = splitSentenceIntoCharacters(exampleSentence);

console.log("Array of characters:", result);


// Check for leading or trailing spaces

function trimLeadingAndTrailingSpaces(str) {
    const hasLeadingOrTrailingSpaces = str !== str.trim();

    const trimmedString = str.trim();

    return {
        hasSpaces: hasLeadingOrTrailingSpaces,
        trimmed: trimmedString
    };
}
const exampleString = "   Hello, World!   ";
const result = trimLeadingAndTrailingSpaces(exampleString);

console.log("Has leading or trailing spaces:", result.hasSpaces);
console.log("Trimmed string:", result.trimmed);


// Use the map method to trim whitespace from each name

function cleanUpNames(names) {
    return names.map(name => name.trim());
}
const namesWithSpaces = [
    "   Alice   ",
    "   Bob  ",
    " Charlie ",
    "    David   ",
    "Eve   "
];
const cleanedNames = cleanUpNames(namesWithSpaces);

console.log("Cleaned names:", cleanedNames);


// Check if the string includes "javascript"

function containsJavaScript(str) {
    
    return lowerCaseStr.includes("javascript");
}

const exampleString = "I love programming in JavaScript!";
const result = containsJavaScript(exampleString);

if (result) {
    console.log("The string contains the word 'JavaScript'.");
} else {
    console.log("The string does not contain the word 'JavaScript'.");
}


// Check if the sentence includes the specified word

function includesWord(sentence, word) {  
    return lowerCaseSentence.includes(lowerCaseWord);
}

const exampleString = "The quick brown fox jumps over the lazy dog.";
const wordToCheck = "fox";
const result = includesWord(exampleString, wordToCheck);

console.log(result);


// Check if the email contains the "@" symbol

function isValidEmail(email) {
    return email.includes('@');
}

const emailAddress = "example@example.com";
const result = isValidEmail(emailAddress);

if (result) {
    console.log("The email address includes the '@' symbol.");
} else {
    console.log("The email address does not include the '@' symbol.");
}


// Concatenation

function concatenateWithSpace(str1, str2) {
    return str1 + ' ' + str2;
}

const String1 = "Hello";
const String2 = "World!";
const result = concatenateWithSpace(String1, String2);

console.log("Concatenated string:", result);

// Concates first name and last name

function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

const firstName = "Anosh";
const lastName = "Ghafoor";
const fullName = createFullName(firstName, lastName);

console.log("Full name:", fullName);


// Use the join method to concatenate words with a space

function concatenateWordsToSentence(words) {
    return words.join(' ');
}

const wordsArray = ["This", "is", "a", "sentence."];
const sentence = concatenateWordsToSentence(wordsArray);

console.log("Concatenated sentence:", sentence);





