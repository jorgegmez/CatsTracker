import _ from 'lodash';

export const handleRegisterCat = (
  {name, breed, age, description, picture}: CatPet,
  myCats: CatPet[],
) => {
  const cats: CatPet[] = [...myCats];
  if (name && breed && age && description && picture) {
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
