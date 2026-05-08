function Blogs() {
  const blogs = [
    { 
      title: 'Métodos de aprendizaje efectivos', 
      category: 'Métodos de Aprendizaje',
      description: 'Descubre técnicas probadas para mejorar tu retención y comprensión'
    },
    { 
      title: 'Herramientas para desarrolladores', 
      category: 'Herramientas',
      description: 'Las mejores herramientas para optimizar tu flujo de trabajo'
    },
    { 
      title: 'Técnica Pomodoro', 
      category: 'Métodos de Aprendizaje',
      description: 'Aprende a gestionar tu tiempo de estudio de manera efectiva'
    },
    { 
      title: 'Git y GitHub', 
      category: 'Herramientas',
      description: 'Controla tus versiones y colabora en proyectos fácilmente'
    },
    { 
      title: 'Mapas mentales', 
      category: 'Métodos de Aprendizaje',
      description: 'Organiza tus ideas y conceptos de forma visual'
    },
    { 
      title: 'VS Code', 
      category: 'Herramientas',
      description: 'Configura y domina el editor de código más popular'
    },
  ];

  return (
    <div className="main text-black">

      <div className="flex justify-center px-6 pt-0 pb-6">
        <div className="max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full bg-white/30 backdrop-blur-md px-4 py-2 text-sm font-semibold text-black mb-4">
            Blog educativo
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mb-4">
            Aprende con recursos simples y prácticos
          </h1>

          <p className="text-base md:text-lg leading-7 text-black/75 max-w-3xl mx-auto">
            Explora artículos, métodos de aprendizaje y herramientas diseñadas para
            ayudarte a mejorar tus habilidades, organizar tu estudio y avanzar de forma más efectiva.
          </p>

        </div>
      </div>

      <div className="Cards-container">
        {blogs.map((blog) => (
          <div key={blog.title} className="Card overflow-hidden">

            <div className="Card__img" />

            <div className="px-1 pt-4">
              <span className="block text-sm font-semibold text-purple-600 mb-2">
                {blog.category}
              </span>

              <h3 className="text-2xl font-bold leading-tight text-black mb-3">
                {blog.title}
              </h3>

              <p className="text-base leading-7 text-black/70">
                {blog.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Blogs;