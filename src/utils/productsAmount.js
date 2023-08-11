export const increment = async (target, itemsArray) => {
  const prod = itemsArray.find((pd) => pd.id === target.id);
  prod.quantity += 1;
};

export const decrement = async (target, itemsArray) => {
  const prod = itemsArray.find((pd) => pd.id === target.id);
  prod.quantity -= 1;
};
