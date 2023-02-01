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
        <div className="header">
        <h1>Women Health</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nemo quisquam autem aspernatur voluptates eveniet nisi tempore odio illo quibusdam eaque incidunt consequuntur laborum esse alias fugiat maiores veritatis. Alias?</p>
        <button>More</button>
        </div>
       
       
        <Slider />
        {/* <Articles /> */}
        <ArticleList />
        {/* <Feature  /> */}
        <Footer/>
    </div>
  )
}

export default App
