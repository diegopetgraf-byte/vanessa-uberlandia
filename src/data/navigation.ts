export const navigation = [
  { label: 'Oni Face', href: '/#oni-face' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Dra. Vanessa', href: '/#dra-vanessa' },
  { label: 'Mentoria', href: '/#mentoria' },
  { label: 'Contato', href: '/contato' },
] as const;

export type NavItem = typeof navigation[number];
