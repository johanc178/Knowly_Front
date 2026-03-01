
import "./App.css"

import React from "react";





function App() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!email.includes('@')) {
      setError('Por favor ingresa un correo válido')
      return
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres')
      return
    }
    alert('Login enviado — ' + email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-3xl">K</span>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Knowly</h1>
        <p className="text-center text-gray-500 text-sm mb-8">Ingresa a tu cuenta</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t-2 border-gray-300"></div>
          <p className="px-3 text-gray-500 text-sm">o</p>
          <div className="flex-1 border-t-2 border-gray-300"></div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
            f
          </a>
          <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition">
            𝕏
          </a>
          <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition">
            G
          </a>
        </div>

        {/* Sign up link */}
        <p className="text-center text-gray-600 text-sm">
          ¿No tienes cuenta?{' '}
          <a href="#" className="text-purple-600 font-bold hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  )
}

export default App;

