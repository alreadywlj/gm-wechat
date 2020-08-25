import { baseError } from './baseError';


export default class validateParams {

  validateData(dataType, data, nullAble) {

    if (!dataType || !data || !nullAble) {
      baseError(PARAM_VALIDATE_ERROR);
    }
      
    if(nullAble){


    }





  }


}