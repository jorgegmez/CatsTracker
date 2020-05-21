/* eslint-disable arrow-parens */
import _ from 'lodash';

export const handleRegisterCat = ({ name, breed, age, description, picture }: CatPet, myCats: CatPet[]) => {
  const cats: CatPet[] = [...myCats];
  if (name && breed && age && description) {
    const newCat: CatPet = {
      id: _.uniqueId('cat-'),
      name,
      breed,
      age,
      description,
      picture,
    };
    cats.push(newCat);
    return cats;
  }
  return [];
};

export const handleDeleteCat = (catId?: string, myCats?: CatPet[]) => {
  const newCastArray = myCats ? myCats.filter((cat) => cat.id !== catId) : [];
  return newCastArray;
};

export const handleUpdateCat = (cat?: CatPet, myCats?: CatPet[]) => {
  const newCats = myCats
    ? myCats.map((c) => {
        if (cat && c.id === cat.id) return { ...cat };
        return c;
      })
    : [];

  return newCats;
};
