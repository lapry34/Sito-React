import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

import foto_esempio from './media/img/foto_esempio.png';
import lazio_innova from './media/img/lazio.png';
import trashbot from './media/img/trashbot.png'

const name = "Gabriele Onorato";
const profession = "Software Developer";



let page = 0;


class Index extends React.Component {
	render(){		
	return (
		<div className="center">
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
            <div class="center">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div class="home-button">
                                    <Button onClick={btnHome} icona="fas fa-home" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="center"> 
                                    <Button onClick={btnCV} icona="fas fa-address-card" />
                                    <Button onClick={btnLIN} icona="fab fa-linkedin-square" />
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
            <div class="center">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div class="home-button">
                                <Button onClick={btnHome} icona="fas fa-home" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="center">
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
                <h2 className="center">{name}</h2>
                <h4 className="center">{profession}</h4>
            </p>
        );
    }
}

class ProfileImg extends React.Component {
    render() {
        return (

            <div id="profile-image-div">
            <img id="profile-image" src={foto_esempio}/>            
            </div>




        );
    }
}

class ProjCard extends React.Component {
    render() {
        return (
            <div class="projectCard">
                <a href={this.props.href}>
                    <div class="image-box">
                        <img src={this.props.img} alt="..." class="projectImg" />
                    </div>
                </a>
                <p>
                    <div class="projectTitle">{this.props.title}</div>
                    <div class="projectDescription">{this.props.desc}</div>
                    <div class="projectPeriod">{this.props.period}</div>
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



function btnProgetti() {ReactDOM.render(<Progetti/>, document.getElementById('root'))}

function btnHome() {ReactDOM.render(<Index/>, document.getElementById('root'))}
  
function btnContatti() {ReactDOM.render(<Contatti/>, document.getElementById('root'))}

function btnCV() {Canonical: window.location.href = "https://resume.io/r/1o9iBTzPV"}
  
  function btnLIN() {Canonical: window.location.href = "https://www.linkedin.com/in/gabriele-onorato-256924199/";}
  
  function btnGIT() {Canonical: window.location.href = "https://github.com/lapry34";}  

export default Index;
