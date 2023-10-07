import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'
import Statistics from '../profile/statistics/Statistics'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/bg_new.png'>
			<Button clickHandler={() => navigate('/new-workout')}>
				New</Button>
			<h1 className={styles.heading}>OVERPOWER. OVERTAKE. OVERCOME.</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
