import axios from "axios";

const URL: string = "http://localhost:4000/api/v1";

export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/createUser`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const createFreemoAccount = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/createUserFreemo`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const createBromoAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/createUserBromo`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/signinUser`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const viewUser = async (ID: string) => {
  try {
    return await axios.get(`${URL}/viewOneUser/${ID}`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const toBromo = async (Data: any) => {
  try {
    return await axios.patch(`${URL}/updateToBromo`, Data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const toPremo = async (Data: any) => {
  try {
    return await axios.patch(`${URL}/updateToPremo`, Data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
