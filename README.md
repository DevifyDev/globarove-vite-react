# Globarove

## Description

**Globarove** is a blog platform dedicated to sharing travel news and articles. Developed as a portfolio project, its' primary goal is to impress future employers and peers by demonstrating proficiency in various modern web development technologies. The application was built using Vite and React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Future Functionality](#future-functionality)
- [License](#license)
- [Contact Information](#contact-information)

## Installation and Usage

To get a local copy up and running follow these simple steps:

1. Clone the repo:
    ```sh
    git clone https://github.com/DevifyDev/globarove-vite-react.git
    ```
2. Navigate to the project directory:
    ```sh
    cd globarove-vite-react
    ```
3. Remove .git and node modules
    ```sh
    rm -rf .git
    ```
    ```sh
    rm -rf node_modules package-lock.json
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    ```sh
    npm install vite
    ```
    ```sh 
    npm install react
    ```
    ```sh 
    npm install react-router-dom
    ```
    ```sh 
    npm install dompurify

4. Set up environment variables:
     ```sh
    npm install dotenv
    ```
    Create a [`.env`]file in the root directory and add your environment variables.

5. Start the development server:
    ```sh
    npm run dev
    ```

To use the application, open your browser and navigate to `http://localhost:5173`

## Features

- **Dynamic Content Management**: Data is stored within an internal file, and is displayed using a React component and template string.
- **CSS Animations**: Animations are used on the Home Page to display website taglines and headings.
- **Navigation and Routing**: The application uses React Router 6 to navigate to the news article pages.
- **Interactive Image Carousel**: The card carousel demonstrates the use of React Hooks.
- **Form**: A form that includes submission logic, a submission popup and an API call.

## Future Functionality

- **React Helmet Async**: Provide unique meta tags for blog articles and improve SEO.
- **NoSQL Database**: Storing data in an external database to improve site loading time.
- **AI assistant**: Improve user experience on website.

## License

Distributed under the MIT License.

## Contact Information

- **Tony Young** - [Email](dev@devify.dev)
- **Project Link** - [globarove.com](https://www.globarove.com)


