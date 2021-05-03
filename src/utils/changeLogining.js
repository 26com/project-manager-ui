import store from '../store';
import { loginingSuccess } from '../store/entities/Logining/slice';

function changeLogining() {
  store.dispatch(loginingSuccess(false));
}

export default changeLogining;
