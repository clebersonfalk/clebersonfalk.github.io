import React, { Component } from 'react';
import Social from './Social';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="hr"><span className="hr">INÍCIO</span></h3>
                <p>Olá, meu nome é Cleberson Falk, sou desenvolvedor web e acredito que a tecnologia pode transformar
                    a vida das pessoas para melhor. Procuro usar o meu conhecimento para transformar as ideias dos
                    meus clientes em produtos que atendam as suas necessidades.</p>
                <p>Trabalho com PHP e utilizo frameworks como Zend e Laravel, atualmente tenho me aprofundado
                    em frameworks Javascript e programação reativa.</p>
                <Social />
            </div>
        );
    }
}

export default Home;