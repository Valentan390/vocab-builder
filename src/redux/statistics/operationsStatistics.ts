import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const statisticsThunk = createAsyncThunk<
  { totalCount: number },
  void,
  { rejectValue: string }
>("word/statistics", async (_, thunkAPI) => {
  try {
    const res = await axios.get<{ totalCount: number }>("/words/statistics");
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
