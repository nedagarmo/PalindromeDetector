import React from 'react';
import { Provider } from 'react-redux';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from 'redux-mock-store';
import reducer from './../../../reducers/palindromeSlice';

import Sender from './../Sender';

const mockStore = configureStore({
    reducer: {
      palindromes: reducer,
    },
});

enzyme.configure({ adapter: new Adapter() })

test('Validación cuando el la caja de texto está vacía', () => {
    let store;
    let component;

    store = mockStore({
        palindromes: {
            list: [],
        }
    });

    store.dispatch = jest.fn();
    component = enzyme.mount(
        <Provider store={store}>
            <Sender />
        </Provider>
    );
    
    component.find('button').simulate('click');
   
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });

  test('Ejecución del dispatch', () => {
    let store;
    let component;

    store = mockStore({
        palindromes: {
            list: [],
        }
    });

    store.dispatch = jest.fn();
    component = enzyme.mount(
        <Provider store={store}>
            <Sender />
        </Provider>
    );
    
    component.find('input').simulate('change', { target: { value: 'texto' } })
    component.find('button').simulate('click');
   
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });