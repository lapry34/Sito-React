import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import foto_esempio from './media/img/profilo.png';
import lazio_innova from './media/img/lazio.png';
import trashbot from './media/img/trashbot.png'

const name = "Gabriele Onorato";
const profession = "Software Engineer";


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
                                <Button onClick={btnContatti} icona="fas fa-address-book"  />
                                <Button onClick={btnProgetti} icona="fas fa-wrench"  />
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
                                    <Button onClick={btnHome} icona="fas fa-home" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="center"> 
                                    <Button onClick={btnCV} icona="fas fa-address-card" />
                                    <Button onClick={btnLIN} icona="fab fa-linkedin" />
                                    <Button onClick={btnGIT} icona="fab fa-github-square" />
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
                                <Button onClick={btnHome} icona="fas fa-home" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="center">
                                <ProjCard img={lazio_innova} title="Lazio Innova" desc="Regione Lazio" period="2018-2019" href="http://www.lazioinnova.it/startupper-school-academy/startupper-banchi-scuola/" />
                                <ProjCard img={trashbot} title="TrashBot" desc="ITIS E. Fermi" period="2019-Now" href="https://trashbot.onecleaner.it" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
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
            <img id="profile-image" src={foto_esempio} alt="..." />            
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

class Button extends React.Component {


    render() {

        return (
            <button className="white-button" onClick={this.props.onClick}><i className={this.props.icona}></i></button>
        );
    }

}



function btnProgetti() {
    document.getElementById("index").classList.add("disappear");
    setTimeout(() => {ReactDOM.render(<Progetti/>, document.getElementById('root'))}, 500)
}

function btnHome() {
    document.getElementById("index").classList.add("disappear");
    setTimeout(() => {ReactDOM.render(<Index/>, document.getElementById('root'))}, 500)
}
  
function btnContatti() {    
    document.getElementById("index").classList.add("disappear");
    setTimeout(() => {ReactDOM.render(<Contatti/>, document.getElementById('root'))}, 500)
}

function btnCV() {window.location.href = "https://resume.io/r/vhINdooY5"}
  
  function btnLIN() {window.location.href = "https://www.linkedin.com/in/gabriele-onorato-256924199/";}
  
  function btnGIT() {window.location.href = "https://github.com/lapry34";}  

export default Index;
