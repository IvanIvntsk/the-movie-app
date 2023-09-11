import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {links} from "../constants/links/links";
import MoviesListPage from "../pages/MoviestListPage/MoviesListPage";
import MoviesInfoPage from "../pages/MoviesInfoPage/MoviesInfoPage";

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
                    path:'/movies',
                    element: <MoviesListPage/>
                },
                {
                    path: '/genres',
                    element:<MoviesInfoPage/>
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