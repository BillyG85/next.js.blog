import styles from "../styles/Home.module.css"
import SanityService from "../services/SanityServices"
import { Row } from "antd"
import Link from 'next/link'
import { CodeOutlined } from "@ant-design/icons"
import { Header } from "antd/lib/layout/layout"
import Header from "../components/Header"
import BlogHeadline from "../components/BlogHeadline"
import BlogMainPost from "../components/BlogMainPost"
import BlogList from "../components/BlogList"
import Footer from "../components/Footer"


export default function Home({ home, posts }) {
  const mainPost = post.find((p) = p.slug === home.mainPostURL)
  const otherPosts = posts.filter((p) = p.slug !== home.mainPostURL)
  console.log(mainPost)
  console.log(otherPosts)
  return ( 
    <div className={styles.container}>
      <Header />
      <BlogHeadline />
      <BlogMainPost { ...mainPost}/>
      <BlogList posts={otherPosts} />
      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  // sanity 로부터 데이터를 가져온다.
  const SanityService = new SanityService()
  const home = await SanityService.getHome()
  const posts = await SanityService.getPosts()


  return {
    props: {
      home,
      posts,
    }
  }

}