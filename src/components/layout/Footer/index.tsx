import { Logo } from '@/components/common'

const footerLinks = [
  { title: 'O básico', links: ['Contate-nos', 'Suporte', 'Status do Sistema'] },
  {
    title: 'Envolva-se',
    links: ['Adicionar um novo Filme', 'Adicionar uma nova Série']
  },
  {
    title: 'Comunidade',
    links: ['Diretrizes', 'Discussões', 'Placar de colaboradores']
  },
  {
    title: 'Legalidade',
    links: ['Termos de uso', 'Termos de Uso da API', 'Política de privacidade']
  }
]

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-primaryBackground py-20 text-white">
      <div className="flex justify-center w-full max-w-[1300px] gap-10">
        <div className="flex flex-col gap-8">
          <Logo />
          <p className="bg-white rounded-lg text-xl font-semibold text-secondaryColor px-4 py-2">
            Olá, usuário!
          </p>
        </div>
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3 className="text-xl font-semibold">
              {item.title.toUpperCase()}
              <ul>
                {item.links.map((link) => (
                  <li key={link}>
                    <p className="text-base font-normal tracking-wide">
                      {link}
                    </p>
                  </li>
                ))}
              </ul>
            </h3>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
