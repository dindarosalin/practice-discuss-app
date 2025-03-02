import { configureStore } from '@reduxjs/toolkit';
// import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth/reducer';
import usersReducer from './users/reducer';
// import isPreloadReducer from './isPreload/reducer';
// import leaderboardsReducer from './leaderboards/reducer';
// import threadReducer from './threads/reducer';
// import threadDetailReducer from './threadDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users : usersReducer,
    // isPreload: isPreloadReducer,
    // threads: threadReducer,
    // threadDetail: threadDetailReducer,
    // leaderboards: leaderboardsReducer,
    // loadingBar: loadingBarReducer,
  },
});

export default store;