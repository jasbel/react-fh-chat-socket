import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import AuthContext from '../states/auth/AuthContext'

const RegisterPage = () => {
  const { register } = useContext(AuthContext)

  const [form, setForm] = useState({
    name: 'asbel',
    password: 'apaza',
    email: 'asbel@gmail.com',
  })

  const onChange = ({ target }) => {
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const { name, email, password } = form
    const [ok, msg] = await register(name, email, password)

    if (!ok) Swal.fire('Error', `Verifique datos : ${msg}`, 'error')
    if (ok) Swal.fire('Excelente', 'Registrado correctamente', 'success')
  }

  const todoOk = () => {
    return form.email.length > 0 && form.password.length > 0 && form.name.length
      ? true
      : false
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="login100-form validate-form flex-sb flex-w"
      >
        <span className="login100-form-title mb-3">Chat - Registro</span>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={onChange}
          />
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
          />
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
          />
          <span className="focus-input100"></span>
        </div>

        <div className="row mb-3">
          <div className="col text-right">
            <Link to={'/auth/login'} className="txt1">
              Ya tienes cuenta?
            </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button
            type="submit"
            disabled={!todoOk()}
            className="login100-form-btn"
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </>
  )
}

export default RegisterPage
