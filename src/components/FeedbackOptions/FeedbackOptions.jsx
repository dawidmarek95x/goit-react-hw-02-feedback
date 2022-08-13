import styles from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const {btns, btns__last} = styles;

  return (
    <>
      {options.map((n, idx, arr) => {
        return (idx !== arr.length -1)
          ? <button className={btns} onClick={onLeaveFeedback} key={n}>{n}</button>
          : <button className={btns__last} onClick={onLeaveFeedback} key={n}>{n}</button>
      })}
    </>
  )
}

export default FeedbackOptions;