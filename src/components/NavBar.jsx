import {Link} from 'react-router-dom'
import {Home, Info} from 'lucide-react'

const NavBar = () => {
    return (
        <nav className=" bg-blue-500 shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-white">Projeto</span>
                    </div>
                </div>

                <div className=" flex space-x-4 items-center">
                    <Link to="/" className="flex items-center px-3 py-2 font-medium hover:text-amber-300"><Home/>Home</Link>
                    <Link to="/sobre" className="flex items-center px-3 py-2 font-medium hover:text-amber-300">Sobre</Link>
                    <Link to="/produto" className="flex items-center px-3 py-2 font-medium hover:text-amber-300">Produto</Link>
                    <Link to="/contato" className="flex items-center px-3 py-2 font-medium hover:text-amber-300">Contato</Link>

                </div>



            </div>

        </nav>
    )
}

export default NavBar
