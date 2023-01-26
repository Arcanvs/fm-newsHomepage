import { PostPage } from "../molecules"

const PostList = () => {
    const dataPost = [{
        numberTitle: '01', 
        textTitle: 'Reviving Retro PCs', 
        textContent : 'What happens when old PCs are given modern upgrades?', 
        imgUrl: '/images/image-retro-pcs.jpg'
    },{
        numberTitle: '02', 
        textTitle: 'Top 10 Laptops of 2022', 
        textContent : 'Our best picks for various needs and budgets.', 
        imgUrl: '/images/image-top-laptops.jpg'
    },{
        numberTitle: '03', 
        textTitle: 'The Growth of Gaming', 
        textContent : 'How the pandemic has sparked fresh opportunities.', 
        imgUrl: '/images/image-gaming-growth.jpg'
    }];
  return (
    <div>
        {
            dataPost.map((post, index) => (
                <PostPage 
                    key={index}
                    numberTitle={post.numberTitle} 
                    textTitle={post.textTitle} 
                    textContent={post.textContent} 
                    imgUrl={post.imgUrl} 
                />
            ))
        }
    </div>
  )
}

export default PostList