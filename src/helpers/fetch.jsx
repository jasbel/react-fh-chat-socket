import { baseUrl } from "./config";

export const fetchNoToken = async (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    const resp = await fetch(url);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await resp.json();
  }
};
