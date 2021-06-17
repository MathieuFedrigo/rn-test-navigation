# React Native - test navigation

The ultimate guide on how to test the navigation in React native.

## Run project in development

- Setting up the development environment: https://reactnative.dev/docs/environment-setup.

- Install dependencies: `yarn install`

- Run on Android/iOS/Real device: `expo start`

- Run all test: `yarn test`

- Run all test with coverage: `yarn test:coverage`

## All kinds of tests

Here are all the possible test you can run:

- Unit tests:
    - Basic navigate test with navigation mocked locally 👉 `src/tests/unit/Home.component.test.tsx`
- Integration tests:
    - Navigation between pages 👉 `src/tests/integration/navigation-between-pages.test.tsx`
    - Interaction with nav header & nav params 👉 `src/tests/integration/navigation-header-and-params.test.tsx`
    - useFocusEffect test 👉 `src/tests/integration/useFocusEffect-view-counter.test.tsx`

[The full standard can be found here](https://www.notion.so/m33/How-to-test-navigation-3fbdf9880a8a4d3b9b24d5a936ae3459).
