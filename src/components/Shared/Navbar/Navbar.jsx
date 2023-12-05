import { useState } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [pinned, setPinned] = useState(false);
    const navLists = [
        {
            level: 'Home',
            path: '#home'
        },
        {
            level: 'About me',
            path: '#about'
        },
        {
            level: 'Projects',
            path: '#project'
        },
        {
            level: 'Contact',
            path: '#contact'
        }
    ]

    return (
        <Headroom onUnpin={() => setPinned(false)} onPin={() => setPinned(true)}>
            <div className='border-b'>
                <div className='container py-2'>
                    <div className='flex items-center justify-between'>
                        <Link>
                            <h4 className='font-borel font-normal mt-4 transition-all'><span className='text-primary'>Monishat</span>.me</h4>
                        </Link>
                        <div className='flex items-center gap-2'>
                            {
                                navLists?.map(item => (
                                    <Link to={item.path} key={item.level} className='flex items-center transition-all hover:text-primary'>
                                        <span className='text-primary text-xl'>#</span>
                                        <span>{item.level}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Headroom>
    );
};

export default Navbar;