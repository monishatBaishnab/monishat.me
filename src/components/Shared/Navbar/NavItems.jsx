import Scrollspy from "react-scrollspy";

const NavItems = () => {
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
            path: '#projects'
        },
        {
            level: 'Contact',
            path: '#contact'
        }
    ]
    return (
        <Scrollspy className="flex items-center gap-2" items={['home', 'about', 'projects']} currentClassName='text-primary'>
            {navLists?.map(item => (
            <li key={item.level}>
                <a href={item.path} className='flex items-center transition-all hover:text-primary'>
                    <span className='text-primary text-xl'>#</span>
                    <span>{item.level}</span>
                </a>
            </li>
            ))}
        </Scrollspy>
    );
};

export default NavItems;