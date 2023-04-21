import Link from "next/link";
import LoginButton from '../components/auth/LoginButton'

const Header = () => {
  return (
    <header className="bg-stone-100 py-12">
      <nav className="center flex items-center text-sm">
        <ul className="ml-auto flex justify-center gap-8">
          <li>
            <Link className="text-sm font-medium uppercase pink" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-sm font-medium uppercase pink" href="/users">
              Users
            </Link>
          </li>
        </ul>
        <ul className="ml-auto">
          <li>
            <LoginButton/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;