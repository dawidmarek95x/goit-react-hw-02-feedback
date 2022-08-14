import PropTypes from "prop-types";
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

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export default Section;