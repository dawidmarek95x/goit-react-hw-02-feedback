import styles from './Statistics.module.scss';

export const Statistics = ({good, neutral, bad, total, positivePercentage, maybe}) => {
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

export default Statistics;