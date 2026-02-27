function getCsrfToken() {
  var _a;
  const token = (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content");
  if (!token) {
    console.error("CSRF token not found. This may cause installation issues.");
    return "installer-csrf-fallback";
  }
  return token;
}
async function installerApiRequest(url, options = {}) {
  const csrfToken = getCsrfToken();
  const defaultOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": csrfToken,
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    credentials: "same-origin"
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  };
  return fetch(url, mergedOptions);
}
async function handleApiResponse(response) {
  if (!response.ok) {
    let errorMessage = "Request failed";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (e) {
      errorMessage = response.statusText || errorMessage;
    }
    throw new Error(errorMessage);
  }
  try {
    return await response.json();
  } catch (e) {
    throw new Error("Invalid response format");
  }
}
export {
  handleApiResponse as h,
  installerApiRequest as i
};
