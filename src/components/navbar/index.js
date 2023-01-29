import Logo from '../../assets/static/logos/hero-logo.svg'

export const NavBar = () =>{
    return (
        <nav className='container flex items-center justify-between mx-auto py-8 px-4 lg:px-10'>
            <img src={Logo} alt="Logo" />

            <button className='btn h-10 px-4'>
                <a href="#form">Join wait list</a>
            </button>
        </nav>
    )
}