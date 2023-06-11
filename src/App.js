import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonHTMLAttributes } from 'react';
class  App extends Component {
   constructor(){
    super();
    this.state = {     
    fullName : "dudu",
    bio : "atic",
    imgSrc : "../dudu.jpg", 
    profession : "developpeur junior", 
    show : true
   }
   }
    render(){
       return (
         <div>
            <section class="vh-100" >
         <div className="container py-5 h-100"  >
           <div className="row d-flex justify-content-center align-items-center h-100">
             <div className="col col-md-9 col-lg-7 col-xl-5">
               <div className="card" >
                 <div className="card-body p-4">
                   <div className="d-flex text-black">
                     <div className="flex-shrink-0">
                          <img src="../dudu.jpg"
                         alt="Generic placeholder image" className="img-fluid"></img>
                       </div>
                     <div className="flex-grow-1 ms-3">
                       <h5 className="mb-1">Dudu NDAO</h5>
                       <p className="mb-2 pb-1" >developpeur junior</p>
                       <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                         <div>
                           <p className="small text-muted mb-1">Articles</p>
                           <p className="mb-0">20</p>
                         </div>
                         <div className="px-3">
                           <p className="small text-muted mb-1">Followers</p>
                           <p className="mb-0">976</p>
                         </div>
                         <div>
                           <p className="small text-muted mb-1">Rating</p>
                           <p className="mb-0">6</p>
                         </div>
                       </div>
                       <div classname="d-flex pt-1">
                         <button type="Button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                         <button type="Button" className="btn btn-primary flex-grow-1">Follow</button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
         </div>
         
       )
    }
}

export default App;
