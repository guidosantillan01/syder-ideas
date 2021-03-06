import {
  ADD_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE,
  SET_FEATURES,
  UPDATE_FEATURES_AFTER_IDEA_DELETE
} from './types';

const endpoint = process.env.REACT_APP_ENDPOINT;
const featuresAPIRoute = '/api/features';

export const addFeature = (id, feature) => ({
  type: ADD_FEATURE,
  id,
  feature
});

export const startAddFeature = (ideaId, featureData) => {
  return dispatch => {
    const { id, text } = featureData;

    const configuration = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        id,
        text,
        idea_id: ideaId
      })
    };

    return fetch(`${endpoint + featuresAPIRoute}/create`, configuration)
      .then(dispatch(addFeature(ideaId, featureData)))
      .catch(err => console.log(err));
  };
};

export const editFeature = (id, updates) => ({
  type: EDIT_FEATURE,
  id,
  updates
});

export const startEditFeature = (ideaId, featureUpdates) => {
  return dispatch => {
    const { id, text } = featureUpdates;

    const configuration = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        id,
        text
      })
    };

    return fetch(`${endpoint + featuresAPIRoute}/update`, configuration)
      .then(dispatch(editFeature(ideaId, featureUpdates)))
      .catch(err => console.log(err));
  };
};

export const deleteFeature = ({ id }) => ({
  type: DELETE_FEATURE,
  id
});

export const startDeleteFeature = ({ id }) => {
  return dispatch => {
    const configuration = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        id
      })
    };

    return fetch(`${endpoint + featuresAPIRoute}/delete`, configuration)
      .then(dispatch(deleteFeature({ id })))
      .catch(err => console.log(err));
  };
};

export const setFeatures = features => ({
  type: SET_FEATURES,
  features
});

export const startSetFeatures = () => {
  return dispatch => {
    const configuration = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      }
    };

    return fetch(`${endpoint + featuresAPIRoute}/user`, configuration)
      .then(res => res.json())
      .then(json => dispatch(setFeatures(json)))
      .catch(err => console.log(err));
  };
};

export const updateFeaturesAfterIdeaDelete = id => ({
  type: UPDATE_FEATURES_AFTER_IDEA_DELETE,
  id
});

export const startUpdateFeaturesAfterIdeaDelete = id => {
  return dispatch => {
    const configuration = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        id
      })
    };

    return fetch(`${endpoint + featuresAPIRoute}/clear`, configuration)
      .then(dispatch(updateFeaturesAfterIdeaDelete(id)))
      .catch(err => console.log(err));
  };
};
