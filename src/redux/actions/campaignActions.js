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

const OBTAIN_LOCATIONS = "obtain_locations_list";
const ERROR_OBTAIN_LOCATIONS = "error_obtain_locations_list";
const CHANGE_LOCATION = "change_location";



export const locationTypes = {
 OBTAIN_LOCATIONS,
 CHANGE_LOCATION,
 ERROR_OBTAIN_LOCATIONS,
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