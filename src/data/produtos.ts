export interface Produto {
  slug: string;
  nome: string;
  preco: number;
  descricao: string;
  descricaoLonga: string;
  imagem: string;
  destaque?: boolean;
}

export const produtos: Produto[] = [
  {
    slug: 'avatar-1',
    nome: 'Avatar 1',
    preco: 0.00,
    descricao: 'Avatar VRChat completo com physbones e full-body tracking.',
    descricaoLonga: 'Avatar VRChat completo com suporte a physbones, full-body tracking e eye tracking. Inclui múltiplas expressões faciais, toggles customizáveis e otimizado para Quest.',
    imagem: '/imagens/avatar-1.jpg',
    destaque: true,
  },
  {
    slug: 'avatar-2',
    nome: 'Avatar 2',
    preco: 0.00,
    descricao: 'Avatar VRChat completo com physbones e full-body tracking.',
    descricaoLonga: 'Avatar VRChat completo com suporte a physbones, full-body tracking e eye tracking. Inclui múltiplas expressões faciais, toggles customizáveis e otimizado para Quest.',
    imagem: '/imagens/avatar-2.jpg',
  },
  {
    slug: 'avatar-3',
    nome: 'Avatar 3',
    preco: 0.00,
    descricao: 'Avatar VRChat completo com physbones e full-body tracking.',
    descricaoLonga: 'Avatar VRChat completo com suporte a physbones, full-body tracking e eye tracking. Inclui múltiplas expressões faciais, toggles customizáveis e otimizado para Quest.',
    imagem: '/imagens/avatar-3.jpg',
  },
];

export function getProduto(slug: string) {
  return produtos.find((p) => p.slug === slug);
}

export function formatarPreco(preco: number) {
  return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
