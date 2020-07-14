import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { registerRequest } from '../../actions';

import Layout from '../../components/Layout';
import Input from '../../components/atoms/Input';

import './styles.scss';

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
    <div className="register_page">
      <Layout>
        <section className="register">
          <section className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form" onSubmit={handleSubmit}>
              <Input
                name="name"
                type="text"
                placeholder="Nombre"
                handleInput={handleInput}
              />
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
                value="Registrarme"
              />
              <Link to="login">Iniciar sesión</Link>
            </form>
          </section>
        </section>
      </Layout>
    </div>

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
