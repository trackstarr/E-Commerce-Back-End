# E-Commerce Backend

## Description

This is a back-end application for an e-commerce site. It uses Express.js for routing, Sequelize as an ORM to interact with a MySQL database, and dotenv for environment variables.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Models](#models)
- [API Endpoints](#api-endpoints)
- [Future Enhancements](#future-enhancements)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running `npm install`.
4. Create a `.env` file in the root directory and add your database credentials.

## Usage

To start the server, run `npm start` in your terminal.

## Models

The application uses Sequelize to define four models:

- Product
- Category
- Tag
- ProductTag

These models have relationships defined as follows:

- A Product belongs to a Category.
- A Category can have many Products.
- A Product can belong to many Tags (through ProductTag).
- A Tag can belong to many Products (through ProductTag).

## API Endpoints

The application provides the following API endpoints:

- `GET /api/categories`
- `GET /api/categories/:id`
- `POST /api/categories`
- `PUT /api/categories/:id`
- `DELETE /api/categories/:id`

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

- `GET /api/tags`
- `GET /api/tags/:id`
- `POST /api/tags`
- `PUT /api/tags/:id`
- `DELETE /api/tags/:id`

## Future Enhancements

In the future, I plan to implement:

- User authentication.
- Order management.
- Payment processing.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
