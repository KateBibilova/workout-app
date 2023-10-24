import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'

import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'
import { useAuth } from '../../../hooks/useAuth'

const Auth = () => {
	const {
		errors,
		handleSubmit,
		isLoading,
		onSubmit,
		register,
		setType,
		handleSignIn
	} = useAuthPage()

	const { isAuth } = useAuth()

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/login.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email'
					/>

					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>

					<div className={styles.buttonWrapper}>
						{!isAuth && <Button clickHandler={handleSignIn}>Sign in</Button>}
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
