const apiKey = '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'

const apiURL = 'https://api.openai.com/v1/chat/completions'

async function postData() {
    const message = document.querySelector('#message').value

    fetch(apiURL, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            "Authorization" : `Bearer ${apiKey}`
        },
        body : JSON.stringify({
            "model" : "gpt-3.5.turbo",
            "messages" : {
                "role" : "user",
                "content" : `Write an optimised JavaScript code for this problem statement ${message}`
            }
        })
    })
}