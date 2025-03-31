export const InitializeCards = (images) => {
  const PairedCard = [...images, ...images]
    .map(({ fields }) => ({
      ...fields?.image,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);

  return PairedCard;
};
