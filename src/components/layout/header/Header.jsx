import { IoMdArrowBack } from 'react-icons/io'
import { BiUser } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	if (!isAuth) return null

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button aria-label='Go to profile'
							onClick={() => {
								navigate('/profile')
							}}
						>
							<BiUser fill='#fff' fontSize={32} />
						</button>
					) : (
						<button aria-label='Go back'
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<IoMdArrowBack fill='#fff' fontSize={32} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
