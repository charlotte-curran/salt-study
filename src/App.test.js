import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "./Theme/theme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  test("matches the snapshot", () => {
    const app = create(
      <ThemeProvider theme={SaltTheme}>
        <App />
      </ThemeProvider>
    );
    expect(app.toJSON()).toMatchSnapshot();
  });
});
