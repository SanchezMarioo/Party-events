import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import './globals.css';
// Home.js
import React from 'react';
import Layout from './layout';

export default function Home() {
  return (
    <div className="container-fluid">
    <div id="carouselExampleCaptions" className="carousel slide h-50">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://images.pexels.com/photos/7503372/pexels-photo-7503372.jpeg"
          className="d-block w-100 carrousel-img"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Noche de Jazz Bajo las Estrellas</h5>
          <p>
            Una velada íntima con los mejores músicos de jazz en un escenario al
            aire libre, rodeado de luces y naturaleza.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/25078447/pexels-photo-25078447/free-photo-of-ciudad-chef-jefe-de-cocina-cocinando.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="d-block w-100 carrousel-img"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Feria Gastronómica Sabores del Mundo</h5>
          <p>
            Un recorrido culinario global con stands de comida, chefs
            reconocidos y degustaciones de platillos de diferentes culturas.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/17726634/pexels-photo-17726634/free-photo-of-moda-hombre-gafas-de-sol-gente.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="d-block w-100 carrousel-img"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="font-bolder">
            Festival de Cine Independiente Visión Alterna
          </h5>
          <p className="font">
            Proyecciones de películas independientes de todo el mundo, con
            charlas y mesas redondas con directores emergentes.
          </p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className=" container-fluid d-flex justify-content-between p-5 cards flex-wrap">
    <div className="card" style={{ width: "25rem" }}>
      <img
        src="https://images.pexels.com/photos/7503372/pexels-photo-7503372.jpeg"
        className="card-img-top img"
        alt="Noche de Jazz Bajo las Estrellas"
      />
      <div className="card-body">
        <h5 className="card-title">Noche de Jazz Bajo las Estrellas</h5>
        <p className="card-text">
          20 de agosto de 2024 - Una velada íntima con los mejores músicos de
          jazz en un escenario al aire libre, rodeado de luces y naturaleza.
        </p>
        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
    <div className="card" style={{ width: "25rem" }}>
      <img
        src="https://images.pexels.com/photos/25078447/pexels-photo-25078447/free-photo-of-ciudad-chef-jefe-de-cocina-cocinando.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="card-img-top img"
        alt="Feria Gastronómica Sabores del Mundo"
      />
      <div className="card-body">
        <h5 className="card-title">Feria Gastronómica Sabores del Mundo</h5>
        <p className="card-text">
          12 de septiembre de 2024 - Un recorrido culinario global con stands de
          comida, chefs reconocidos y degustaciones de platillos de diferentes
          culturas.
        </p>
        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
    <div className="card" style={{ width: "25rem" }}>
      <img
        src="https://images.pexels.com/photos/17726634/pexels-photo-17726634/free-photo-of-moda-hombre-gafas-de-sol-gente.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="card-img-top img"
        alt="Festival de Cine Independiente Visión Alterna"
      />
      <div className="card-body">
        <h5 className="card-title">
          Festival de Cine Independiente Visión Alterna
        </h5>
        <p className="card-text">
          3 al 7 de octubre de 2024 - Proyecciones de películas independientes
          de todo el mundo, con charlas y mesas redondas con directores
          emergentes.
        </p>
        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
    <div className="card" style={{ width: "25rem" }}>
      <img
        src="https://images.pexels.com/photos/7095738/pexels-photo-7095738.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="card-img-top img"
        alt="Concierto Sinfónico de Verano"
      />
      <div className="card-body">
        <h5 className="card-title">Concierto Sinfónico de Verano</h5>
        <p className="card-text">
          18 de diciembre de 2024 - Una presentación al aire libre de una
          orquesta sinfónica, interpretando piezas clásicas y contemporáneas
          bajo las estrellas.
        </p>
        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  </div>
  </div>
  );
}
