import axios from 'axios';

// URL da API https://api.themoviedb.org/3/movie/now_playing?api_key=a638fa29b335d56916224f753bed8ba5
//Base da URL https://api.themoviedb.org/3/

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});


export default api;