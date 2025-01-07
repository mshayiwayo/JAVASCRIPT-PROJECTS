let SpecialChar = ['!', '@', '#', '$', '^', '&', '*', '(', ')', '-', '_', '+', '+', '/', '<', '>', ',', '.', '/'];
let famousQuotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don\'t judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Failure is the condiment that gives success its flavor. - Truman Capote",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Your time is limited, so don\'t waste it living someone else\'s life. - Steve Jobs",
    "Don\'t let the noise of others\' opinions drown out your own inner voice. - Steve Jobs",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Genius is one percent inspiration and ninety-nine percent perspiration. - Thomas Edison",
    "The best revenge is massive success. - Frank Sinatra",
    "An unexamined life is not worth living. - Socrates",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "I think, therefore I am. - René Descartes",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "That which does not kill us makes us stronger. - Friedrich Nietzsche",
    "The unexamined life is not worth living. - Socrates",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "What we think, we become. - Buddha",
    "Happiness depends upon ourselves. - Aristotle",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Dream big and dare to fail. - Norman Vaughan",
    "Turn your wounds into wisdom. - Oprah Winfrey",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Believe and act as if it were impossible to fail. - Charles Kettering",
    "Act as if what you do makes a difference. It does. - William James",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Success is how high you bounce when you hit bottom. - George S. Patton",
    "When you have a dream, you\'ve got to grab it and never let go. - Carol Burnett",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To handle yourself, use your head; to handle others, use your heart. - Eleanor Roosevelt",
    "Keep going. Be all in. - Bryan Hutchinson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "It always seems impossible until it\'s done. - Nelson Mandela",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The harder I work, the luckier I get. - Samuel Goldwyn"
];
const generateMessage = () => {
    let randomNumber = Math.floor(Math.random()* 29);
    let randomFamousQuote = famousQuotes[Math.floor(Math.random()*(famousQuotes.length - 1))];
    let randomSpecialChar = SpecialChar[Math.floor(Math.random()*(SpecialChar.length - 1))];

    const message = `${randomNumber} ${randomFamousQuote} ${randomSpecialChar}`;
    const messageContainer = document.getElementById("message-container");
    messageContainer.innerHTML = `<div class="message-block">${message}</div>`;
    messageContainer.style.display = 'block';

    const button = document.getElementById("generate-btn");
    button.disabled = true;
    button.style.backgroundColor = "#808080"; // Change the color to indicate it's disabled
    button.style.cursor = "not-allowed";
}

document.getElementById("generate-btn").addEventListener("click", generateMessage);


