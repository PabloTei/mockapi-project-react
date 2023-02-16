import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <h1>HOME</h1>
            <ul>
                <li>
                    <NavLink to="gallery">Gallery</NavLink>
                </li>
                <li>    
                    <NavLink to="about">About</NavLink>
                </li>
            </ul>

        </main>
    )
}

export default Home;