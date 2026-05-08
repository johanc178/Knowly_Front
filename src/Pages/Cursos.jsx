import { Link } from "react-router-dom"

import jsImg from '../Assets/js.png.jpeg'
import reactImg from '../Assets/react.png.jpeg'
import nodeImg from '../Assets/node.png.jpeg'
import pyImg from '../Assets/py.png.jpeg'
import cyberImg from '../Assets/ciberseguridad.png'

function Cursos() {

  const courses = [
  {
    slug: 'javascript',
    name: 'Introducción a JavaScript',
    price: '$49',
    image: jsImg
  },
  {
    slug: 'react',
    name: 'React para principiantes',
    price: '$59',
    image: reactImg
  },
  {
    slug: 'node',
    name: 'Desarrollo con Node.js',
    price: '$69',
    image: nodeImg
  },
  {
    slug: 'python',
    name: 'Python básico',
    price: '$39',
    image: pyImg
  },
  {
    slug: 'ciberseguridad',
    name: 'Ciberseguridad esencial',
    price: '$79',
    image: cyberImg
  },
];

  return (

    <div className="main text-black">

      {/* HERO */}
      <div className="flex justify-center px-6 pt-0 pb-6">

        <div className="max-w-4xl text-center">

          <div className="inline-flex items-center rounded-full bg-white/30 backdrop-blur-md px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-black">
              Biblioteca de cursos
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mb-4">
            Aprende nuevas habilidades a tu ritmo
          </h1>

          <p className="text-base md:text-lg leading-7 text-black/75 max-w-3xl mx-auto">
            Descubre diferentes cursos diseñados para ayudarte a aprender
            temas de manera práctica, clara y paso a paso. Explora nuevas
            habilidades, mejora tus conocimientos y avanza a tu propio ritmo.
          </p>

        </div>

      </div>

      {/* CARDS */}
      <div className="Cards-container">

        {courses.map((c) => (

          <div
            key={c.name}
            className="Card overflow-hidden"
          >

            {/* Imagen */}
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-52 object-cover rounded-2xl"
            />

            {/* Contenido */}
            <div className="pt-4">

              <h3 className="text-2xl font-bold leading-tight text-black mb-3">
                {c.name}
              </h3>

              <p className="text-xl font-semibold text-purple-700">
                {c.price}
              </p>

              {/* Botón */}
              <div className="mt-6">

                <Link
                  to={`/curso/${c.slug}`}
                  className="
                    w-full
                    bg-gradient-to-r
                    from-purple-500
                    to-purple-600
                    hover:from-purple-600
                    hover:to-purple-700
                    text-white
                    font-semibold
                    py-3
                    rounded-2xl
                    transition-all
                    duration-300
                    shadow-lg
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    flex
                    items-center
                    justify-center
                  "
                >
                  Ingresar
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Cursos;