import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "5534998031777";
export const WHATSAPP_DISPLAY = "+55 34 99803-1777";

// Diego - Desenvolvedor para Proposta
export const DIEGO_WHATSAPP_NUMBER = "5511943881210";
export const DIEGO_WHATSAPP_DISPLAY = "(11) 94388-1210";

export type WhatsAppMessageType = 'facial' | 'corporal' | 'geral' | 'avaliacao' | 'cursos' | 'instituto' | 'mentoria' | string;

export function getWhatsAppUrl(contextOrTreatment?: WhatsAppMessageType) {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  if (!contextOrTreatment || contextOrTreatment === 'geral' || contextOrTreatment === 'avaliacao') {
    const text = "Olá, Dra. Vanessa! Visitei o site da Oni Face e gostaria de agendar uma consulta para fazer uma análise facial e entender qual é o melhor planejamento para mim.";
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  }

  if (contextOrTreatment === 'facial') {
    const text = "Olá, Dra. Vanessa! Visitei o site da Oni Face e gostaria de agendar uma consulta para fazer uma análise facial e entender qual é o melhor protocolo para mim.";
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  }

  if (contextOrTreatment === 'cursos' || contextOrTreatment === 'instituto' || contextOrTreatment === 'mentoria') {
    const text = "Olá, Dra. Vanessa! Visitei o site da Oni Face e gostaria de mais informações sobre os cursos, imersões e mentorias.";
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  }

  // Treatment specific
  const text = `Olá, Dra. Vanessa! Visitei o site da Oni Face e gostaria de agendar uma avaliação para o procedimento: ${contextOrTreatment}.`;
  return `${baseUrl}?text=${encodeURIComponent(text)}`;
}

export function getDiegoWhatsAppUrl(action: 'aceitar' | 'duvidas' = 'aceitar') {
  const baseUrl = `https://wa.me/${DIEGO_WHATSAPP_NUMBER}`;
  const text = action === 'aceitar'
    ? "Oi Diego, avaliei a proposta do site e quero fechar!"
    : "Oi Diego, vi a proposta do site e quero tirar algumas dúvidas.";
  return `${baseUrl}?text=${encodeURIComponent(text)}`;
}
