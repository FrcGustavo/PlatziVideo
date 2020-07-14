import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { registerRequest } from '../actions';

import '../assets/styles/components/Register.scss';

const Register = ({ history, registerUser }) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(form);
    history.push('/');
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
            name="name"
          />
          <input
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
            name="email"
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
            name="password"
          />
          <input
            className="button"
            type="submit"
            value="Registrarme"
          />
        </form>
        <Link to="login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  registerUser: registerRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(Register);
