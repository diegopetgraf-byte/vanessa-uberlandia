/**
 * Avaliações do Instituto Oni Face no Google (perfil cid 2751962473751785507),
 * copiadas como estão em 03/11/2026. Ficaram de fora as avaliações sem texto
 * e as das contas da própria clínica e da agência.
 */
export type GoogleReview = { nome: string; texto: string; estrelas: 5; data: string };

export const GOOGLE_PERFIL_URL = 'https://www.google.com/maps?cid=2751962473751785507';

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    nome: 'Juliano Wender Oliveira',
    texto:
      'Excelente experiência na Clínica ONI Face! Atendimento atencioso, equipe muito profissional e ambiente agradável e acolhedor. A Drª Vanessa, nosso muito obrigado, por proporcionar um sorriso mais encantador. Todos da clinica demonstraram cuidado, dedicação e compromisso com a qualidade do serviço prestado. Fiquei muito satisfeito com a experiência e recomendo a clínica a todos que procuram um atendimento de excelência. Parabéns a toda a equipe pelo ótimo trabalho! 👏🏻😊',
    estrelas: 5,
    data: 'Outubro de 2026',
  },
  {
    nome: 'João Gabriel Faria pinto',
    texto:
      'Me surpreendi desde o atendimento on-line até o dia que fui na clínica pessoalmente para a consulta com a Dra!\nUm espaço maravilhoso e com atendimento nota 1000!\nHoje eu rejuveneci uns 15 anos !\nE estou com autoestima bem alta agora ,depois da transformação que a Dra me fez!\nAgradeço ela sempre ❤️❤️❤️',
    estrelas: 5,
    data: 'Outubro de 2026',
  },
  {
    nome: 'Marcius Burgarelli',
    texto:
      'Local extremamente moderno e acolhedor, além de profissional. De Vanessa se mostra uma profissional de altíssimo padrão. Formação profissional inegável. Escolhi ELA para desenvolver os procedimentos de face e estou muito feliz e seguro com minha escolha.',
    estrelas: 5,
    data: 'Outubro de 2026',
  },
  {
    nome: 'williane Faria',
    texto: 'Excelente profissional! Mãos de fada, amei o atendimento e os resultados! 🥰',
    estrelas: 5,
    data: 'Outubro de 2026',
  },
  {
    nome: 'Marllon PETTER',
    texto: 'Espaço maravilhoso,aconchegante,atendimento acolhedor ótima profissional.',
    estrelas: 5,
    data: 'Outubro de 2026',
  },
  {
    nome: 'Ilmaregina Vales',
    texto: 'Espaço aconchegante, atendimento maravilhoso ❤️☺️😘',
    estrelas: 5,
    data: 'Outubro de 2026',
  },
];
