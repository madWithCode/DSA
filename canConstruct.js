/* 

Given an arbitrary ransom note string and another string containing letters from all the magazines, 
write a function that will return true if the ransom note can be constructed from the magazines ; 
otherwise, it will return false.

 Each letter in the magazine string can only be used once in your ransom note.

 Note:
 You may assume that both strings contain only lowercase letters.

 canConstruct("a", "b") -> false
 canConstruct("aa", "ab") -> false
 canConstruct("aa", "aab") -> true

*/

//Sol:1
/* 
Create char array of size 26 and fill with zero , use codePointAt - to get char code (a -> 97) ,
increament array at index for every char in magazine,
next for each character in ransomNote decerement the value, check if array has any negative values 
*/
   
var canConstruct = function(ransomNote, magazine) {
    let magazineLength = magazine.length;
    
    const data = new Array(26).fill(0);
    for(let i = 0; i < magazine.length; i++){
        let indexVal = magazine.codePointAt(i) - 97;
        data[indexVal]++;
    }
    
    for(let i = 0; i < ransomNote.length; i++){
        let indexVal = ransomNote.codePointAt(i) - 97;
        data[indexVal]--;
    }
    
    return data.every(value => value >= 0);
};

//sol:2
/* 
This is inplace solution if char in ransomnote is found in magazine, then replace the char in magazine with empty string, 
so that we take care of repeated characters, if char is not found retuen false
*/
var canConstructSol2 = function(ransomNote, magazine) {
    let chars = ransomNote.split('');
    let magChars = magazine.split('');
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (magChars.includes(chars[i])) magChars[magChars.indexOf(chars[i])] = '';
        else return false;        
    }
    
    return true;
};
