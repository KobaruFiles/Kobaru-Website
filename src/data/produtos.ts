// Imagens em src/assets passam pelo pipeline do Astro (<Image/>): otimização,
// hash de cache e width/height automáticos (sem CLS).
import type { ImageMetadata } from 'astro';
import avatar1 from '../assets/avatares/avatar-1.webp';
import avatar2 from '../assets/avatares/avatar-2.webp';
import avatar3 from '../assets/avatares/avatar-3.webp';

export interface Produto {
  slug: string;
  nome: string;
  preco: number;
  descricao: string;
  descricaoLonga: string;
  imagem: ImageMetadata;
  destaque?: boolean;
}

export const produtos: Produto[] = [
  {
    slug: 'avatar-1',
    nome: 'Avatar 1',
    preco: 0.00,
    descricao: 'Avatar VRChat completo com physbones e full-body tracking.',
    descricaoLonga: 'Avatar VRChat completo com suporte a physbones, full-body tracking e eye tracking. Inclui múltiplas expressões faciais, toggles customizáveis e otimizado para Quest.',
    imagem: avatar1,
    destaque: true,
  },
  {
    slug: 'avatar-2',
    nome: 'Avatar 2',
    preco: 0.00,
    descricao: 'Avatar VRChat completo com physbones e full-body tracking.',
    descricaoLonga: 'Avatar VRChat completo com suporte a physbones, full-body tracking e eye tracking. Inclui múltiplas expressões faciais, toggles customizáveis e otimizado para Quest.',
    imagem: avatar2,
  },
  {
    slug: 'avatar-3',
    nome: 'Avatar 3',
    preco: 0.00,
    descricao: 'Avatar VRChat completo com physbones e full-body tracking.',
    descricaoLonga: 'Avatar VRChat completo com suporte a physbones, full-body tracking e eye tracking. Inclui múltiplas expressões faciais, toggles customizáveis e otimizado para Quest.',
    imagem: avatar3,
  },
];

export function getProduto(slug: string) {
  return produtos.find((p) => p.slug === slug);
}

export function formatarPreco(preco: number) {
  return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
