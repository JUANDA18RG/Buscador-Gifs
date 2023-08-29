import { render,screen} from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem />', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshot', () => {
        const{ container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
          });

    test('debe de mostar la imagne con el URL ALT indicado', () => {
        //render( <GifItem title={ title } url={ url } /> );
        //expect( screen.getByRole('img').src).toBe( url );
        const {src,alt}=screen.getByRole('img');
        expect( src ).toBe( alt );
        expect( alt ).toBe( alt );

    });

    test ('debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });

})