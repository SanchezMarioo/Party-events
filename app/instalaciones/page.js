import Image from "next/image";
import Link from "next/link";
import Styles from '../globals.css';
import React from 'react';
import Layout from '../layout';

export default function Home() {
    return (
    <Layout>
        <div className="row row-col-1 row-col-sm-3 navbar-mt cards">
            <div className="col-4">
                <div className="card">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg44jlptO8Ru0-TWq8eYDtP0s3PFbxmKbpOw&amp;s"
                        className="card-img-top img"
                        alt="Teatro Colón"
                        width={500}
                        height={300}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Teatro Colón</h5>
                        <p className="card-text">Buenos Aires, Argentina</p>
                        <Link href="/informacion" className="btn btn-primary">
                            Más información
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <Image
                        src="https://cdn.culturagenial.com/es/imagenes/palacio-cke.jpg"
                        className="card-img-top img"
                        alt="Palacio de Bellas Artes"
                        width={500}
                        height={300}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Palacio de Bellas Artes</h5>
                        <p className="card-text">Ciudad de México, México</p>
                        <Link href="/informacion" className="btn btn-primary">
                            Más información
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8PjXvKqNR7sqBBeyt9LY9MEuph8WOR1l-g&amp;s"
                        className="card-img-top img"
                        alt="Ópera de Sídney"
                        width={500}
                        height={300}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Ópera de Sídney</h5>
                        <p className="card-text">Sídney, Australia</p>
                        <Link href="/informacion" className="btn btn-primary">
                            Más información
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXl6Kot6EloOU2LJFOOccG6_CISnMC5V80A&amp;s"
                        className="card-img-top img"
                        alt="Royal Albert Hall"
                        width={500}
                        height={300}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Royal Albert Hall</h5>
                        <p className="card-text">Londres, Reino Unido</p>
                        <Link href="/informacion" className="btn btn-primary">
                            Más información
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Madison_Square_Garden_%28MSG%29_-_Full_%2848124330357%29.jpg"
                        className="card-img-top img"
                        alt="Madison Square Garden"
                        width={500}
                        height={300}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Madison Square Garden</h5>
                        <p className="card-text">Nueva York, Estados Unidos</p>
                        <Link href="/informacion" className="btn btn-primary">
                            Más información
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <Image
                        src="https://www.spain.info/.content/images/cabeceras-grandes/cataluna/Gran-Teatre-del-Liceu-barcelona-04-c-t-barcelona.jpg"
                        className="card-img-top img"
                        alt="Gran Teatro del Liceo"
                        width={500}
                        height={300}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Gran Teatro del Liceo</h5>
                        <p className="card-text">Barcelona, España</p>
                        <Link href="/informacion" className="btn btn-primary">
                            Más información
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    );
}