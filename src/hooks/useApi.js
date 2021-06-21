import axios from "axios";

export const useAPI = () => {
  const { token } = { token: null };

  const defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Basic YWRtaW46MTIzNA==`,
  };
  const baseUrl = `http://localhost`; //dummy endpoint

  const customFetch = ({
    endpoint,
    method = "GET",
    body = {},
    headers = defaultHeader,
    responseType,
  }) => {
    const url = `${baseUrl}/${endpoint}`;
    const options = {
      method,
      headers,
    };

    if (Object.keys(body).length) options.data = body;
    if (responseType) options.responseType = responseType;

    return axios(url, options)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error, "api error");
      });
  };

  const get = ({ endpoint, id, query, token }) => {
    const url = `${endpoint}${
      id ? `/${id}${query ? `?${query}` : ""}` : `${query ? `?${query}` : ""}`
    }`;

    if (token) {
      defaultHeader.Authorization = `Bearer ${token}`;
    }
    return customFetch({ endpoint: url });
  };

  const post = ({ endpoint, body = {} }) => {
    return customFetch({ endpoint, method: "POST", body });
  };

  return {
    get,
    post
  };
};
