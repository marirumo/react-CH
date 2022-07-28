import CartWidget from '../components/CartWidget';


const NavBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <p>LOGO</p>
                    </div>


                    <div className="sm-block sm:ml-6">
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tienda</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Nosotros</a>
                            <a href="#" ><CartWidget /></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar