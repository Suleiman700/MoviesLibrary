/**
 * generate title
 * @param title {string} example: Kids, Horror...etc
 * @param textColor {string} example: text-cyan-700
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageTitle({ title, textColor }) {
  return (
    <h1 className={`md:heading-lg mb-6 text-xl font-light capitalize lg:mb-10 ${textColor}`} style={{fontWeight: '600'}}>
      {title}
    </h1>
  )
}
