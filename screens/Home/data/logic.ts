import { createLogic } from 'redux-logic';
import * as types from './actionTypes';

export const homeLogic = createLogic({
  type: types.HOME_SEARCH_ACTION, // filter for actions of this type
  cancelType: types.HOME_SEARCH_CANCELLED, // cancel if action is dispatched
  // throttle: 2000,
  latest: true, // only provide the latest if fired many times
  processOptions: {
    dispatchReturn: false, // dispatch from resolved/rejected promise
    failType: types.HOME_SEARCH_FAILED, // use action type for errors
  },
  async process({}, dispatch, done) {
    console.log('logic')
    // const clipId = action.payload;
    // const clipDetail = await getVideo(clipId, true);
    // if (!clipDetail.error) {
    //   if (clipId.startsWith('tv_')) {
    //     const video = clipDetail.video;
    //     const match = /external\/\d+/.exec(video.file);
    //     if (match) {
    //       const id = match[0].replace('external/', '');
    //       clipDetail.video.uri = `https://player.vimeo.com/video/${id}`;
    //     }
    //   }
    dispatch({ type: types.HOME_SEARCH_SUCCESS, payload: { isLoading: true } });
    // }
    done();
  },
});



export default [
  homeLogic,
];
