const myJsonLocationsList = {
    "data": [
      {
        "id": 1,
        "description": "Cordoba"
      },
      {
        "id": 2,
        "description": "Buenos Aires"
      },
      {
        "id": 3,
        "description": "Mendoza"
      }
    ],
    "errorMessage": null
}

const myJsonOscsList = {
  "data": [
    {
      "id": 1,
      "description": "Soles"
    },
    {
      "id": 2,
      "description": "Afulic"
    },
    {
      "id": 3,
      "description": "LALCEC"
    }
  ],
  "errorMessage": null
}

const myJsonCampaignTypeList = {
  "data": [
    {
      "id": 1,
      "description": "F2F"
    },
    {
      "id": 2,
      "description": "D2D"
    }
  ],
  "errorMessage": null
}

const myJsoncCampaignModalityList = {
  "data": [
    {
      "id": 1,
      "description": "Vía Pública"
    },
    {
      "id": 2,
      "description": "Itinerancia"
    },
    {
      "id": 3,
      "description": "Evento"
    }
  ],
  "errorMessage": null
}

const OBTAIN_LOCATIONS = "obtain_locations_list";
const ERROR_OBTAIN_LOCATIONS = "error_obtain_locations_list";
const CHANGE_LOCATION = "change_location";
const OBTAIN_OSCS = "obtain_oscs_list";
const ERROR_OBTAIN_OSCS = "error_obtain_oscs_list";
const CHANGE_OSC = "change_osc";
const OBTAIN_CAMPAIGN_TYPES = "obtain_campaign_types_list";
const ERROR_OBTAIN_CAMPAIGN_TYPES = "error_obtain_campaign_types_list";
const CHANGE_CAMPAIGN_TYPE = "change_campaign_type";
const OBTAIN_CAMPAIGN_MODALITIES = "obtain_campaign_modalities_list";
const ERROR_OBTAIN_CAMPAIGN_MODALITIES = "error_obtain_campaign_modalities_list";
const CHANGE_CAMPAIGN_MODALITY = "change_campaign_modality";


export const campaignTypes = {
  OBTAIN_LOCATIONS,
  CHANGE_LOCATION,
  ERROR_OBTAIN_LOCATIONS,
  OBTAIN_OSCS,
  ERROR_OBTAIN_OSCS,
  CHANGE_OSC,
  OBTAIN_CAMPAIGN_TYPES,
  ERROR_OBTAIN_CAMPAIGN_TYPES,
  CHANGE_CAMPAIGN_TYPE,
  OBTAIN_CAMPAIGN_MODALITIES,
  ERROR_OBTAIN_CAMPAIGN_MODALITIES,
  CHANGE_CAMPAIGN_MODALITY,
}



export const obtainLocations = () => async(dispatch) => {
    try {
        const response = myJsonLocationsList;
        dispatch({
            type: OBTAIN_LOCATIONS,
            payload: response.data
        })    
    } catch (error) {
        dispatch({
            type: ERROR_OBTAIN_LOCATIONS,
            payload: 'Algo salió mal, intente más tarde.'
        })
    }
}

export const changeLocation = (value) =>{
    return {
        type: CHANGE_LOCATION, 
        payload: value
    };  
}

export const obtainOscs = () => async(dispatch) => {
  try {
      const response = myJsonOscsList;
      dispatch({
          type: OBTAIN_OSCS,
          payload: response.data
      })    
  } catch (error) {
      dispatch({
          type: ERROR_OBTAIN_OSCS,
          payload: 'Algo salió mal, intente más tarde.'
      })
  }
}

export const changeOsc = (value) =>{
  return {
      type: CHANGE_OSC, 
      payload: value
  };  
}

export const obtainCampaignTypes = () => async(dispatch) => {
  try {
      const response = myJsonCampaignTypeList;
      dispatch({
          type: OBTAIN_CAMPAIGN_TYPES,
          payload: response.data
      })    
  } catch (error) {
      dispatch({
          type: ERROR_OBTAIN_CAMPAIGN_TYPES,
          payload: 'Algo salió mal, intente más tarde.'
      })
  }
}

export const changeCampaignType = (value) =>{
  return {
      type: CHANGE_CAMPAIGN_TYPE, 
      payload: value
  };  
}

export const obtainCampaignModalities = () => async(dispatch) => {
  try {
      const response = myJsoncCampaignModalityList;
      dispatch({
          type: OBTAIN_CAMPAIGN_MODALITIES,
          payload: response.data
      })    
  } catch (error) {
      dispatch({
          type: ERROR_OBTAIN_CAMPAIGN_MODALITIES,
          payload: 'Algo salió mal, intente más tarde.'
      })
  }
}

export const changeCampaignModality = (value) =>{
  return {
      type: CHANGE_CAMPAIGN_MODALITY, 
      payload: value
  };  
}