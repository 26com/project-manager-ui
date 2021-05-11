import clientAPI from '../../../utils/clientAPI';
import {
  projectGettingSuccess,
  projectSetCurrentWorkspace,
} from './slice';

export const getByUser = () => (dispatch) => {
  clientAPI.get('project/user')
    .then((res) => {
      dispatch(projectGettingSuccess(res.data.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getByWorkspace = (workspaceId) => (dispatch) => {
  clientAPI.get('project/workspace', {
    params: {
      workspaceId,
    },
  })
    .then((res) => {
      dispatch(projectSetCurrentWorkspace(res.data.workspace));
      dispatch(projectGettingSuccess(res.data.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createNew = (data) => (dispatch) => {
  clientAPI.post('project', data)
    .then(() => {
      dispatch(getByWorkspace(data.workspaceId));
    })
    .catch(() => {
    });
};

export const deleteOne = (data) => (dispatch) => {
  clientAPI.delete('project', {
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
