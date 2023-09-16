import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {links} from "../constants/links/links";
import MoviesListPage from "../pages/MoviestListPage/MoviesListPage";
import MoviesGenrePage from "../pages/MoviesGenrePage/MoviesGenrePage";
import MoviesInfoPage from "../pages/MoviesInfoPage/MoviesInfoPage";
import MovieGenresListPage from "../pages/MoviesGenrePage/MovieGenresListPage";

import UserInfo from "../components/UserInfo/UserInfo";
import SearchPage from "../pages/SearchPage/SearchPage";


const router = createBrowserRouter([{
    path: '',
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Navigate to={links.MOVIES} />,
        },
        {
            path: '/movies',
            element: <MoviesListPage />,
        },
        {
            path: 'movie/:id',
            element: <MoviesInfoPage/>,
        },
        {
            path: '/movies/genres',
            element: <MoviesGenrePage/>
        },
        {
            path: '/movies/genres/:id',
            element: <MovieGenresListPage/>
        },
        {
            path: 'search/movie',
            element: <SearchPage/>,
        },
        {
            path:'*',
            element:<UserInfo/>
        }

    ]
}

])

export {
    router
}