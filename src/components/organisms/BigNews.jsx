import { ParrafoPage, TitlePage } from "../atoms"
import imageWebDesk from '/images/image-web-3-desktop.jpg';
import imageWebMobile from '/images/image-web-3-mobile.jpg';

const BigNews = () => {
    const textTitle = 'The Bright Future of Web 3.0?';
    const textContent = `We dive into the next evolution of the web that 
                         claims to put the power of the platforms back 
                         into the hands of the people. But is it really
                         fulfilling its promise?`;
    
  return (
    <div className="bignews">
        
          <picture className='bignews__img'>
            <source media='(max-width: 767px)' srcSet={imageWebMobile} />
            <source media='(min-width: 768px)' srcSet={imageWebDesk} />
            <img src={imageWebDesk} alt='Img Web' />
          </picture>
        <div>
          <TitlePage typeTitle={1} styleClass={'bignews__h1'} text={textTitle} />
          <ParrafoPage styleClass={'bignews__parrafo'} text={textContent} />
        </div>
    </div>
  )
}

export default BigNews