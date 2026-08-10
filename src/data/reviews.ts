import reviewsData from './reviews.json';

export interface GoogleReview {
  id: number;
  nome: string;
  meta: string;
  quando: string;
  nota: number;
  texto: string;
  verificado: boolean;
}

export const googleReviews: GoogleReview[] = reviewsData;
