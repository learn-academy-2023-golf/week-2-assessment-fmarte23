// // ASSESSMENT 2: Coding Critique with AI

// // Enter the following prompt into ChatGPT or similar AI tool.

// // Prompt: Create a function that takes in a string and logs the index of the first vowel.

// // Copy and paste the code output here.

// def find_first_vowel_index(input_string):
//     vowels = "aeiouAEIOU"
//     for index, char in enumerate(input_string):
//         if char in vowels:
//             return index
//     return -1  # Return -1 if no vowel is found in the string

// # Example usage:
// input_string = "Hello, World!"
// index = find_first_vowel_index(input_string)
// if index != -1:
//     print(f"The first vowel is at index {index}.")
// else:
//     print("No vowels found in the string.")


// // Critique the code output. 
// This function iterates through the characters in the input string and checks if each character is a vowel. If it finds a vowel, it returns the index of that character. If no vowels are found in the string, it returns -1 to indicate that there are no vowels in the string.

// // Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 
// This function does not appear to log the index of the first vowel, but if ran this will return index because char has a vowel and then it will evaluate Hello, World at should have e as the output. 