import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  const {stats, stats__item} = styles;

  return (
    <>
      <ul className={stats}>
        <li className={stats__item}>Good: {good}</li>
        <li className={stats__item}>Neutral: {neutral}</li>
        <li className={stats__item}>Bad: {bad}</li>
        <li className={stats__item}>Total: {total}</li>
        <li className={stats__item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired, 
  neutral: PropTypes.number.isRequired, 
  bad: PropTypes.number.isRequired, 
  total: PropTypes.number.isRequired, 
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;