import clientAPI from '../../../utils/clientAPI';

// import actions from './actions';
import {
  workspaceDeletingStart, workspaceDeletingSuccess,
  workspaceGettingStart, workspaceGettingSuccess,
  workspaceCreatingStart, workspaceCreatingSuccess,
} from './slice';

export const getByUser = () => (dispatch) => {
  clientAPI.get('workspace')
    .then((res) => {
      dispatch(workspaceGettingSuccess(res.data.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createNew = (data) => (dispatch) => {
  clientAPI.post('workspace', data)
    .then(() => {
      dispatch(getByUser());
    })
    .catch(() => {
    });
};

export const deleteOne = (data) => (dispatch) => {
  clientAPI.delete('workspace', {
    params: {
      id: data,
    },
  })
    .then(() => {
      dispatch(getByUser());
      console.log('deleteOne - then');
    })
    .catch(() => {
    });
};
