import axios from "axios";

const API = "http://localhost:5000/api/admin/dsa";

export const fetchSummary = () => axios.get(`${API}/summary`);
export const fetchPerformance = () => axios.get(`${API}/performance`);
export const fetchStatus = () => axios.get(`${API}/application-status`);
export const fetchAllDSAs = () => axios.get(`${API}/dsas`);
export const updateDSAStatus = (id, status) => axios.put(`${API}/dsas/${id}/status`, { status });
