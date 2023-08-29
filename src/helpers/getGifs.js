export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=X6EVO0kc9jjmBInCxw0R66BENPjZbFJq&q=${ category }&limit=50`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}