import {fireEvent, render} from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    test('debe  ded cambiar el valor de la caja de texto', () => { 
       render( <AddCategory onNewCategory={()=> {}}  /> );
       const input = screengetByRole('textbox');
       fireEvent.input( input, { target: { value: 'Saitama' } });
       expect( input.value ).toBe('Saitama');
     })

     test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue= 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory}  /> );

        const input = screengetByRole('textbox');
        const form = screengetByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        expect(input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( expect.any(Function) );
     });

     test('No debe de llamar onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory}  /> );

        const form = screengetByRole('form');

        fireEvent.submit( form );
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
     });


});