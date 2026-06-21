// Work with Objects
const id = Symbol("id");

const user = {
  required: {
    user: null,
    [id]: 29022012,

    name: null,
    surname: null,

    age: null,

    country: null,
    city: null,
  },

  additional: {
    street: null,

    color: null,
  },
};

// functions
function fillUser(name, surname, age, country, city) {
  user.required.name = name;
  user.required.surname = surname;
  user.required.age = age;
  user.required.country = country;
  user.required.city = city;
}

function isProfileComplete(obj) {
  const { user: _, ...fieldsToValidate } = obj.required;

  return Object.values(fieldsToValidate).every((value) => value !== null);
}

function cloneUser(obj) {
  return {
    required: {
      ...obj.required,
    },
    additional: {
      ...obj.additional,
    },
  };
}
