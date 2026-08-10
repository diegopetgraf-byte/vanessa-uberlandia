export const navigation = [
  { label: 'Quiet Beauty', href: '/#quiet-beauty' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Fabiana', href: '/#fabiana' },
  { label: 'Instituto FS', href: '/#instituto-fs' },
  { label: 'Contato', href: '/contato' },
] as const;

export type NavItem = typeof navigation[number];
