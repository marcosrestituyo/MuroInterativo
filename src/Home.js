import React, {Component} from 'react';
import firebase from './firebase';
import Posts from './Posts'

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            
              autor: '',
              titulo: '',
              contenido: '',
              data: []
            
        } 


    }

    /*ObtenerPosts = async () =>{
      let starCountRef = await firebase.database().ref('post/');
      starCountRef.on('value', async (snapshot) => {
        let data = await snapshot.val();
         console.log(data);
       this.setState({
         data
      });  
}).catch(e => {
console.log(this.state.data);
});
    }*/

    async componentWillMount(){

      let starCountRef = await firebase.database().ref('post/');
      
      starCountRef.on('child_added', async snapshot => {
          this.setState({
            data: this.state.data.concat(snapshot.val())
          })
      })

    }

    

    handleChange = e => {
      this.setState({ 
        
         
        [e.target.name]: e.target.value
        

    });
    }

    Postear = async e => {
      e.preventDefault();
      
      console.log(this.state);

      const ref = await firebase.database().ref('post/');
      const newpost = await ref.push();

      let datos = {
        autor: this.state.autor,
        titulo: this.state.titulo,
        contenido: this.state.contenido
      }

      await newpost.set(datos); 

      

      
    }

    Cerrar(e){
        e.preventDefault();

        firebase.auth().signOut();

    }

    /* async componentDidMount(){
      await this.ObtenerPosts();
    } */

    render(){
        return(

            <div >


              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Restituyo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    {/* <li className="nav-item active">
                          <a className="nav-link" >Home </a>
                        </li>
                        <li className="nav-item active">
                          <a className="nav-link" >Features</a>
                        </li> */}

                    </ul>
                </div>
                <form>
                  <button className="btn btn-danger" onClick={this.Cerrar}>Cerrar Sessión</button> 
                </form>

              </nav>

            <div className="container">

              <form onSubmit={this.Postear}>

              <div class="form-group">
                  <label htmlfor="autor">Autor</label>
                  <input type="text" className="form-control" id="autor" name="autor"
                   placeholder="Tu nombre, Ej: Marcos Restituyo" onChange={this.handleChange} 
                   value={this.state.autor} />
              </div>

              <div class="form-group">
                  <label htmlfor="titulo">Titulo</label>
                  <input type="text" className="form-control" id="titulo" name="titulo"
                   placeholder="Titulo de la publicación..." onChange={this.handleChange}
                   value={this.state.titulo} />
              </div>
                

                <div class="form-group">
                  <label htmlfor="contenido">Contenido</label>
                  <textarea className="form-control" id="contenido" name="contenido" 
                  rows="3" placeholder="Contenido de la publicación..." onChange={this.handleChange}
                  value={this.state.contenido} ></textarea>
                </div>

                
                <button type="submit" className="btn btn-success" >Postear</button>

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


                
            </div>

        );
    }





}

export default Home;