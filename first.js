const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. – Aristotle",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "You miss 100% of the shots you don't take. – Wayne Gretzky"
];

// const parent = document.getElementById('display');
// const randomIndex = Math.floor(Math.random() * quotes.length);
// parent.textContent = quotes[randomIndex];
// after every 5 second changes
const quoteShow = ()=>{
    const parent = document.getElementById('display');
    const rabdomQouts = Math.floor(Math.random() * quotes.length);
    parent.textContent = quotes[rabdomQouts];

}

// Random background color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
    quoteShow();
    getRandomColor();
}, 2000);