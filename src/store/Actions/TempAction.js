import {
  INITIAL
} from '../Types/TempTypes';
import { createBrowserHistory  } from 'history';

export const getAllDatas = (data) => {
  console.log(data,23);
  return ({
    type: INITIAL,
    data:{
      data: "abc", 
    }
  });
}