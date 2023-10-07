// import { useState } from 'react'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import styles from './Hamburger.module.scss'
import Menu from './Menu.jsx'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}
			aria-label='Open menu'>
				{isShow ? <CgClose /> : <CgMenuRight fontSize={35} />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
