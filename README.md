# Blank Boilerplate CI/CD Yarn v4 Project

Welcome to the Blank Boilerplate Frontend project. 

This project is a React application utilizing TailwindCSS for styling and Ethers.js for blockchain interactions. It is configured to use Yarn v4 as the package manager. It does use Github CI/CD.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)

## Installation

To install the dependencies for this project, run:

```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn eject`

This command will remove the single build dependency from your project. **Note: this is a one-way operation. Once you \`eject\`, you can’t go back!**

### `yarn serve`

Serves the production build of the app using a static server.

## Project Structure

```
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── Components
│   ├── Pages
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .gitignore
├── .yarn
│   ├── releases
│   └── install-state.gz
├── .yarnrc.yml
├── config-overrides.js
├── craco.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── yarn.lock
```

### CI/CD Process

This project uses GitHub Actions for Continuous Integration and Continuous Deployment. The branches below may be present partially or completely.

- **Production Branch**: Code pushed to the `prod` branch will trigger the CI/CD pipeline, which will build and deploy the application to the production environment.
- **Staging Branch**: Code pushed to the `staging` branch will trigger the CI/CD pipeline, which will build and deploy the application to the staging environment.
- **Development Branch**: The `dev` branch is used for development purposes and does not trigger any CI/CD pipeline.

The CI/CD process is defined in the `.github/workflows` directory and includes steps such as checking out the repository, setting up Node.js, installing dependencies, building the project, creating a Docker image, and deploying it to the server.

## Contributing

Happy coding <(0_0)

