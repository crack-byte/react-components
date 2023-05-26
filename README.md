# React Components

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/crack-byte/react-components/blob/master/LICENSE)

Welcome to the React Components repository! This repository contains a collection of reusable React components developed by Crack Byte. These components can be used to enhance your React projects and speed up your development process.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the React Components, you can use npm or yarn. Run the following command to install the package:

```bash
npm install react-components
```
or
```bash
yarn add react-components
```

## Usage
```javascript
import React from 'react';
import {ChatBox } from '@crack-byte/react-components';

function App() {
  return (
    <div>
      <ChatBox messageList={[
        { name: 'John', text: 'Hello' },
        { name: 'Jane', text: 'Hi' }
      ]}></ChatBox>
    </div>
  );
}

export default App;


```

## Contributing

We welcome contributions from the community to improve and add new features to the React Components. To contribute, follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your forked repository.
- Submit a pull request to the main branch of this repository.

## License
This project is licensed under the MIT License. Feel free to use the React Components in your projects, both personal and commercial. Attribution is not required but appreciated.
