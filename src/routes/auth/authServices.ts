// make a interface Data type
// ...

// example function get user data
export const getUserData = async (): Promise<any> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const djson = await data.json();

  return djson;
};

export const getUserDataNew = async (): Promise<any> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const djson = await data.json();

  return djson;
};

export const validateLoggedUser = (data: any): boolean => {
  if (data && data.id) {
    return true;
  }

  return false;
};
