/*
given the string, check if it is a palindrome.
 */
export function checkPalindrome(inputString: string): boolean {
    var i: number;
    var length: number = inputString.length;

    for(i = 0; i < length / 2; i++) {
        // console.log(`input[${i}] = ${inputString.charAt(i)}\ninput[${length - i - 1}] = ${inputString.charAt(length - i - 1)}\n\n`);

        if (inputString.charAt(i) !== inputString.charAt(length - i - 1)) {
            return false;
        }
    }
    return true;
}