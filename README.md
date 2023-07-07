# Customizable T-Shirt Website

This project is a website that allows users to customize the color and logo of a 3D T-shirt model. The website is built using Three.js, React,Node,Express and the OpenAI API.

## Features

- Users can upload their own images to customize the logo on the T-shirt.
- Users can select different colors for the T-shirt using a color picker.
- Users can utilize the OpenAI API to generate custom images for the T-shirt logo and even full Tshirt Texture.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Three.js: A 3D graphics library that allows us to render the T-shirt model.
- OpenAI API: Used to generate custom images for the T-shirt logo.

## Installation

1. Clone the repository: `git clone https://github.com/MohdDilshad-nitk/Custom_Tshirt_Designer`
2. Navigate to the project directory: `cd your-repo`
3. Install the dependencies: `npm install`
4. Set up your OpenAI API key by following the instructions provided by OpenAI.
5. Start the development server: `npm start`

## Configuration

To configure the OpenAI API key, you'll need to create a `.env` file in the root of your project directory and add the following line:

```
OPENAI_API_KEY=your-api-key
```

Replace `your-api-key` with your actual OpenAI API key.

## Usage

Once the development server is running, open your web browser and navigate to `http://localhost:3000` to access the website. From there, users can interact with the 3D T-shirt model, customize the color, and upload or generate images for the logo.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-branch`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin my-branch`
5. Submit a pull request.

## Acknowledgements

- The [Three.js](https://threejs.org/) community for providing an excellent library for 3D graphics.
- The [React](https://reactjs.org/) team for creating a powerful and intuitive framework for building user interfaces.
- The [React three/fiber](https://www.npmjs.com/package/@react-three/fiber) and [three/drei](https://www.npmjs.com/package/@react-three/drei) team for creating a powerful package for seamless integration of react with three js
- The [React Color](https://www.npmjs.com/package/react-color) package for providing a beautiful yet customisable color Picker
- OpenAI for their API, enabling us to generate custom images for the T-shirt logo.
