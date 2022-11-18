import httpClient from '../http-common';

const getAll = (patientId) => {
    return httpClient.get(`/patients/${patientId}/visits`);
}

const create = (patientId,data) => {
   return httpClient.post(`/patients/${patientId}/visits`, data);
}

const get = (patientId,visitId) => {
    return httpClient.get(`/patients/${patientId}/visits/${visitId}`);
}

const update = (patientId,visitId,data) => {
    return httpClient.put(`/patients/${patientId}/visits/${visitId}`, data);
}

const remove =  (patientId,visitId) => {
    return httpClient.delete(`/patients/${patientId}/visits/${visitId}`);
}

export default {getAll, create, get, update, remove};