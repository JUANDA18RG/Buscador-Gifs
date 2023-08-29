describe('Pruebas en getGits', () => {
  test('Debe de retornar un arreglo de objetos', async () => {
    const gits = await getGits('one punch');
    expect(gits.length).toBeGreaterThan(0);
    expect(gits[0]).toEqual(
      { id: expect.any(String), 
        title: expect.any(String), 
        url: expect.any(String) });
  });
});