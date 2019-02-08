import { 
  ADD_IDEA, 
  ADD_IDEA_DESCRIPTION, 
  CHANGE_TO_SUMMARY, 
  CHANGE_TO_FEATURES, 
  CHANGE_TO_STRATEGIES, 
  CHANGE_TO_INSPIRATION, 
  CHANGE_TO_BUSINESS_MODEL, 
  CHANGE_TO_PLANNING, 
  CHANGE_TO_RESOURCES,
  ADD_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE, 
  DELETE_IDEA,
  SET_IDEAS
} from 'actions/types'

const endpoint = process.env.REACT_APP_ENDPOINT

export const addIdea = (idea) => ({
  type: ADD_IDEA,
  idea
})

export const startAddIdea = (ideaData = {}) => {
  return dispatch => {
    const configuration = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: ideaData.id,
        category: ideaData.category,
        name: 'Undefined name',
        description: 'Undefined description',
        target: 'Undefined target',
        created_at: ideaData.createdAt
      })
    }

    return fetch(endpoint + '/create', configuration)
      .then(
        dispatch(addIdea(ideaData))
      )
  }
}

export const addIdeaDescription = (id, updates) => ({
  type: ADD_IDEA_DESCRIPTION,
  id,
  updates
})

export const startAddIdeaDescription = (idea_id = {}, descriptionData = {}) => {
  return dispatch => {
    const { name, description, target } = descriptionData

    const configuration = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        target,
        idea_id
      })
    }

    return fetch(endpoint + '/create/description', configuration)
      .then(dispatch(addIdeaDescription(idea_id, descriptionData)))
  }
}

export const deleteIdea = (id) => ({
  type: DELETE_IDEA,
  id
})

export const startDeleteIdea = (id) => {
  return dispatch => {
    const configuration = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    }

    return fetch(endpoint + '/delete/idea', configuration)
      .then(dispatch(deleteIdea(id)))
  }
}

export const changeToSummary = () => ({
  type: CHANGE_TO_SUMMARY
})

export const changeToFeatures = () => ({
  type: CHANGE_TO_FEATURES
})

export const changeToStrategies = () => ({
  type: CHANGE_TO_STRATEGIES
})

export const changeToInspiration = () => ({
  type: CHANGE_TO_INSPIRATION
})

export const changeToBusinessModel = () => ({
  type: CHANGE_TO_BUSINESS_MODEL
})

export const changeToPlanning = () => ({
  type: CHANGE_TO_PLANNING
})

export const changeToResources = () => ({
  type: CHANGE_TO_RESOURCES
})

export const addFeature = (id, feature) => ({
  type: ADD_FEATURE,
  id,
  feature
})

export const editFeature = (id, updates) => ({
  type: EDIT_FEATURE,
  id,
  updates
})

export const deleteFeature = ({ id }) => ({
  type: DELETE_FEATURE,
  id
})

export const setIdeas = (ideas) => ({
  type: SET_IDEAS,
  ideas
})

export const startSetIdeas = () => {
  return dispatch => {
    const configuration = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    console.log(endpoint)
    return fetch(endpoint + '/api/ideas', configuration)
      .then(res => res.json())
      .then(json => dispatch(setIdeas(json)))
  }
}