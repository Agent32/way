import * as axios from "axios";

const instanceDummy = axios.create({
  baseURL: "https://dummyapi.io/data/api/user/",
  headers: {
    "app-id": `608ec88017752b6496d65b8f`,
  },
});

const instancefakeapi = axios.create({
  baseURL: "https://www.fakeapi.online/api/apis/agent32/",
 
});

//https://www.fakeapi.online/apis



export const serverAL = {
  //----------------------------------------
  getUsersList: (CurrentPage = 0, maxUsersAtPage = 10) => {
    return instanceDummy
      .get(`?page=${CurrentPage}&limit=${maxUsersAtPage}`)

      .then((res) => {
        return res.data;
      });
  },
  getUserbyId: (userID = `0F8JIqi4zwvb77FGz6Wt`) => {
    return instanceDummy.get(userID).then((res) => {
      return res.data;
    });
  },
  buttonPressed: () => {
    return instancefakeapi.get(`button/`).then((res) => {
      return res.data;
    });
  },

};
