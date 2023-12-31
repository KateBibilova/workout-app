import cn from 'clsx'
import styles from './Alert.module.scss'

const Alert = ({ type = 'success', text}) => {
  return (
    <div
    className={cn(styles.alert, {
        [styles.error]: type === 'error',
        [styles.warning]: type === 'warning',
        [styles.info]: type === 'info',
    })}>
    {text}</div>
  )
}

export default Alert