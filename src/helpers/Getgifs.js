export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=hhTwKT6KpWHsdcef8OhrFOmb9YpvgFC8&q=${category}&lang=es&limit=10`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
  
    return gifs;
}