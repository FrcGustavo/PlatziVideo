import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginRequest } from '../../actions/index';

import Layout from '../../components/Layout';
import Input from '../../components/atoms/Input';

import googleIcon from '../../assets/static/google-icon.png';
import twitterIcon from '../../assets/static/twitter-icon.png';
import './styles.scss';

const Login = ({ history, login }) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form);
    history.push('/');
  };

  return (
    <div className="login_page">
      <Layout>
        <section className="login">
          <section className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form" onSubmit={handleSubmit}>
              <Input
                name="email"
                type="text"
                placeholder="Correo"
                handleInput={handleInput}
              />
              <Input
                name="password"
                type="password"
                placeholder="Contraseña"
                handleInput={handleInput}
              />
              <input
                className="button"
                type="submit"
                value="Iniciar sesión"
              />
              <div className="login__container--remember-me">
                <label htmlFor="cbox1">
                  <input type="checkbox" id="cbox1" value="first_checkbox" />
                  Recuérdame
                </label>
                <a href="/">Olvidé mi contraseña</a>
              </div>
            </form>
            <section className="login__container--social-media">
              <div>
                <img src={googleIcon} alt="" />
                Inicia sesión con Google
              </div>
              <div>
                <img src={twitterIcon} alt="" />
                Inicia sesión con Twitter
              </div>
            </section>
            <p className="login__container--register">
              <span>No tienes ninguna cuenta</span>
              <Link to="register">Regístrate</Link>
            </p>
          </section>
        </section>
      </Layout>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  login: loginRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
