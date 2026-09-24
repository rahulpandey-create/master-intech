const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const submitEnquiry = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit enquiry.");
  }

  return data;
};
