import './styles/index.scss'
// import headerWithScroll from './components/header/headerWithScroll'
// import home from './components/home/home'
// import discount from './components/discount/discount'
// import portfolio from './components/portfolio/portfolio'
// import langToggle from './components/langToggle/langToggle'
// import offers from './components/offers/offers'
// import blogBox from './components/blogBox/blogBox'
import antiFouc from './antiFouc'
import yall from 'yall-js'
// import blogHeader from './components/blogHeader/blogHeader'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'
// import blogPost from './components/blogPost/blogPost'
// import instaFeed from './components/instaFeed/instaFeed'
import header from './sections/header/header'
import opinions from './sections/opinions/opinions'
import ask from './sections/ask/ask'
// import office from './sections/office/office'


AOS.init()
document.addEventListener("DOMContentLoaded", yall)
// if (window.location.href.includes('blog.html')) {
//   // blogHeader()
//   // blogBox()
// } else if (window.location.href.includes('post.html')) {
//   // blogHeader()
//   // blogPost()
// } else {
//   localStorage.clear()
//   // headerWithScroll()
//   // home()
//   // discount()
//   // portfolio()
//   // offers()
//   // // langToggle()
//   // instaFeed()
// }

// office()

antiFouc()
header()
opinions()
ask()


