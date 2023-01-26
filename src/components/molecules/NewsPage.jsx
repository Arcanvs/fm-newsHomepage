import { ParrafoPage, TitlePage } from "../atoms"

const NewsPage = ({textTitle, textContent}) => {
  return (
    <div className="news">
        <TitlePage typeTitle={4} styleClass={'news__h4'} text={textTitle}  />
        <ParrafoPage styleClass={'news__text'} text={textContent} />     
    </div>
  )
}

export default NewsPage