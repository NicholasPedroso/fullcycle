const { NAME_GENERATOR_API_URL } = require('../constants')

let fallbackNameId = 0;

exports.generatePeople = async function generatePeople(namesQuantity = 1) {
  const APIURL = `${NAME_GENERATOR_API_URL}/${namesQuantity}`;
  let names = [];

  try {
    const namesRequest = await fetch(APIURL);
    const parsedNames = await namesRequest.json();

    parsedNames.forEach((name) => {
      const [firstName, ...lastName] = name.split("_");
      names.push([firstName, lastName.join(" ")]);
    });
  } catch (e) {
    names.push[["fallbackName", ++fallbackNameId]];
  } finally {
    return names;
  }
};