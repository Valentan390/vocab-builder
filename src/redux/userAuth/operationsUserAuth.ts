import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFormData, User } from "../../helpers/interfeceData";
import { RootState } from "../stor";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

const setAuthHeader: (token: string) => void = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const userRegister = createAsyncThunk<
  User,
  IFormData,
  { rejectValue: string }
>("user/register", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post<User>("/users/signup", credentials);
    setAuthHeader(res.data.token);
    toast.success("You have successfully registered.");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 400:
            message = "Bad request (invalid request body).";
            break;
          case 401:
            message = "Unauthorized. Please check your credentials.";
            break;
          case 404:
            message = "Service not found.";
            break;
          case 409:
            message = "Such email already exists.";
            break;
          case 500:
            message = "Server error.";
            break;
          default:
            message = "An unknown error occurred.";
        }
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else if (error.request) {
        const message = "No response from the server. Please try again later.";
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else {
        const message = `Request error: ${error.message}`;
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      }
    } else if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const userLogin = createAsyncThunk<
  User,
  IFormData,
  { rejectValue: string }
>("user/login", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post<User>("users/signin", credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 400:
            message = "Bad request (invalid request body)";
            break;
          case 401:
            message = "Email or password invalid";
            break;
          case 404:
            message = "Service not found";
            break;
          case 500:
            message = "Server error";
            break;
          default:
            message = "An unknown error occurred.";
            break;
        }
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else if (error.request) {
        const message = "No response from the server. Please try again later.";
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else {
        const message = `Request error: ${error.message}`;
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      }
    } else if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const userLogOut = createAsyncThunk<void, void, { rejectValue: string }>(
  "user/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("users/signout");
      clearAuthHeader();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const status = error.response.status;
          let message = "An error occurred";
          switch (status) {
            case 401:
              message = "Unauthorized";
              break;
            case 404:
              message = "Service not found";
              break;
            case 500:
              message = "Server error";
              break;
            default:
              message = "An unknown error occurred.";
              break;
          }
          toast.error(message);
          return thunkAPI.rejectWithValue(message);
        } else if (error.request) {
          const message =
            "No response from the server. Please try again later.";
          toast.error(message);
          return thunkAPI.rejectWithValue(message);
        } else {
          const message = `Request error: ${error.message}`;
          toast.error(message);
          return thunkAPI.rejectWithValue(message);
        }
      } else if (error instanceof Error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const userRefresh = createAsyncThunk<
  User,
  void,
  { rejectValue: string; state: RootState }
>("user/refresh", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.userAuth.token;
    if (persistedToken === "") {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setAuthHeader(persistedToken);
    const res = await axios.get<User>("/users/current");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 401:
            message = "Unauthorized";
            break;
          case 404:
            message = "Service not found";
            break;
          case 500:
            message = "Server error";
            break;
          default:
            message = "An unknown error occurred.";
            break;
        }
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else if (error.request) {
        const message = "No response from the server. Please try again later.";
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else {
        const message = `Request error: ${error.message}`;
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      }
    } else if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
