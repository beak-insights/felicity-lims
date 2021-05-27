
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
 

 export const snakeToCamel = (s: any) => s.replace(/(_\w)/g, (k: any) => k[1].toUpperCase());
 
// Example : data = Object.entries(data).reduce((x,[k,v]) => (x[snakeToCamel(k)]=v) && x, {})
 