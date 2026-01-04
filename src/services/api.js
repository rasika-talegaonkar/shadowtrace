import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getDashboardStats = () =>
  API.get("/dashboard/stats");

export const getActivityTrends = () =>
  API.get("/dashboard/activity-trends");

// export const getPlatformDistribution = () =>
//   API.get("/dashboard/platform-distribution");

export const getPlatformDistribution = () =>
  API.get("/dashboard/platform-distribution")
