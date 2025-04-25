function slowPrint(text, speed, elementId) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id "${elementId}" not found.`);
        return;
    }
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}
const randomTexts = [
    "Welcome to my portfolio!",
    "Explore my projects and skills.",
    "Feel free to reach out to me.",
    "Thank you for visiting!",
    "Check out my latest work."
];

let currentIndex = 0;
// Function to print the next text in the randomTexts array
function printNextText() {
    const element = document.getElementById("info");
    if (element) {
        element.textContent = ""; // Clear previous text
    }
    // Use slowPrint to display the current text
    slowPrint(randomTexts[currentIndex], 100, "info");
    // Update the index to the next text, looping back to the start if necessary
    currentIndex = (currentIndex + 1) % randomTexts.length;
    // Calculate the delay for the next text based on the current text length and add a pause
    setTimeout(printNextText, randomTexts[currentIndex === 0 ? randomTexts.length - 1 : currentIndex - 1].length * 100 + 5000);
}

printNextText();
