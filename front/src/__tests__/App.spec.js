import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import App from '../App';

test('Verificar que se renderiza el componente de historial', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Results/i)).toBeInTheDocument();
});

test('Verificar que se renderiza el componente del formulario de envío del texto', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Send/i)).toBeInTheDocument();
});