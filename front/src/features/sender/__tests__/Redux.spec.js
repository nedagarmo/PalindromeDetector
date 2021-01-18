import reducers from '../../../reducers/palindromeSlice';

test('Función para agregar nueva cadena de texto al store', () => {
  let state;
  state = reducers({ list:[] }, 
    { type: 'palindromes/add', payload: { text:'test', palindrome:false } });
  expect(state).toEqual({ list: [ {palindrome: false, text: 'test'} ] });
});