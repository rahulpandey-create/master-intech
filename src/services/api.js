const API_BASE_URL = "http://localhost:5000/api";

export const submitEnquiry = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit enquiry.");
  }

  return data;
};