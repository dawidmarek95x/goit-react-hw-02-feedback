import styles from './Section.module.scss';

export const Section = ({title, children}) => {
  const {header} = styles;

  return (
    <>
      <h2 className={header}>{title}</h2>
      {children}
    </>
  )
}

export default Section;