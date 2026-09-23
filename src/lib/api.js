const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5003";

async function request(path, options = {}) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const token = localStorage.getItem("mkjk_admin_token");
  const adminAuth = localStorage.getItem("mkjk_admin_auth");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(adminAuth ? { "x-admin-auth": adminAuth } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_BASE_URL}${cleanPath}`, {
    ...options,
    headers,
  });

  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const errorMsg =
      (isJson && data && data.message) || `API request failed: ${response.status}`;
    throw new Error(errorMsg);
  }

  return data;
}

export const api = {
  get: (path) => request(path),
  post: (path, body) =>
    request(path, { method: "POST", body: JSON.stringify(body) }),
  put: (path, body) =>
    request(path, { method: "PUT", body: JSON.stringify(body) }),
  patch: (path, body) =>
    request(path, { method: "PATCH", body: JSON.stringify(body) }),
  delete: (path) => request(path, { method: "DELETE" }),
  // Multipart FormData file upload
  upload: async (path, formData) => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const token = localStorage.getItem("mkjk_admin_token");
    const adminAuth = localStorage.getItem("mkjk_admin_auth");

    const headers = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(adminAuth ? { "x-admin-auth": adminAuth } : {}),
    };

    const response = await fetch(`${API_BASE_URL}${cleanPath}`, {
      method: "POST",
      headers,
      body: formData,
    });

    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      const errorMsg =
        (isJson && data && data.message) ||
        `Upload failed with status: ${response.status}`;
      throw new Error(errorMsg);
    }

    return data;
  },
};

// Admin authentication using /api/admin/login in code
export const adminLoginApi = async (email, password) => {
  return await api.post("/api/admin/login", { email, password });
};

// Helper to convert backend file paths into absolute displayable URLs
export const getAssetUrl = (url) => {
  if (!url) return "/assets/popup.png";
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("data:") ||
    url.startsWith("blob:")
  ) {
    return url;
  }
  if (url.startsWith("/uploads/")) {
    return `${API_BASE_URL}${url}`;
  }
  return url;
};

export { API_BASE_URL };
export default api;
