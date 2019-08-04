import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import firebase from './firebase';
import Posts from './Posts';
import './index.css';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            autor: '',
            titulo: '',
            contenido: '',
            data: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.Login = this.Login.bind(this);
        this.Registrar = this.Registrar.bind(this);
    }

    Login(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
            
            
            firebase.auth().currentUser.displayName = "Marcos Restituyo";
            console.log(firebase.auth().currentUser.displayName);

        }).catch((err) => {
            console.log(err);
        });
    }

    Registrar(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((res) => {

        }).catch((err) => {
            console.log(err);
        });
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    async componentWillMount(){

        let starCountRef = await firebase.database().ref('post/');
        
        starCountRef.on('child_added', async snapshot => {
            this.setState({
              data: this.state.data.concat(snapshot.val())
            })
        })
  
      }



    render(){
        return(

            <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Restituyo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

    </ul>


  </div>
           
</nav>


                <form className="col-5 mx-auto">
                    <div className="form-group">
                    <label htmlFor="Email">Correo: </label>
                    
                    <input type="Email" name="email" id="email" placeholder="Correo electrònico" 
                    className="form-control" value={this.state.email} onChange = {this.handleChange} />
                    <small className="form-text text-muted">No vamos a compartir tu correo</small>
                    </div>

                    <div className="form-group">
                    <label htmlFor="Password">Contraseña: </label>
                    <input type="Password" name="password" id="password" placeholder="Contraseña"
                    className="form-control" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <p className="text-danger" id="error"></p>

                    <button type="submit" className="btn btn-success"
                    onClick={this.Login}>Iniciar Sesión</button>
                        <br />
                        <br />
                        <br />
                    <button type="submit" className="btn btn-danger"
                    onClick={this.Registrar}>Registrarse</button>
               </form>



               <div className="posts rounded">
               <h2>Posts</h2>


{
  this.state.data.map(res =>(

        <Posts titulo={res.titulo}
        autor={res.autor}
        contenido={res.contenido}/>
    )
    
  ).reverse()
}



</div>

            </div>

        );
    }





}

export default Login;