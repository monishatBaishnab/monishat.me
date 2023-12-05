import { Link } from "react-router-dom";

const NavLogo = () => {
    return (
        <Link to='/'>
            <h4 className='font-borel font-normal mt-4 transition-all'><span className='text-primary'>Monishat</span>.me</h4>
        </Link>
    );
};

export default NavLogo;