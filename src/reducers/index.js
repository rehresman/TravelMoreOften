import { combineReducers } from 'redux';
import PhotosReducer from './reducer_photos';
import featuredPhotoReducer from './reducer_featured_photo';
import featuredPhotoUrlReducer from './reducer_featured_photo_url';

const rootReducer = combineReducers({
  photos: PhotosReducer,
  featuredPhoto: featuredPhotoReducer,
  featuredPhotoUrl: featuredPhotoUrlReducer
});

export default rootReducer;
