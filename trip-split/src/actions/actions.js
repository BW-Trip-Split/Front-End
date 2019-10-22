import axios from 'axios';
import axiosAuth from '../utils/axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const GETUSERS_START = 'GETUSERS_START';
export const GETUSERS_SUCCESS = 'GETUSERS_SUCCESS';
export const GETUSERS_FAILURE = 'GETUSERS_FAILURE';

export const GETUSER_START = 'GETUSER_START';
export const GETUSER_SUCCESS = 'GETUSER_SUCCESS';
export const GETUSER_FAILURE = 'GETUSER_FAILURE';

export const UPDATEUSER_START = 'UPDATEUSER_START';
export const UPDATEUSER_SUCCESS = 'UPDATEUSER_SUCCESS';
export const UPDATEUSER_FAILURE = 'UPDATEUSER_FAILURE';

export const DELETEUSER_START = 'DELETEUSER_START';
export const DELETEUSER_SUCCESS = 'DELETEUSER_SUCCESS';
export const DELETEUSER_FAILURE = 'DELETEUSER_FAILURE';

export const GETTRIPS_START = 'GETTRIPS_START';
export const GETTRIPS_SUCCESS = 'GETTRIPS_SUCCESS';
export const GETTRIPS_FAILURE = 'GETTRIPS_FAILURE';

export const GETTRIP_START = 'GETTRIP_START';
export const GETTRIP_SUCCESS = 'GETTRIP_SUCCESS';
export const GETTRIP_FAILURE = 'GETTRIP_FAILURE';

export const POSTTRIP_START = 'POSTTRIP_START';
export const POSTTRIP_SUCCESS = 'POSTTRIP_SUCCESS';
export const POSTTRIP_FAILURE = 'POSTTRIP_FAILURE';

export const POSTEXPENSE_START = 'POSTEXPENSE_START';
export const POSTEXPENSE_SUCCESS = 'POSTEXPENSE_SUCCESS';
export const POSTEXPENSE_FAILURE = 'POSTEXPENSE_FAILURE';

export const GETTRIPSBYUID_START = 'GETTRIPSBYUID_START';
export const GETTRIPSBYUID_SUCCESS = 'GETTRIPSBYUID_SUCCESS';
export const GETTRIPSBYUID_FAILURE = 'GETTRIPSBYUID_FAILURE';




export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios
       .post("https://split-trip-bw.herokuapp.com/api/auth/register", creds)
      // .post("https://tripsplitr.herokuapp.com/auth/register", creds)

      .then(res => {
        console.log("REGISTER RES: ", res);
        dispatch({ type: REGISTER_SUCCESS });
      })
      .catch(err => {
        console.log("REGISTER ERR: ", err);
        dispatch({ type: REGISTER_FAILURE });
      });
};

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return (
      axios
         .post("https://split-trip-bw.herokuapp.com/api/auth/login", creds)
        // .post("https://tripsplitr.herokuapp.com//auth/login", creds)

        .then(res => {
          console.log("LOGIN_RES: ", res);
          localStorage.setItem("token", res.data.token);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.user_id });
          return true;
        })
        .catch(err => {
          console.log("LOGIN ERR: ", err);
          dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
        })
    );
};

export const getHome = () => (dispatch) => {
    dispatch ({type: GET_START})
    axiosAuth()
      .get("https://split-trip-bw.herokuapp.com")
      // .get("https://tripsplitr.herokuapp.com/")

      .then(res => {
        console.log("GETHOME RES: ", res);
        dispatch({ type: GET_SUCCESS });
      })
      .catch(err => {
        console.log("GETHOME ERR: ", err);
        dispatch({ type: GET_FAILURE });
      });
};

export const getUsers = () => (dispatch) => {
    dispatch ({type: GETUSERS_START})
    axiosAuth()
      // .get("https://tripsplitr.herokuapp.com/users")
      .get("https://split-trip-bw.herokuapp.com/api/users")

      .then(res => {
        console.log("GETUSERS RES: ", res);
        dispatch({ type: GETUSERS_SUCCESS, payload: res.data.AllUsers });
      })
      .catch(err => {
        console.log("GETUSERS ERR: ", err);
        dispatch({ type: GETUSERS_FAILURE });
      });
};

export const getUser = (user_id) => (dispatch) => {
    dispatch ({type: GETUSER_START})
    axiosAuth()
      // .get(`https://tripsplitr.herokuapp.com/users${user_id}`)
       .get(`https://split-trip-bw.herokuapp.com/api/users/${user_id}`)
      .then(res => {
        console.log("GETUSER RES: ", res);
        dispatch({ type: GETUSER_SUCCESS, payload: res.data.user });
      })
      .catch(err => {
        console.log("GETUSER ERR: ", err);
        dispatch({ type: GETUSER_FAILURE });
      });
};

