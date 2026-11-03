// Vídeos do Instituto Oni Face enviados pela Dra. Vanessa (WhatsApp, 22/09/2026), colocados em 13/10/2026.
// Ficou de fora o vídeo de 11.41.14 (procedimento em andamento com a paciente deitada).
// Legendas descrevem só o que aparece na imagem. Autorização de imagem das pacientes: confirmar com a Dra.

export type OniVideo = {
  src: string;
  poster: string;
  /** Legenda curta, visível no cartão. */
  label: string;
  /** Descrição para leitor de tela. */
  alt: string;
  width: number;
  height: number;
};

export const ONI_VIDEOS: OniVideo[] = [
  { src: '/videos/oni-video-01.mp4', poster: '/videos/oni-video-01.webp', width: 464, height: 832, label: 'Gerenciamento do envelhecimento', alt: 'Vídeo: a Dra. Vanessa conversa com uma paciente e avalia o rosto dela no Instituto Oni Face.' },
  { src: '/videos/oni-video-02.mp4', poster: '/videos/oni-video-02.webp', width: 576, height: 1024, label: 'A conversa antes de tudo', alt: 'Vídeo: a Dra. Vanessa fala sentada à mesa do consultório.' },
  { src: '/videos/oni-video-03.mp4', poster: '/videos/oni-video-03.webp', width: 576, height: 1024, label: 'Avaliação facial', alt: 'Vídeo: a Dra. Vanessa avalia o rosto de uma paciente sentada na cadeira.' },
  { src: '/videos/oni-video-04.mp4', poster: '/videos/oni-video-04.webp', width: 464, height: 832, label: 'Avaliação facial masculina', alt: 'Vídeo: a Dra. Vanessa avalia o rosto de um paciente.' },
  { src: '/videos/oni-video-05.mp4', poster: '/videos/oni-video-05.webp', width: 576, height: 1024, label: 'Leitura do rosto', alt: 'Vídeo: a Dra. Vanessa observa o rosto de uma paciente de perto.' },
  { src: '/videos/oni-video-06.mp4', poster: '/videos/oni-video-06.webp', width: 576, height: 1024, label: 'Planejamento', alt: 'Vídeo: a Dra. Vanessa examina o rosto de uma paciente sentada.' },
  { src: '/videos/oni-video-07.mp4', poster: '/videos/oni-video-07.webp', width: 576, height: 1024, label: 'No Instituto Oni Face', alt: 'Vídeo: a Dra. Vanessa conversa com um paciente à mesa, em frente ao painel do Instituto Oni Face.' },
  { src: '/videos/oni-video-08.mp4', poster: '/videos/oni-video-08.webp', width: 576, height: 1024, label: 'A consulta', alt: 'Vídeo: consulta à mesa no Instituto Oni Face.' },
  { src: '/videos/oni-video-09.mp4', poster: '/videos/oni-video-09.webp', width: 576, height: 1024, label: 'Primeira conversa', alt: 'Vídeo: paciente conversa com a Dra. Vanessa à mesa do consultório.' },
];
