import React, { Component } from 'react';
import Social from './Social';

class About extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="hr"><span className="hr">SOBRE</span></h3>
                <p>Oi, sou desenvolvedor web a 8 anos, especialista na linguagem PHP e frameworks como Zend e Laravel.
                    Tenho uma empresa com a qual presto serviços em desenvolvimento Web e Mobile.</p>
                <p>Em 2009 comecei o curso de Análise e Desenvolvimento de Sistemas e no ano seguinte encontrei a
                    primeira oportunidade na área. No decorrer dos anos trabalhei com desenvolvimento de sistemas,
                    e-commerce e Mobile.</p>
                <p>Atualmente tenho focado no estudo de programação reativa com ReactJS e VueJS. Acredito que essas
                    ferramentas podem me tornar mais produtivo e proporcionar uma experiência de uso melhor para os
                    usuários.</p>
                <Social />
            </div>
        );
    }
}

export default About;