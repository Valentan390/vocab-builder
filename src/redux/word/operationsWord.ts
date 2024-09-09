import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  IAnswersWords,
  ICheckingResultTasks,
  ICreateNewWord,
  IDeleteWord,
  IEditWord,
  INewWord,
  ITasksWordsUser,
  IUserWords,
} from "../../helpers/interfeceData";

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

export const craeteNewWordThunk = createAsyncThunk<
  ICreateNewWord,
  INewWord,
  { rejectValue: string | undefined }
>("words/create", async (newWord, thunkAPI) => {
  try {
    const res = await axios.post<ICreateNewWord>("/words/create", newWord);
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
            message = "Such a word exists";
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

interface IParams {
  page: number;
  limit: number;
  category: string | null;
  keyword: string | null;
  isIrregular: boolean | null;
}

export const getAllUserWordsThunk = createAsyncThunk<
  IUserWords,
  IParams,
  { rejectValue: string | undefined }
>("words/own", async (params, thunkAPI) => {
  try {
    const res = await axios.get<IUserWords>("words/own", {
      params: params,
    });
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

export const getAllWordsThunk = createAsyncThunk<
  IUserWords,
  IParams,
  { rejectValue: string | undefined }
>("words/all", async (params, thunkAPI) => {
  try {
    const { data } = await axios.get<IUserWords>("words/all", {
      params: params,
    });
    return data;
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

export const editWordThunk = createAsyncThunk<
  ICreateNewWord,
  IEditWord,
  { rejectValue: string | undefined }
>("words/edit", async ({ id, ...editWord }, thunkAPI) => {
  try {
    const res = await axios.patch(`words/edit/${id}`, editWord);
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
            message = "This word not found";
            break;
          case 403:
            message = "You don't have right to edit this word";
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

export const deleteWordThunk = createAsyncThunk<
  IDeleteWord,
  string,
  { rejectValue: string | undefined }
>("words/delete", async (id, thunkAPI) => {
  try {
    const res = await axios.delete<IDeleteWord>(`words/delete/${id}`);
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
            message = "This word not found";
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

export const addNewWordThunk = createAsyncThunk<
  ICreateNewWord,
  string,
  { rejectValue: string | undefined }
>("words/add", async (id, thunkAPI) => {
  try {
    const { data } = await axios.post<ICreateNewWord>(`words/add/${id}`);
    toast.success("You have successfully added the word.");
    return data;
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
            message = "Such a word exists";
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

export const getWordsTasksUserThunk = createAsyncThunk<
  ITasksWordsUser,
  void,
  { rejectValue: string | undefined }
>("words/tasks", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<ITasksWordsUser>("words/tasks");
    return data;
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

export const getChecingResultTasksThunk = createAsyncThunk<
  ICheckingResultTasks[],
  IAnswersWords[],
  { rejectValue: string | undefined }
>("words/answers", async (meaning, thunkAPI) => {
  try {
    const { data } = await axios.post<ICheckingResultTasks[]>(
      "words/answers",
      meaning
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";

        switch (status) {
          case 400:
            message = "Bad request (invalid request body)";
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
