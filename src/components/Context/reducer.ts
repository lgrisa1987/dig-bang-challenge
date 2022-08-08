import { InitialStateProps, ActionProps } from '../../types';

export const reducer = (state: InitialStateProps, action: ActionProps) => {
  switch (action.type) {
    case 'montoTotal':
      return { ...state, montoTotal: action.payload };
    case 'plazo':
      return { ...state, plazo: !action.payload ? 3 : action.payload};
    case 'setCuotaFija':
      return {
        ...state,
        cuotaFija: action.payload,
      };
    case 'setInvalid':
      return {
        ...state,
        invalid: action.payload,
      };
      case "setResetValues":
        return{
          ...state, ...action.payload
        }
        case "setRotateMain":
        return {
        ...state,
        rotateMain: !state.rotateMain,
      };
    default:
      return state;
  }
};
