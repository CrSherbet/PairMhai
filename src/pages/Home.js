import React , {Component} from 'react'
import Navbar from '../components/Navbar'
import LoginTab from '../components/LoginTab'
import LeftTab from '../components/LeftTab'
import '../CSS/Home.css';

class Home extends Component {

    render(){
        return (
            <div>
                <Navbar /> 
                <LoginTab />
                <LeftTab />
            </div>
        );
    }
}

export default Home