import React from 'react';
import './Main.css';

function Main() {
    return (
        <main className="main-content">
            <h2>Bienvenidos a Nuestros Servicios</h2>
            <p>Ofrecemos soluciones tecnológicas innovadoras para hacer crecer tu negocio.</p>

            <div className="cards-container">
                <div className="card">
                    <h3>Desarrollo Web</h3>
                    <p>Creamos sitios web rápidos, responsivos y modernos a medida de tus necesidades.</p>
                </div>
                <div className="card">
                    <h3>Aplicaciones Móviles</h3>
                    <p>Desarrollo de apps nativas e híbridas para iOS y Android.</p>
                </div>
                <div className="card">
                    <h3>Cloud Computing</h3>
                    <p>Servicios de alojamiento, migración y gestión en la nube seguros y escalables.</p>
                </div>
            </div>
        </main>
    );
}

export default Main;