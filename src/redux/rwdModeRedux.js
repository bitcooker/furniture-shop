/* selectors */
export const getMode = ({ rwdMode }) => rwdMode;

/* action name creator */
const reducerName = 'rwdMode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_MODE = createActionName('CHANGE_MODE');

/* action creators */
export const changeMode = payload => ({ payload, type: CHANGE_MODE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_MODE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
