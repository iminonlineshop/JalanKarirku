function calculatePlusTax(price) {
  // Assuming `price` is a string like "Rp.10,000"
  const priceString = price;

  // Remove non-numeric characters and convert to an integer
  const priceInt = parseInt(priceString.replace(/\D/g, ''), 10);

  // Calculate the new price with a 10% increase
  const newPriceInt = priceInt + (0.10 * priceInt);

  // Format the new price back to the "id-ID" locale
  const formattedPrice = `Rp.${newPriceInt.toLocaleString('id-ID')}`;

  return formattedPrice;
}

export default calculatePlusTax;
