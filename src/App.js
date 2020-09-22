import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './css/main.css';
import foto from './media/img/profilo.png';
import lazio_innova from './media/img/lazio.png';
import trashbot from './media/img/trashbot.png';
import drone from './media/img/drone.png';
import zr from './media/img/zr.png';

const name = "Gabriele Onorato";
const profession = "Software Developer";

class App extends React.Component {
	render(){		
	return (
       <Router>
            <Switch>
                <Route path="/progetti" component={Progetti} />
                <Route path="/contatti" component={Contatti} />
                <Route path="/" component={Index} />
                <Redirect from='*' to='/' />
            </Switch>           
       </Router>
       );
    }
}
class Index extends React.Component {
	render(){		
	return (
		<div className="center" id="index">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <ProfileImg />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Titolo />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="center">                   
                                
                                
                                <Link to="/contatti"><Button  icona="fas fa-address-book" style={{marginRight: "3em"}} /></Link>
                                <Link to="/progetti"><Button  icona="fas fa-wrench" /></Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	
	);
	
	}
}

class Contatti extends React.Component {
    render() {
        return (
            <div className="center" id="index">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="home-button">
                                    <Link to="/"><Button  icona="fas fa-home" /></Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="center"> 
                                    <Button href="https://resume.io/r/vhINdooY5" icona="fas fa-address-card" />
                                    <Button href="https://www.linkedin.com/in/gabriele-onorato-256924199/" icona="fab fa-linkedin" />
                                    <Button href="https://github.com/lapry34" icona="fab fa-github-square" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
          </div>
        );
    }
}


class Progetti extends React.Component {
    render() {
        return (
            <div className="center" id="index">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="home-button">
                                <Link to="/"><Button icona="fas fa-home" /></Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="center">
                                <ProjCard img={lazio_innova} title="Lazio Innova" desc="Regione Lazio" period="2018-2019" href="http://www.lazioinnova.it/startupper-school-academy/startupper-banchi-scuola/" />
                                <ProjCard img={zr} title="ZeroRobotics" desc="MIT-NASA Programming Challenge" period="2018-2019" href="http://zerorobotics.mit.edu" />
                                <ProjCard img={trashbot} title="TrashBot" desc="ITIS E. Fermi" period="2019-2020" href="https://trashbot.it" />
                                <ProjCard img={drone} title="AidDrone" desc="Air Drone Service" period="2020-Now" href="#" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
        );
    }
}

class Button extends React.Component {


    render() {

        return (
            <a href={this.props.href}><button className="white-button" onClick={this.props.onClick} style={this.props.style}><i className={this.props.icona}></i></button></a>
        );
    }

}



class Titolo extends React.Component {
    render() {
        return (
            <p>
                <h3 className="center">{name}</h3>
                <h4 className="center">{profession}</h4>
            </p>
        );
    }
}

class ProfileImg extends React.Component {
    render() {
        return (

            <div id="profile-image-div">
            <img id="profile-image" src={foto} alt="..." />            
            </div>
        );
    }
}

class ProjCard extends React.Component {
    render() {
        return (
            <div className="projectCard">
                <a href={this.props.href}>
                    <div className="image-box">
                        <img src={this.props.img} alt="..." className="projectImg" />
                    </div>
                </a>
                <p>
                    <div className="projectTitle">{this.props.title}</div>
                    <div className="projectDescription">{this.props.desc}</div>
                    <div className="projectPeriod">{this.props.period}</div>
                </p>
            </div>
        );
    }
}

export default App;
