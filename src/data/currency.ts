// Preços do site são cadastrados em BRL. Taxas fixas (não em tempo real) — atualize manualmente.
export const currencyRates = {
  brl: { symbol: 'R$', locale: 'pt-BR', rate: 1 },
  usd: { symbol: '$', locale: 'en-US', rate: 1 / 5.40 },
  eur: { symbol: '€', locale: 'de-DE', rate: 1 / 5.85 },
} as const;

export type CurrencyCode = keyof typeof currencyRates;

export function formatPrice(brlAmount: number, currency: CurrencyCode) {
  const { symbol, locale, rate } = currencyRates[currency];
  const converted = brlAmount * rate;
  return `${symbol} ${converted.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
