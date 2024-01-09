import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  refresh: false,
  species: [],
  count: null,
  error: false,
  monsters: [],
  skip: 0,
  limit: 10,
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getSpeciesSuccess(state, action) {
      state.species = { ...action.payload };
    },
    getMonstersSuccess(state, action) {
      state.monsters = action.payload.monsters;
      state.count = action.payload.count;
    },
    changeRefresh(state, action) {
      state.refresh = !state.refresh;
    },

    setSkip(state, action) {
      state.skip = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },

    hasError(state, action) {
      state.error = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getSpeciesSuccess,
  getMonstersSuccess,
  changeRefresh,
  setLimit,
  setSkip,
  hasError,
} = slice.actions;

// ----------------------------------------------------------------------

export async function createMonster(values) {
  console.log("sssssss", values);
  const response = await axiosInstance.post("/api/monsters", values);
}
export function getSpecies() {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("/api/species");
      dispatch(slice.actions.getSpeciesSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export async function createRandom(values) {
  const response = await axiosInstance.post("/api/monsters/random", values);
}
export function getMonsters(skip, limit) {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/api/monsters/?skip=${skip}&limit=${limit}`
      );
      dispatch(slice.actions.getMonstersSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export async function deleteMonsterById(id) {
  const response = await axiosInstance.delete(`/api/monsters/${id}`);
}
