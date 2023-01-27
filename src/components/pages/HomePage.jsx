import { Navbar, PostList, NewsList, BigNews } from "../organisms"


const HomePage = () => {
  return (
    <section className="home__container">
      <Navbar />
      <section className="news__container">
        <BigNews />
        <NewsList />
      </section>
      <section className="post_container">
        <PostList />
      </section>
    </section>
  )
}

export default HomePage