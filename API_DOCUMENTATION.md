# API & State Management Documentation

This document explains how to use the implemented API and Redux Toolkit structure.

## Folder Structure
```text
src/
├── api/
│   ├── axiosInstance.ts    # Simple Axios configuration
│   └── services/           # Dedicated API services
│       ├── authService.ts  # Auth-related API calls
│       └── projectService.ts # Project-related API calls
├── app/
│   ├── hooks.ts            # Typed Redux hooks (useAppDispatch, useAppSelector)
│   └── store.ts            # Redux store configuration
├── features/
│   └── data/
│       └── dataSlice.ts    # Sample Redux slice (AsyncThunk)
├── hooks/
│   └── useAxios.ts         # Custom hook for API calls
```

## 1. Simple Axios Instance (`axiosInstance.ts`)
The `axiosInstance` is now simpler:
- **Base URL**: Set via `import.meta.env.VITE_API_URL`.
- **Interceptors**: A simple interceptor adds the `Authorization` header if a token is found in `localStorage`.

## 2. Dedicated API Services (`api/services/`)
Instead of making manual `axios` calls in your components, use these services.

### Example: Using `projectService`
```tsx
import { projectService } from './api/services/projectService';

const fetchProjects = async () => {
  try {
    const data = await projectService.getAllProjects();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch projects", error);
  }
};
```

### Available Services:
- `authService`: `login(credentials)`, `signup(userData)`, `logout()`
- `projectService`: `getAllProjects()`, `getProjectById(id)`, `createProject(data)`, etc.

## 3. Redux Toolkit (`RTK`) integration
You can still use `fetchData` from the sample slice, or call services directly inside `createAsyncThunk`.

### Example inside a Thunk:
```tsx
export const fetchAllProjects = createAsyncThunk(
  'projects/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await projectService.getAllProjects();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
```

## 4. Custom Hook (`useAxios`)
For quick, component-level API calls without global state, the `useAxios` hook is still available.

