export const parseEdgeNodeToList = (payload: any) => {
    const list: any[] = [];
    payload?.edges.forEach((item: any) => list.push(item?.node));
    return list
}