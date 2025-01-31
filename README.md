# Wordle

## Overview

This is a React-based clone of the popular word game Wordle. The game allows users to guess a five-letter word within 6 attempts, providing feedback on letter accuracy with each guess.

## Features

- Interactive word-guessing gameplay
- Keyboard input and virtual keyboard support
- Real-time feedback for correct, misplaced, and incorrect letters
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend:** React, TailwindCSS, HeroIcons
- **Build Tools:** Vite

## Live Demo

[Click here to visit live demo](https://unique-faloodeh-905270.netlify.app/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arevi/wordle.git
   ```

2. Navigate to the project directory:

   ```bash
   cd wordle
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

- Open `http://localhost:5173` in your browser.
- Enter your guesses
- Press "Enter" to submit your guess.
- The game will provide feedback for each letter:

  - **Green**: Correct letter in the correct position.
  - **Yellow**: Correct letter in the wrong position.
  - **Gray**: Incorrect letter.

- Win by guessing the word within 6 attempts!

## Deployment

To build the project for production, run:

```bash
npm run build
```

Deploy the `dist/` folder using any static site hosting provider (e.g., Vercel, Netlify, GitHub Pages).

## Contribution

Pull requests are welcome! Please follow the contribution guidelines:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For issues or suggestions, please open an issue in the GitHub repository.
