import React from 'react';
import {Link, Outlet} from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/table">
        <button type="button" class="btn btn-secondary btn-lg btn-block">Tabla</button>
        </Link>
      </div>
      <br></br>
      <div>
        <Link to="/form">
        <button type="button" class="btn btn-primary  btn-lg btn-block">Formulario</button>
         </Link>
      </div>
      <Outlet/>
    </header>
  )
}