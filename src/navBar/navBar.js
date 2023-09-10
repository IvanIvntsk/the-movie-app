import {Link} from "react-router-dom";

const NavBar = () => {
    const button = [
        {
            label: 'Movies'
        },
        {
            label: 'Genres'
        },
        {
            label: 'Search'
        }
    ]
    return (
        <div>
        {button.map((button, index)=>
        <Link key={index} to={button.route}>{button.label}</Link>)}
    </div>
        )
}

export default NavBar