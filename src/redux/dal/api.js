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

const instanceMock = axios.create({
  baseURL: "https://60885809a6f4a300174263e9.mockapi.io/users/",
});

//https://www.fakeapi.online/apis

export const serverAL = {
  //---------------users------------------
  getUsersList: (CurrentPage = 0, maxUsersAtPage = 10) => {
    return instanceMock
      .get(`?page=${CurrentPage}&limit=${maxUsersAtPage}`)

      .then((res) => {
        return res.data;
      });
  },

  buttonPressed: (userID, byl) => {
    return instanceMock
      .put(`${userID}`, {
        isFollow: byl,
      })
      .then((res) => {
        return res.data;
      });
  },
    //-----------profile------------------
    getUserbyId: (userID = 1) => {
      return instanceMock.get(`${userID}`).then((res) => {
        return res.data;
      });
    },
    getQuotebyUsrId: (userID = 1) => {
      return instanceMock.get(`${userID}/wallPost/`).then((res) => {
        return res.data;
      });
    },
  updateQuote: (userID, qText) => {
    return instanceMock
      .put(`${userID}`, {
        quote: qText,
      })
      .then((res) => {
        return res.data;
      });
  },
  updateElement: (userID, whatElement, text) => {
    return instanceMock
      .put(`${userID}`, {
        [whatElement]: text,
      })
      .then((res) => {
        return res.data;
      });
  },
  likeButtPressed: (userID, postID, byl) => {
    debugger
    return instanceMock
      .put(`${userID}/wallPost/${postID}`, {
        likes: byl,
      })
      .then((res) => {
        return res.data;
      });
  },
  newWallPost: (userID, data) => {
    return instanceMock
      .post(`${userID}/wallPost/`, {
        ...data
      })
      .then((res) => {
        return res.data;
      });
  },
    //-----------registr------------------
  newUser: (data) => {
    return instanceMock
      .post(``, {
        ...data
      })
      .then((res) => {
        return res.data;
      });
  },
   //-----------init------------------
  userInit: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  },
};
//https://60885809a6f4a300174263e9.mockapi.io/users/1/wallPost/