import React, { Component } from 'react';
import Social from './Social';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="hr"><span className="hr">CONTATO</span></h3>
                <p>Atualmente estou trabalhando fulltime para um cliente, porém, não hesite em me contatar caso queira
                    tomar um café e bater um papo, ou se tiver alguma ideia e precisa de alguém para transformar ela
                    em um produto.</p>
                <p>Se quiser entrar em contato, me envie um <a href="mailto:cleberson.falk@gmail.com">e-mail</a> e me
                    siga nas minhas redes sociais!</p>
                <p></p>
                <Social />
            </div>
        );
    }
}

export default Contact;