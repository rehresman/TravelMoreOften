import axios from 'axios';
import Xml2Js from 'xml-js';

const API_KEY = 'f39d273504223759c2a64e33c255247b';
const USER_ID = '159266099@N02';
const FORMAT = 'rest';
const EXTRAS = 'geo, description';
const SEARCH_URL = `https://api.flickr.com/services/rest/`
										+ `?method=flickr.photos.search`
										+ `&api_key=${API_KEY}`
										+ `&user_id=${USER_ID}`
										+ `&extras=${EXTRAS}`
										+ `&format=${FORMAT}`;

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_ORIGINAL_URL = 'FETCH_ORIGINAL_URL';
export const UPDATE_FEATURED_PHOTO = 'UPDATE_FEATURED_PHOTO';


export function asyncFetchPhotos(term) {
	return (dispatch, getState) => dispatch(fetchPhotos(term))
		.then(() => Promise.all([
									dispatch(updateFeaturedPhoto(getState().photos[0])),
									dispatch(fetchOriginalUrl(getState().photos[0]))
									])
					)
		.then(() => {console.log('result after asyncFetchPhotos: ', getState())});
}

export function thumbnailClick(photo) {
	return (dispatch, getState) => Promise.all([
									dispatch(updateFeaturedPhoto(photo)),
									dispatch(fetchOriginalUrl(photo))
									])
		.then(() => {console.log('result after thumbnailClick: ', getState())});
}

function fetchPhotos(term) {
	//TODO: add search term eval to the url. right now 'term' just gets thrown away
	const url = `${SEARCH_URL}`;
	const request = axios.get(url);
	return {
		type: FETCH_PHOTOS,
		payload: request.then(
			wrapper => formatPhotosAsArray(wrapper).photo)
	};
}

function formatPhotosAsArray(xml) {
	return Xml2Js.xml2js(xml.data, {compact: true}).rsp.photos;
}

function fetchOriginalUrl(photo) {
	let url = `https://api.flickr.com/services/rest/`
											+ `?method=flickr.photos.getSizes`
											+ `&api_key=${API_KEY}`
											+ `&photo_id=${photo._attributes.id}`
											+ `&format=rest`;
	const request = axios.get(url);
	return {
		type: FETCH_ORIGINAL_URL,
		payload: request.then(
			(wrapper) => {return selectOriginalPhotoUrl(wrapper)})
	}
}

function selectOriginalPhotoUrl(xml) {
	const formattedToArray = Xml2Js.xml2js(xml.data, {compact: true})
				.rsp.sizes.size;
	const filtered = formattedToArray.filter(
				size => size._attributes.label === "Original");
	return filtered[0]._attributes.source;
}

function updateFeaturedPhoto(photo) {
	return {
		type: UPDATE_FEATURED_PHOTO,
		payload: photo
	}
}
