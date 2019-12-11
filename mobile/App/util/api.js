const BASE_URL = "http://10.30.140.83:3000"; // ALWAYS CHECK

export const VSFetch = (path, options = {}) => {
  return fetch(`${BASE_URL}/api/clothes${path}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Something went wrong... please try again.");
    })
    .catch(error => {
      // catch global errors
      console.warn("ERROR: ", `${BASE_URL}/api/clothes${path}`, error);

      throw new Error(error);
    });
};
