import React from 'react';
import {Link} from "react-router-dom"

export default function Table() {
  return (

<div>
  <Link to="/"> <button type="button" class="btn btn-secondary btn-lg btn-block">Inicio</button></Link>
  <h1>Screen 1</h1>
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Nombre:</th>
      <th scope="col">Edad:</th>
      <th scope="col">Carrera:</th>
      <th scope="col">Hobbie:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Pedro</th>
      <td>20</td>
      <td>Ingenieria</td>
      <td>Futbol</td>
    </tr>
    <tr>
      <th scope="row">Rodrigo</th>
      <td>22</td>
      <td>Arquitectura</td>
      <td>Bajo eléctrico</td>
    </tr>
    <tr>
      <th scope="row">Romina</th>
      <td>21</td>
      <td>Abogacía</td>
      <td>Acrobacia</td>
    </tr>
    <tr>
      <th scope="row">Ana</th>
      <td>23</td>
      <td>Contadora</td>
      <td>Astronomía</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}