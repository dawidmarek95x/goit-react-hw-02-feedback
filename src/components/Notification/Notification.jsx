import styles from './Notification.module.scss';

export const Notification = ({message}) => {
  const {notification} = styles;

  return (
    <p className={notification}>{message}</p>
  )
}

export default Notification;