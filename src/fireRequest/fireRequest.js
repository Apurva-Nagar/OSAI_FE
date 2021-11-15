import axiosClient from "../axios/axiosClient";
import api from "../api/api";

const isEmptyObject = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

const fireRequest = async (key, pathParam = {}, queryParam = {}) => {
  try {
    const request = Object.assign({}, api[key]);

    if (!isEmptyObject(pathParam)) {
      Object.keys(pathParam).forEach((param) => {
        request.endpoint = request.endpoint.replace(
          `{${param}}`,
          pathParam[param]
        );
      });
    }

    if (!isEmptyObject(queryParam)) {
      const qs = new URLSearchParams(queryParam).toString();
      request.endpoint += `?${qs}`;
    }

    const { data } = await axiosClient[request.method.toLowerCase()](
      request.endpoint
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fireRequest;
