import api from '../../Api.jsx'

export const useGetData = async (url, parmas) => {
    const res = await api.get(url, parmas);
    return res.data;
}

export const useGetDataToken = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('auth_token')}` }
    };
    const res = await api.get(url, { ...config, params: parmas });
    return res.data;
}

export const useUpdateDataToken = async (url, body) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('auth_token')}` }
    };
    const res = await api.put(url, body, config);
    return res.data;
}