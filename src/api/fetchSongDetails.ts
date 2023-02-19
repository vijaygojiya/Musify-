import { apiEndPoints } from './ApiConst';
import { formatSingleSongResponse } from './format';
import { getResponse } from './getResponse';

export async function fetchSongDetails(songId: string) {
  const params = `pids=${songId}&${apiEndPoints['songDetails']}`;
  try {
    const res = await getResponse(params);
    if (res.status === 200) {
      return await formatSingleSongResponse(res.data['songs'][0]);
    }
  } catch (e) {
    console.error(`Error in fetchSongDetails: ${e}`);
  }
  return {};
}
