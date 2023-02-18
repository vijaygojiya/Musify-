import { FORCEUPDATE_SET, MAINTENANCE_SET, SHOW_LOADER } from '../types';

export const updateMaintenance = (value: any) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: MAINTENANCE_SET,
      payload: value,
    });
  };
};

export const updateLoader = (value: any) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SHOW_LOADER,
      payload: value,
    });
  };
};

export const updateForceUpdateFlag = (value: any) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: FORCEUPDATE_SET,
      payload: value,
    });
  };
};
