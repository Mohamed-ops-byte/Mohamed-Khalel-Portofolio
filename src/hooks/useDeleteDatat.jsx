import api from '../../Api.jsx'

// Deletes using bearer token and optional params payload
const useDeleteDataToken = async (url, params = {}) => {
    const token = localStorage.getItem('auth_token');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
        data: params,
    };
    const res = await api.delete(url, config);
    return res.data;
};

export { useDeleteDataToken };
export default useDeleteDataToken;