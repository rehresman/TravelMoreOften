import { UPDATE_FEATURED_PHOTO } from '../actions/index';

export default function(state = null, action) {
	switch (action.type) {
    case UPDATE_FEATURED_PHOTO:
      return action.payload;
	}
	return state;
}
