const CHANGE_DNI = "change_dni_number";

export const dniTypes = {
    CHANGE_DNI
}

export const changeDni = (value) =>{
    console.log("ingresa a actions de dni con valor : "+value)
    return {
        type: CHANGE_DNI, 
        payload: value
    };  
}