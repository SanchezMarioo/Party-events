import Image from "next/image";
import Link from "next/link";
import Styles from '../globals.css';
import React from 'react';
import Layout from '../layout';

export default function Home() {
  return (
    <Layout>
      <>
  <div className="portada">
    <img
      src="img/concierto-jazz.jpeg"
      alt="Noche de Jazz"
      className="carrousel-img "
    />
  </div>
  <div className="descripcion">
    <div className="nombre">
      <h3 className="font-bolder">Noche de Jazz Bajo las Estrellas</h3>
      <p className="font">20 de agosto de 2024 - 8:00 PM - 11:00 PM</p>
    </div>
    <div className="entradas">
      <button className="btn">Comprar Tickets </button>
    </div>
  </div>
  <div className="row">
    <div className="col-8">
      <div className="descripcion-evento p-5">
        <h3 className="font-bolder">Descripción del Evento</h3>
        <p className="font text-justify">
          Disfruta de una velada mágica bajo el cielo estrellado con los mejores
          músicos de jazz en un entorno al aire libre. "Noche de Jazz Bajo las
          Estrellas" es un evento único que combina la serenidad de la
          naturaleza con la vibrante energía de la música en vivo. Con un
          escenario rodeado de luces y naturaleza, este evento promete una
          experiencia íntima y memorable para todos los asistentes.
        </p>
        <h4 className="font-bolder">Artistas Principales</h4>
        <p className="font m-2"> - Miguel Zenón</p>
        <p className="font m-2"> - Patricia Barber</p>
        <p className="font m-2"> - Trío Jazz de la Ciudad</p>
        <h4 className="font-bolder">Detalles adicionales</h4>
        <p className="font m-2">
          {" "}
          - Acceso: Las puertas se abrirán a las 7:00 PM.
        </p>
        <p className="font m-2">
          {" "}
          - Estacionamiento: Disponible en las cercanías del parque, con tarifas
          de estacionamiento por hora.{" "}
        </p>
        <p className="font m-2">
          {" "}
          - Recomendaciones: Traer una manta o silla plegable para mayor
          comodidad. No se permite la entrada con bebidas alcohólicas.
        </p>
        <p className="font m-2">
          {" "}
          - Clima: En caso de lluvia ligera, el evento se llevará a cabo bajo
          carpas. En caso de tormenta, se reprogramará.
        </p>
      </div>
    </div>
    <div className="col-4">
      <div className="informacion-evento p-5">
        <h3 className="font-bolder">Información del Evento</h3>
        <p className="font">Fecha: 20 de agosto de 2024</p>
        <p className="font">Hora: 8:00 PM - 11:00 PM</p>
        <p className="font">Lugar: Parque Central, Ciudad de México, México</p>
        <p className="font">Precio: $25 por persona</p>
      </div>
    </div>
  </div>
</>

    </Layout>
    );
}