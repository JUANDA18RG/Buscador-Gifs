import { render } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook,waitForNextUpdate } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe regresar el estado inicial', () => {  
       const {result} = renderHook( () => useFetchGifs('One Punch') );
       const {images, isLoading} = result.current;

       expect(images).toEqual([]);
       expect(isLoading).toBe(true);
    })

    test('debe de regresar un arreglo de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();
        const {images, isLoading} = result.current;

        expect(images.length).toBe(10);
        expect(isLoading).toBe(false);
    });

});