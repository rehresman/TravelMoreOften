import { FETCH_PHOTOS } from '../actions/index';

//TODO: might want to replace the state instead of appending.
// 			Need multi-page data.  Probably want to add an APPEND_PHOTOS action
//			to support async loading/infinite scrolling anyway.
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_PHOTOS:
			return [ ...action.payload, ...state ];
	}
	return state;
}
