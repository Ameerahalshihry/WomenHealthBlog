import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Slider from './component/Slider'
import Articles from "./component/Articles";
import Feature from "./component/Feature";
import ArticleList from './component/ArticleList'

function App() {

  return (
    <div className="App">
        <Nav/>  
        <Slider />
        {/* <Articles /> */}
        <ArticleList />
        {/* <Feature  /> */}
        <Footer/>
    </div>
  )
}

export default App
