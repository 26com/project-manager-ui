import clientAPI from '../../../utils/clientAPI';

// import actions from './actions';
import {
  workspaceDeletingStart, workspaceDeletingSuccess,
  workspaceGettingStart, workspaceGettingSuccess,
  workspaceCreatingStart, workspaceCreatingSuccess,
} from './slice';

export const createNew = (data) => (dispatch) => {
  dispatch(workspaceCreatingStart());

  clientAPI.post('workspace', data)
    .then(() => {
      dispatch(workspaceCreatingSuccess(`СОЗДАНА РАБОЧАЯ ЗОНА "${data.name}"`));
      setTimeout(() => dispatch(workspaceCreatingSuccess('')), 3000);
    })
    .catch(() => {
    //   console.log('EMAIL УЖЕ ЗАРЕГЕСТРИРОВАН');
      dispatch(workspaceCreatingSuccess('РАБОЧАЯ ЗОНА НЕ БЫЛА СОЗДАНА'));
      setTimeout(() => dispatch(workspaceCreatingSuccess('')), 3000);
    });
};

export const deleteOne = (data) => (dispatch) => {
  dispatch(workspaceDeletingStart());
  clientAPI.delete('workspace', {
    params: {
      id: data,
    },
  })
    .then(() => {
      dispatch(workspaceDeletingSuccess());
    })
    .catch(() => {
    });
};

export const getByUser = () => (dispatch) => {
  dispatch(workspaceGettingStart());

  clientAPI.get('workspace')
    .then((res) => {
      dispatch(workspaceGettingSuccess(res.data.data));
    })
    .catch(() => {
      dispatch(workspaceGettingSuccess('РАБОЧИЕ ЗОНЫ НЕ ЗАГРУЖЕНЫ'));
      setTimeout(() => dispatch(workspaceGettingSuccess('')), 3000);
    });
};
