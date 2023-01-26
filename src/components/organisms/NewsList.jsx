import { TitlePage } from "../atoms"
import { NewsPage } from "../molecules"

const NewsList = () => {
    const newsData = [{
        textTitle: 'Hydrogen VS Electric Cars', 
        textContent: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },{
        textTitle: 'The Downsides of AI Artistry', 
        textContent: 'What are the possible adverse effects of on-demand AI image generation?'
    },{
        textTitle: 'Is VC Funding Drying Up?', 
        textContent: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }]
  return (
    <div>
        <TitlePage typeTitle={2} styleClass={'news__h2'} text={'New'} />
        {
            newsData.map((news, index) => (
                <NewsPage key={index} textTitle={news.textTitle} textContent={news.textContent} />
            ))
        }
    </div>
  )
}

export default NewsList