import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

export const Notification = ({message}) => {
  const {notification} = styles;

  return (
    <p className={notification}>{message}</p>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;