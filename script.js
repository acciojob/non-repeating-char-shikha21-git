//your JS code here. If required.
function firstNonRepeatingChar(str)
{
    const charCount = new Map();
    for(const char of str)
    {
        charCount.set(char, (charCount.get(char) || 0)+1);
    }
    for(const char of str)
    {
        if(charCount.get(char) === 1)
        {
            return char;
        }
    }
    return null;
}
const userInput = prompt("Enter a string");
const result = firstNonRepeatingChar(userInput);
if(result){
    alert(result);
}