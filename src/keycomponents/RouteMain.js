
import React from 'react';
import Login from '../components/begin/Login';
import {  Routes, Route } from "react-router-dom";
import Main from '../components/main/main'
import Essay from '../components/essay/Essay'
import Ace from '../components/Editor/AceEditor'
import Css from '../components/plug/css'
import Js from '../components/plug/Js'

function RouteMain(props) {

  return (
    
      <Routes >
        <Route path="/" element={<Login />}>
        </Route>
        <Route path='/main' element={<Main />}>

        </Route>
        <Route path='/essay' element={<Essay />}>

        </Route>
        <Route path='/eaitor' element={<Ace />} />
        <Route path='/plug/css' element={<Css />} />
        <Route path='/plug/js' element={<Js />} />
      </Routes>


  );
}

//默认接受props属性

// class RouteMain extends React.Component {
  
//   constructor(props) {
//     super(props);
//     // this.state = {path: '/'};

//   }
//   componentDidUpdate(){
//     console.log(1)
    

//   }
//   componentDidMount() {
//     console.log(1)

//   }
//   render() {
//     return (
//       <BrowserRouter>
//       <Routes >
//         <Route path="/" element={<Login />}>
//         </Route>
//         <Route path='/main/' element={<Main />}>

//         </Route>
//       </Routes>
//     </BrowserRouter>
//     );
//   }
// }
export default RouteMain;

