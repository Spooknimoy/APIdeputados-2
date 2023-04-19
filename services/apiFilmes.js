import axios from "axios";
import { headers } from "next/dist/client/components/headers";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDkyZTljNDRhOTNiNWRjZjZiNTdlMDVlM2ZiNDgzYSIsInN1YiI6IjY0MzQ4ZDg5MWY5OGQxMDJhNjJjMDgyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aCVfZhE5Vzke_MABKKWHDjsKIB9fgFjuYcsx7blWDe8'
    }
})

export default apiFilmes
