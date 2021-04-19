export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export default {
  registerStart: () => ({ type: REGISTER_START }),
  registerSuccess: (data) => ({
    type: REGISTER_SUCCESS,
    data,
  }),
};
