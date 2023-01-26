import { ImgPage, TitlePage, ParrafoPage } from "../atoms"



const PostPage = ({numberTitle, textTitle, textContent, imgUrl}) => {
  return (
    <div className="post">
        <div className="post__img">
            <ImgPage urlImg={imgUrl} altName={textTitle} />
        </div>
        <div className="post__title">
        <TitlePage typeTitle={3} styleClass={'title__h3'} text={numberTitle} />
        <TitlePage typeTitle={4} styleClass={'title__h4'} text={textTitle} />
            <ParrafoPage  styleClass={'title__parrafo'} text={textContent} />
        </div>
    </div>
  )
}

export default PostPage