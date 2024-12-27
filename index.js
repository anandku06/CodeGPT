// const apiKey = ''

// const apiURL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

// async function postData() {
//     const message = document.querySelector('#message').value;
//     // const message = "fibonacci sequence";

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
//                         "content": `Write an optimized JavaScript code for this problem statement: ${message.trim()}`,
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
import { GoogleGenerativeAI } from "@google/generative-ai"

// const {GoogleGenerativeAI} = require("@google/generative-ai")
async function postData() {
    try{
        const genAI = new GoogleGenerativeAI() // your API key here
        const model = genAI.getGenerativeModel({model : 'gemini-1.5-flash'})

        const message = document.querySelector('#message')
        const prompt = message.value.trim()

        if(!prompt){
            alert("Prompt is empty!!")
            return
        }

        const result = await model.generateContent(prompt)

        console.log(result.response.text())
        const card = document.createElement('pre')
        card.innerHTML = result.response.text()

        document.querySelector('#chat-area').appendChild(card)
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
}

document.querySelector('button').addEventListener('click', postData)

// postData()
