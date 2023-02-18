import { check, PERMISSIONS, requestMultiple, RESULTS } from 'react-native-permissions';
import { showToast } from './tost';

export const checkLocationPermission = (onGranted: () => void) => {
  check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
    .then((result: any) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          showToast('This feature is not available (on this device / in this context)');
          break;
        case RESULTS.DENIED:
          askPermission(onGranted);
          break;
        case RESULTS.GRANTED:
          onGranted();
          break;
        case RESULTS.BLOCKED:
          showToast('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch((error) => {
      showToast(error);
    });
};

const askPermission = (onGranted: () => void) => {
  requestMultiple([
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ])
    .then((result) => {
      switch (result['android.permission.READ_EXTERNAL_STORAGE']) {
        case RESULTS.UNAVAILABLE:
          showToast('This feature is not available (on this device / in this context)');
          break;
        case RESULTS.DENIED:
          showToast('The permission is denied and not requestable anymore');
          break;
        case RESULTS.GRANTED:
          onGranted();
          break;
        case RESULTS.BLOCKED:
          showToast('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch((error) => {
      showToast(error);
    });
};
