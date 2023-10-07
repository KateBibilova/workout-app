import cn from 'clsx'

import Loader from '../../ui/Loader'
import styles from './Profile.module.scss'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'


import { useProfile } from './useProfile'
import Statistics from './statistics/Statistics'


const Profile = () => {
	const {data, isLoading} = useProfile()

	return (
	<>
		<div className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
		style={{backgroundImage: `url('/images/profile.jpg')`, height: 365}}>

			<Header />

			<div className={styles.center}>
			{isLoading? <Loader /> :
				<h1 className={stylesLayout.heading}>{data?.name}</h1>
			}
			</div>
			<Statistics />
		</div>
		<div className='wrapper-inner-page'
			style={{ paddingLeft: 0, paddingRight: 0 }}>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img
								src={image}
								alt=''
								draggable={false}
								style={{ borderRadius: 14 }}
							/>
						</div>
					))}
				</div>
			</div>
	</>
	)
}

export default Profile