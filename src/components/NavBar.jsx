import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/Sobre'>Sobre</Link>
        <Link to='/Produto'>Produto</Link>
        <Link to='/Contato'>Contato</Link>
    </>
  )
}

export default NavBar
