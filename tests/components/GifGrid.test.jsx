import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';

    test('debe de mostar el loading inicialmente', () => { 
         render( <GifGrid category={ category } /> );
         expect(screen.getByText('Cargando...'));
         expect(screen.getByText(category));
        });
 
     test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        render( <GifGrid category={ category } /> );
     });

     
    test('debe de mostrarse correctamente', () => {
        const gifs=[
            {
                id: 'ABC',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'saitama'
            },
            {
                id: '123',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Goku'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect(screen.getAllByRole('img').length).toBe(2);
    });

    
         
 });