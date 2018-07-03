import { FETCH_ORIGINAL_URL } from '../actions/index';


export default function(state = null, action) {
	switch (action.type) {
		case FETCH_ORIGINAL_URL:
			return action.payload;
	}
	return state;
}
