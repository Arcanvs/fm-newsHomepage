import { ParrafoPage, TitlePage } from "../atoms"

const BigNews = () => {
    const textTitle = 'The Bright Future of Web 3.0?';
    const textContent = `We dive into the next evolution of the web that 
                         claims to put the power of the platforms back 
                         into the hands of the people. But is it really
                         fulfilling its promise?`;
    
  return (
    <div className="bignews">
        <TitlePage typeTitle={1} styleClass={'bignews__h1'} text={textTitle} />
        <ParrafoPage styleClass={'bignews__parrafo'} text={textContent} />
    </div>
  )
}

export default BigNews