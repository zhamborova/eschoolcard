import React, {Component} from 'react';
import '../css/Nav.css'

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            Home: true,
            Services: false,
            Contact: false,
            FAQ: false,
        }
    }
 toggle = (item) => {
     return this.state[item] ? "clicked-txt text": "text" ;
 };

 reset = (item) => {
     this.setState({ Home: false,
         Services: false,
         Contact: false,
         FAQ: false,});
     this.setState({[item]: true})

};
 item = (item) => {
   return <li className="nav-item" onClick={()=>{this.reset(item)}} key={item}>
         <a className="nav-link" href="#"> <span className={this.toggle(item)}>{item}</span></a>
     </li>
 };
    render() {
    return <nav className="navbar navbar-expand-lg navbar-light bg d-flex justify-content-center">
            <ul className="navbar-nav link-custom">
                {Object.keys(this.state).map( item=>{return this.item(item)})}
            </ul>
    </nav>
}
}

export default Nav;