// const apiKey

// const apiURL = 'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateMessage';

// async function postData() {
//     const message = document.querySelector('#message').value;

//     try {
//         const response = await fetch(apiURL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${apiKey}`,
//             },
//             body: JSON.stringify({
//                 "messages": [
//                     {
//                         "role": "system",
//                         "content": "You are a helpful assistant",
//                     },
//                     {
//                         "role": "user",
//                         "content": `Write an optimized JavaScript code for this problem statement: ${message}`,
//                     }
//                 ]
//             }),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Generated Response:', data);
//     } catch (error) {
//         console.error(error);
//     }
// }

async function postData() {
    const {GoogleGenerativeAI} = require("@google/generative-ai")

    const genAI = new GoogleGenerativeAI('AIzaSyDeaKiCuFjcN5-fOyfjY0hB-bTDaFNqyZw')
    const model = genAI.getGenerativeModel({model : 'gemini-1.5-flash'})

    const prompt = document.getElementById('message').value

    const result = await model.generateContent(prompt)

    console.log(result)
}