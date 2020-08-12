import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES, GET_REPOS } from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      }

    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      }

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null  // If a guest user browses a dev profile and then registers, the browsed users profile data is still in the "profile" state and the newly registered user then sees and can edit the users info, so i clear that profile state when no profile is found for the new user
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      }

    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      }

    default:
      return state;
  }
}