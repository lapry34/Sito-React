import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import foto_esempio from './media/img/foto_esempio.png';
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
                            <div id="profile-image-div">
                                <img id="profile-image" src={foto_esempio} alt="..." />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <h2 className="center">Gabriele Onorato</h2>
                                <h4 className="center">Software Developer</h4>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="center">                   
                                <button className="white-button" onclick="btnContatti(this)"><i class="fas fa-address-book"></i></button>
                                <button className="white-button" onclick="btnProgetti(this)"><i class="fas fa-wrench"></i></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	
	);
	
	}
}


export default Index;
