const TitlePage = ({typeTitle, styleClass, text}) => {
  if(typeTitle === 1) return <h1 className={styleClass}>{text}</h1>
  if(typeTitle === 2) return <h2 className={styleClass}>{text}</h2>
  if(typeTitle === 3) return <h3 className={styleClass}>{text}</h3>
  if(typeTitle === 4) return <h4 className={styleClass}>{text}</h4>
}

export default TitlePage