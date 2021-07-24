export const addItemToPesanan = (pesananItems, pesananItemToAdd) => {
  const existingCartItem = pesananItems.find(
    pesananItem => pesananItem.IdMenu === pesananItemToAdd.IdMenu
  );

  if (existingCartItem) {
    return pesananItems.map(pesananItem =>
      pesananItem.IdMenu === pesananItemToAdd.IdMenu
        ? { ...pesananItem, Quantity: pesananItem.Quantity + 1 }
        : pesananItem
    );
  }

  return [...pesananItems, { ...pesananItemToAdd, Quantity: 1 }];
};

export const removeItemFromPesanan = (pesananItems, pesananItemToRemove) => {
  const existingCartItem = pesananItems.find(
    pesananItem => pesananItem.IdMenu === pesananItemToRemove.IdMenu
  );

  if (existingCartItem.Quantity === 1) {
    return pesananItems.filter(
      pesananItem => pesananItem.IdMenu !== pesananItemToRemove.IdMenu
    );
  }

  return pesananItems.map(pesananItem =>
    pesananItem.IdMenu === pesananItemToRemove.IdMenu
      ? { ...pesananItem, Quantity: pesananItem.Quantity - 1 }
      : pesananItem
  );
};
