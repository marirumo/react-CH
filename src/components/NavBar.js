const NavBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <p>LOGO</p>
                    </div>
                </div>

                <div className="sm-block sm:ml-6">
                    <div className="flex space-x-4">
                        <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tienda</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Nosotros</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
