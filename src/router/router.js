import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {links} from "../constants/links/links";
import MoviesListPage from "../pages/MoviestListPage/MoviesListPage";
import MoviesInfoPage from "../pages/MoviesInfoPage/MoviesInfoPage";
import MoviesGenrePage from "../pages/MoviesGenrePage/MoviesGenrePage";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                  index:true,
                  element:<Navigate to={'movies'}/>
                },
                {
                    path:'movies',
                    element: <MoviesListPage/>,
                },
                {
                    path:'movieInfo/:id',
                    element:<MoviesInfoPage/>
                },
                {
                    path: 'genres',
                    element:<MoviesGenrePage/>
                },
                {
                    path: '/search',
                    element:<MoviesInfoPage/>
                }
            ]
        }
    ]
)

export {router}