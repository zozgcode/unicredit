export const formatCurrency = (amount: number) => {
  const formatted = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(amount);

  // Adjust the position of the Euro symbol
  return `€${formatted.replace("€", "").trim()}`;
};
