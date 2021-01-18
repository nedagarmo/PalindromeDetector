import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import History from '../History';
import reducers from '../../../reducers/palindromeSlice';

const mockStore = configureStore({
    reducer: {
      palindromes: reducers,
    },
});

test('Verificar que se lista adecuadamente los items del store', () => {
    let store;
    let component;

    store = mockStore({ 
        palindromes: {
            list: [{ text:'test', palindrome:false }],
        }
    });

    component = render(
        <Provider store={store}>
            <History />
        </Provider>
    );
    
    expect(component.getByText(/test/i)).toBeInTheDocument();
});