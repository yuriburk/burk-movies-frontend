import Link from 'next/link'

const ErrorPage = () => (
  <section className="bg-white">
    <div className="flex items-center justify-center h-auto w-screen">
      <div className="mx-auto max-w-screen-sm text-center">
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
          Alguma coisa deu errado.
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Aconteceu algum erro ao buscar as informações. Tente novamente depois.
        </p>
        <Link
          href="#"
          className="inline-flex bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >
          Voltar para a página principal.
        </Link>
      </div>
    </div>
  </section>
)

export default ErrorPage
