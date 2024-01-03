const premium = ['BMW', 'Mercedes', 'Audi', 'Porsche'];
const cheap = ['Fiat', 'Skoda', 'Dacia', 'Lada'];

function getPremiumCars() {
    const index = Math.random() * 10 % 4;
    return premium[index];
}

async function getcheapCars() {
  const index = Math.ceil(Math.random() * 10) % 4;
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(index)
  return cheap[index];
}

export { getPremiumCars, getcheapCars}
