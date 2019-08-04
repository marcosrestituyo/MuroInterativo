import React from 'react';
import './index.css';

class Posts extends React.Component{

    /* constructor(props) {
        super(props);
        this.state = {
            
        }
    } */

    render(){
        const {
            titulo,
            autor,
            contenido
        } = this.props;
        return(
            <div className="post col-10 border rounded mx-auto border-danger">
            <div className="autor">
              <h5 className="nombre text-danger">{autor}</h5>

              <h6>{titulo}</h6>
              <hr />
          </div>
          <div className="contenido">

            <div className="informacion mx-auto text-center col-11">{contenido}</div>

          </div>
        </div>


                 
        );
    }

}

export default Posts;