export const saveListingData = (data, listingLimitThree = false) => {

  const arrayUnited = [].concat(...data.mapHotels);
  const newArray = [];

  for (const element of arrayUnited) {
    const key = element.key;

    const objectCorrespond = data.hotels[key];

    if(listingLimitThree){
      if (objectCorrespond) {
        const objectMerge = { ...objectCorrespond, ...element };
        newArray.push(objectMerge);
      }
    } else {
      if (objectCorrespond) {
        const objectMerge = { ...objectCorrespond, ...element };
        newArray.push(objectMerge);
      } else {
        newArray.push(element);
      }
    }
  }

  const groups = [];
  for (let i = 0; i < newArray.length; i += 10) {
    groups.push(newArray.slice(i, i + 10));
  }

  return groups;

}
