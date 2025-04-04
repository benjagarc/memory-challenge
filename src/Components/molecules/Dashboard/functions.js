export const InitializeCards = (images) => {
  const PairedCard = [...images, ...images]
    .map(({ fields }) => ({
      ...fields?.image,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);

  return PairedCard;
};

export const shuffleCards = (cards) => {
  return cards
    .map((card) => ({ ...card, matched: false }))
    .sort(() => Math.random() - 0.5);
};

export const getItem = (key) => localStorage.getItem(key);

export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};
