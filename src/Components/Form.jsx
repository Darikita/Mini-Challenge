import React from 'react';
import {Link} from "react-router-dom"

export default function Form (){
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    gender: ''
  })
 
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    alert(JSON.stringify(values))
  }
  
  const { name, email, gender } = values

    return (
      <div>
        <Link to="/"> <button type="button" class="btn btn-primary btn-lg btn-block">Inicio</button></Link>
        <br></br>
        <h1>Screen 2</h1>
        <br></br>
         <h2>Formulario</h2>
         <form onSubmit={handleSubmit}>
         <div class="form-group">
            <label>Nombre:
              <input 
                type="text"
                name="name"
                value={name} 
                onChange={handleChange}
              />
            </label>
          </div>
          
          <div>
            <label>Email:
              <input 
                type="email"
                name="email"
                value={email} 
                onChange={handleChange}
              />
            </label>
          </div>
           
          <div>
            <label>Mujer
              <input 
                type="radio"
                name="gender"
                value="M" 
                onChange={handleChange}
              />
            </label>
            <label>Hombre
              <input 
                type="radio"
                name="gender"
                value="H" 
                onChange={handleChange}
              />
            </label>
          </div>
          
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

        <div>
            <h2>Valores del Formulario</h2>
            <p>{JSON.stringify(values)}</p>
        </div>
      </div>
    )
}