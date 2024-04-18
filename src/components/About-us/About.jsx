import React from 'react'
import "./about.css"

export default function About() {
  return (
    <div className="container-fluid container-about">
      <div className="text-container-about">
        <h1 className="h1-about">Quienes Somos!!</h1>
      </div>
      <div className='container-parafo'>
        <h4 id='parafo-about'>
        Nuestra filosofía es simple: en cada producto, encontrarás la pasión y dedicación que nos caracteriza. Nos esforzamos por: Seleccionar minuciosamente los mejores ingredientes para asegurar tu deleite. Ofrecer artículos de excelencia, sin aditivos ni preservantes artificiales. Proporcionar un trato cercano y atención personalizada para cubrir tus demandas. Nuestro compromiso se refleja en nuestra amplia gama de productos, desde cortes jugosos hasta embutidos sabrosos, siempre con algo especial para ti.
        </h4>
      </div>
      <a className="btn btn-primary" href="#" role="button" id='btn-historia'>Nuestra Historia</a>
    </div>
  );
}
