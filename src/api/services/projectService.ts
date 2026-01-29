import axiosInstance from '../axiosInstance';

// Project API calls
export const projectService = {
  getAllProjects: async () => {
    const response = await axiosInstance.get('/projects');
    return response.data;
  },

  getProjectById: async (id: string) => {
    const response = await axiosInstance.get(`/projects/${id}`);
    return response.data;
  },

  createProject: async (projectData: any) => {
    const response = await axiosInstance.post('/projects', projectData);
    return response.data;
  },

  updateProject: async (id: string, projectData: any) => {
    const response = await axiosInstance.put(`/projects/${id}`, projectData);
    return response.data;
  },

  deleteProject: async (id: string) => {
    const response = await axiosInstance.delete(`/projects/${id}`);
    return response.data;
  }
};
