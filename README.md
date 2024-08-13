# Burk Movies Frontend

Welcome to the Burk Movies Frontend project! This application provides a modern and responsive interface for exploring and managing a movie collection. Built with Next.js 14 and Tailwind CSS, it leverages server-side rendering and offers a seamless user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Environment Variables](#environment-variables)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Page**:

  - Displays a search bar for discovering movies and series.
  - Features sections for trending movies and series.
  - Shows movies currently in cinemas.

- **Search List Page**:

  - Displays results of searched movies and series.

- **Movie Details Page**:
  - Provides detailed information about a specific movie.

## Technologies Used

- **Next.js 14**: A React framework for building server-rendered or statically-exported web applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Colorthief**: Extracts prominent colors from images.
- **Framer Motion**: Animations for React components.
- **Node Vibrant**: A color extraction library for vibrant color generation.
- **TypeScript**: Adds static types to JavaScript.
- **Cypress**: End-to-end testing framework.
- **ESLint & Prettier**: Code quality and formatting tools.

## Installation

To get started with the Burk Movies Frontend, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yuriburk/burk-movies-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd burk-movies-frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a .env file in the root directory and add your environment variables. You can use the following template:

   ```env
   NEXT_PUBLIC_API_LINK=http://localhost:3000/api/
   MOVIE_API_LINK=https://api.themoviedb.org/3/
   MOVIE_API_TOKEN=your_api_token_here
   ```

Replace your_api_token_here with your actual API token from The Movie Database (TMDb).

5. Start the development server:

   ```bash
   npm run dev
   ```

Your application will be available at http://localhost:3000.

## Components Directory Structure

### `components/`

- **`common/`**: Reusable, generic components used throughout the application.
- **`pages/`**: Components specific to individual pages or views.
- **`structures/`**: Components related to layout and feature-specific structures.
  - **`layouts/`**: Components defining the overall page layout.
  - **`features/`**: Components tied to specific features or functionalities.
    - **`name/`**: Components for a specific feature.
      - **`common/`**: Components common for a specific feature.
      - **`sections/`**: Components representing distinct sections of a feature.

## Running Tests

To run components tests with Cypress:

```bash
npm run cypress:component
```

## Contributing

We welcome contributions to the Burk Movies Frontend project! If you'd like to contribute, please follow these steps:

Fork the repository and clone your fork locally.

Create a new branch for your changes:

```bash
git checkout -b my-feature-branch
```

Make your changes and commit them:

```bash
git commit -m "Add some feature"
```

Push your changes to your fork:

```bash
git push origin my-feature-branch
```

## License

This project is licensed under the MIT License.
