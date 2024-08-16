import Image from "next/image";
import Link from "next/link";
import Styles from '../globals.css';
import React from 'react';
import Layout from '../layout';

export default function Home() {
  return (
    <Layout>
<div className="row row-col-1 row-col-sm-3 navbar-mt cards">
  <div className="row">
    <div className="col-4">
      <div className="card">
        <img
          src="https://images.pexels.com/photos/7503372/pexels-photo-7503372.jpeg"
          className="card-img-top img"
          alt="Noche de Jazz Bajo las Estrellas"
        />
        <div className="card-body">
          <h5 className="card-title">Noche de Jazz Bajo las Estrellas</h5>
          <p className="card-text">20 de agosto de 2024</p>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card">
        <img
          src="https://images.pexels.com/photos/25078447/pexels-photo-25078447/free-photo-of-ciudad-chef-jefe-de-cocina-cocinando.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="card-img-top img"
          alt="Feria Gastronómica Sabores del Mundo"
        />
        <div className="card-body">
          <h5 className="card-title">Feria Gastronómica Sabores del Mundo</h5>
          <p className="card-text">12 de septiembre de 2024</p>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card">
        <img
          src="https://images.pexels.com/photos/17726634/pexels-photo-17726634/free-photo-of-moda-hombre-gafas-de-sol-gente.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="card-img-top img"
          alt="Festival de Cine Independiente Visión Alterna"
        />
        <div className="card-body">
          <h5 className="card-title">
            Festival de Cine Independiente Visión Alterna
          </h5>
          <p className="card-text">3 al 7 de octubre de 2024</p>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card">
        <img
          src="https://images.pexels.com/photos/7095738/pexels-photo-7095738.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="card-img-top img"
          alt="Concierto Sinfónico de Verano"
        />
        <div className="card-body">
          <h5 className="card-title">Concierto Sinfónico de Verano</h5>
          <p className="card-text">18 de diciembre de 2024</p>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card">
        <img
          src="https://news.microsoft.com/wp-content/uploads/prod/sites/41/2023/03/image00016-960x640.jpeg"
          className="card-img-top img"
          alt="Conferencia de Innovación Tecnológica"
        />
        <div className="card-body">
          <h5 className="card-title">Conferencia de Innovación Tecnológica</h5>
          <p className="card-text">22 al 24 de noviembre de 2024</p>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcX87j-lXC6HOx9n9URPwAXPm7BKdK3kObA&s"
          className="card-img-top img"
          alt="Maratón Internacional"
        />
        <div className="card-body">
          <h5 className="card-title">
            Maratón Internacional "Corriendo por la Salud"
          </h5>
          <p className="card-text">10 de diciembre de 2024</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
  );
}