export const updateUser = (id, userObj) => dispatch => {
    dispatch({ type: UPDATEUSER_START });
    axiosAuth()
       .patch(`https://split-trip-bw.herokuapp.com/api/users/${id}`, userObj)
      // .patch(`https://tripsplitr.herokuapp.com/usersusers/${id}`, userObj)

      .then(res => {
        console.log("UPDATEUSER RES: ", res);
        dispatch({ type: UPDATEUSER_SUCCESS });
      })
      .catch(err => {
        console.log("UPDATEUSER ERR: ", err);
        dispatch({ type: UPDATEUSER_FAILURE });
      });
};

// ^^ returns message only. Need new user(s)

export const deleteUser = (id) => dispatch => {
    dispatch({ type: DELETEUSER_START });
    axiosAuth()
       .delete(`https://split-trip-bw.herokuapp.com/api/users/${id}`)
      // .delete(`https://tripsplitr.herokuapp.com//users/${id}`)

      .then(res => {
        console.log("DELETEUSER RES: ", res);
        dispatch({ type: DELETEUSER_SUCCESS });
      })
      .catch(err => {
        console.log("DELETEUSER ERR: ", err);
        dispatch({ type: DELETEUSER_FAILURE });
      });
};

// ^^ returns message only. Need new user(s)


export const getTrips = () => (dispatch) => {
  dispatch ({type: GETTRIPS_START})
  axiosAuth()
     .get("https://split-trip-bw.herokuapp.com/api/trips")
    // .get("https://tripsplitr.herokuapp.com//trips")

    .then(res => {
      console.log("GETTRIPS RES: ", res);
      dispatch({ type: GETTRIPS_SUCCESS, payload: res.data.AllTrips });
    })
    .catch(err => {
      console.log("GETTRIPS ERR: ", err);
      dispatch({ type: GETTRIPS_FAILURE });
    });
}


export const getTrip = (trip_id) => (dispatch) => {
  dispatch ({type: GETTRIP_START})
  axiosAuth()
     .get(`https://split-trip-bw.herokuapp.com/api/trips/${trip_id}`)
    // .get(`https://tripsplitr.herokuapp.com//trips/${trip_id}`)

    .then(res => {
      console.log("GETTRIP RES: ", res);
      dispatch({ type: GETTRIP_SUCCESS, payload: res.data.Trip });
    })
    .catch(err => {
      console.log("GETTRIP ERR: ", err);
      dispatch({ type: GETTRIP_FAILURE });
    });
};

export const getTripsByUserId = (user_id) => (dispatch) => {
  dispatch ({type: GETTRIPSBYUID_START})
  axiosAuth()
     .get(`https://split-trip-bw.herokuapp.com/api/trips/user/${user_id}`)
    // .get(`https://tripsplitr.herokuapp.com//user/${user_id}`)

    .then(res => {
      console.log("GETTRIPSBYUID RES: ", res);
      dispatch({ type: GETTRIPSBYUID_SUCCESS, payload: res.data.Trip });
      return true;
    })
    .catch(err => {
      console.log("GETTRIPSBYUID ERR: ", err);
      dispatch({ type: GETTRIPSBYUID_FAILURE });
    });
};


export const postTrip = (tripObj) => dispatch => {
  dispatch({ type: POSTTRIP_START });
  axiosAuth()
    .post('https://split-trip-bw.herokuapp.com/api/trips', tripObj)
    .then(res => {
      console.log("POSTTRIP RES: ", res)
      dispatch({ type: POSTTRIP_SUCCESS,});
    })
    .catch(err => {
      console.log("POSTTRIP ERR: ", err)
      dispatch({ type: POSTTRIP_FAILURE});
    });
};

// ^^ returns a message, need trips

export const postExpense = (expenseObj) => dispatch => {
  dispatch({ type: POSTEXPENSE_START });
  axiosAuth()
    .post('https://split-trip-bw.herokuapp.com/api/expenses', expenseObj)
    .then(res => {
      console.log("POSTEXPENSE RES: ", res)
      dispatch({ type: POSTEXPENSE_SUCCESS});
    })
    .catch(err => {
      console.log("POSTEXPENSE ERR: ", err)
      dispatch({ type: POSTEXPENSE_FAILURE});
    });
};

// ^^ returns a message, need trips

