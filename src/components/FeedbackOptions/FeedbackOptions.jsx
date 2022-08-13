import styles from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const {btns} = styles;

  return (
    <>
      {options.map(n => <button className={btns} onClick={onLeaveFeedback} key={n}>{n}</button> )}
    </>
  )
}

export default FeedbackOptions;