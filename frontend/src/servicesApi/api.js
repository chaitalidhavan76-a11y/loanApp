const API_URL = "http://localhost:5000/api";

// ============= AUTH APIs (Your existing code) =============

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  // Store token in localStorage
  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
};

// ============= HELPER: Get Auth Headers =============

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// ============= HOME LOAN APIs (NEW) =============

export const createHomeLoanApplication = async (applicationData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login first to submit application");
  }

  const response = await fetch(`${API_URL}/applications`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      ...applicationData,
      loanType: "home",
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit application");
  }

  return data;
};

// Get all my applications
export const getMyApplications = async () => {
  const response = await fetch(`${API_URL}/applications`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch applications");
  }

  return data;
};

// Get single application by ID
export const getApplicationById = async (id) => {
  const response = await fetch(`${API_URL}/applications/${id}`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch application");
  }

  return data;
};

// Update application
export const updateApplication = async (id, updates) => {
  const response = await fetch(`${API_URL}/applications/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(updates),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update application");
  }

  return data;
};

// Delete application
export const deleteApplication = async (id) => {
  const response = await fetch(`${API_URL}/applications/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete application");
  }

  return data;
};

export const updateUserInfo = async (data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/user/update-deatils`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getUserInfoById = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};


export const getDashboardData = async () => {
  const token = localStorage.getItem("token");
  console.log(token)

  const res = await fetch("http://localhost:5000/api/dashboard/summary", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
