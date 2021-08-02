## Ecommerce Product Search

> Ecommerce Product Search - Simple search form (text input and button) and Product grid which contains a list of products relevant for the search term submitted in the form. The grid must be paginated and display 96 elements per page. Navigation between the pages must be intuitive with an option to go to the first and the last pages

The product data is available via GraphQL by the following URL: https://coding-challenge.bstn.com/graphql. For the documentation and query examples refer to the official Magento 2 website: https://devdocs.magento.com/guides/v2.3/graphql/queries/products.html

## Getting Started

Download the project/Clone the repo - `git clone https://github.com/parveen-rcciit/ecom-product-search.git`

## Installation
* Install dependencies by running `yarn`

## Run

Use `yarn start` to run the program.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Scripts

- `yarn start` : Run the program.
- `yarn test` : Run all the tests.
- `yarn test:coverage` : Run test coverage report.
- `yarn pretty` : Run pretiier for all .tsx files.

## Few points to note:

1. Displays all products on load of app without any search filter
2. Responsive design is supported upto 320px(smaller devices)
3. Test cases added using react-testing-library with 90% coverage

