import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Homepage from './page/Homepage'
import AddPage from './page/AddPage'
import PostPage from './page/PostPage'
import CounterPage from './page/CounterPage'
import EditPage from './page/EditPage'
import GreetingMessage from './GreetingMessage' //import แบบ  Relative path
import ProductData from "./Product"
import Counter from "./Counter";
import { CounterProvider } from "./context/CounterContext";
import DesignSystemPage from './page/DesignSystemPage';


function App() {
  return(
  <div>
    <CounterProvider>
    <BrowserRouter>
    <Switch>
      <Route path ="/home" component = {Homepage} /> 
      <Route path ="/addpost" component = {AddPage} />
      <Route path ="/post/:postId" component = {PostPage} />
      <Route path ="/counter" component = {CounterPage} />
      <Route path ="/edit/:postId" component = {EditPage} />
      <Route path = "/design" component = {DesignSystemPage}/>
    </Switch>
    </BrowserRouter>
    </CounterProvider>
  </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//      <h1>React Codecamp#08</h1>
//      {/* <GreetingMessage name = "Palm"/>
//      <ProductData title = "XiaoMi Air Purifier" des = "Lorem ipsum dolor sit amet." price = "500"/>
//      <br/>
//      <ProductData title = "XiaoMi" des = "Lorem ipsum dolor sit amet." price = "1500"/>
//      <br/>
//     //  <ProductData title = "Air Purifier" des = "Lorem ipsum dolor sit amet." price = "2500"/> */}
//     {/* <Counter/> */}
//       <div className = "post-header">
//                 <h1 className = "post-header-content">Post App</h1>
//                 <button className = "add-post">Add Post</button>
//       </div>
//       <div className = "post-block">
//             <p>Title: Post app <br/>
//                 Post : content <br/>
//                 Author:
//               </p>
//             <div className = "button-block">
//                 <button className = "content-button">Edit Post</button> 
//                 <button className = "content-button">Delete Post</button>
//               </div>
//     </div>
//     </div>
//   );
// }

export default App;

