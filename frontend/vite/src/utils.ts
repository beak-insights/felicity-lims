import moment from 'moment';


export const parseDate = function(str: string) {
    let date = moment(str);
    if(date.isValid()) {
        return date.format('MMMM Do YYYY, h:mm:ss a');
    }
    return str;
}

export const parseEdgeNodeToList = (payload: any) => {
    const list: any[] = [];
    if(!payload || !payload?.edges ) return payload;
    payload?.edges.forEach((item: any) => list.push(item?.node));
    return list
}

export const isNullOrWs = function(str: any) {
    return (
      typeof str === "undefined" ||
      str === null ||
      (typeof str === "string" && str.trim().length === 0)
    );
  };
  
const isValidJson = function(str: any) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export const parseData = function(data: any) {
    if (!data) return {};
    if (typeof data === 'object') return data;
    if (typeof data === 'string') return JSON.parse(data);
    return {};
}

export const parseUrlParams = () => {
    const search = window.location.search.substring(1);
    if (!search) return {};

    const str = search.replace(/&/g, '","').replace(/=/g, '":"');
    const json = `{"${str}"}`;
    const transform = (key: any, value: any) =>
        isNullOrWs(key) ? value : decodeURIComponent(value);

    return isValidJson(json) ? JSON.parse(json, transform) : {};
}

export const startsWith = (str: any, word: any) => {
    return str.lastIndexOf(word, 0) === 0;
}

export default {
    isNullOrWs,
    parseUrlParams,
    startsWith,
};



let data = {
    'id':'123',
    'employee_name': 'John',
    'employee_type': 'new'  
 }
 

export const snakeToCamel = (val: any) => {
    const convert = (s: any) => s.replace(/(_\w)/g, (k: any) => k[1].toUpperCase());
    if (typeof val === 'object') {
        data = Object.entries(val).reduce((x: any,[k,v]) => (x[convert(k)]=v) && x, {});
        return data;
    }
    if (typeof val === 'string') {
        return convert(val);
    }
    throw "--- error converting ---"
}