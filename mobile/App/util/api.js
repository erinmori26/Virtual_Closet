const BASE_URL = "http://172.17.56.115:3000";

export const VSFetch = (path, options = {}) => {
  return fetch(`${BASE_URL}/api${path}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Something went wrong... please try again.");
    })
    .catch(error => {
      // catch global errors
      console.warn("ERROR: ", `${BASE_URL}/api${path}`, error);

      throw new Error(error);
    });
};
