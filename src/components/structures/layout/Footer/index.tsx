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
    <footer className="flex items-center justify-center bg-primary-background py-20 text-white">
      <div className="flex max-sm:flex-wrap justify-center max-sm:justify-start w-full max-w-[1300px] gap-10 px-5">
        <div className="flex flex-col gap-8">
          <Logo id="logo-footer" width={35} height={35} />
          <p className="bg-white rounded-lg text-xl font-semibold text-secondary-color px-4 py-2">
            Olá, usuário!
          </p>
        </div>
        {footerLinks.map((item) => (
          <div key={item.title} className="flex max-sm:basis-full">
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
