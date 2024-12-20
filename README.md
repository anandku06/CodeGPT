# CodeGPT

**CodeGPT** is a lightweight, browser-based tool that uses your OpenAI API key to suggest the most optimized JavaScript solutions for your problem statements. This simple and intuitive tool helps developers save time and write efficient code.

## Features

- **Optimized JavaScript Solutions**: Get concise and efficient solutions tailored to your problem statements.
- **User-Friendly Interface**: Simply paste your OpenAI API key and input your problem statement.
- **No Dependencies**: Built entirely with HTML, CSS, and JavaScript, running directly in your browser.

## How It Works

1. Enter your OpenAI API key into the input field.
2. Describe your problem in the prompt box.
3. Click the "Generate Solution" button to receive the most optimized JavaScript solution.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/anandku06/CodeGPT.git
   cd CodeGPT
   ```

2. Open the `index.html` file in your browser.

3. Enter your OpenAI API key, provide a problem statement, and get the solution instantly.

## Project Structure

```plaintext
.
├── index.html        # Main HTML file
├── styles.css        # Styling for the interface
├── script.js         # Core JavaScript logic
└── README.md         # Project documentation
```

## Example

1. **Input**  
   Problem Statement:  
   _Write a function to check if a number is prime._

2. **Output**  
   Suggested Solution:  
   ```javascript
   function isPrime(num) {
     if (num <= 1) return false;
     for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) return false;
     }
     return true;
   }
   ```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Make changes directly in the HTML, CSS, or JavaScript files.
3. Open a pull request with a detailed description of your changes.
