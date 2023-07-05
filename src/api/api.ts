import axios from "axios"

export const getLens = async (wallet:string) => {
    let response = await axios.post('https://api.lens.dev/',{
        "operationName":"UserProfiles","variables":{"ownedBy":wallet},"query":"query UserProfiles($ownedBy: [EthereumAddress!]) {\n  profiles(request: {ownedBy: $ownedBy}) {\n    items {\n      ...ProfileFields\n      interests\n      isDefault\n      dispatcher {\n        address\n        canUseRelay\n        sponsor\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ProfileFields on Profile {\n  id\n  name\n  handle\n  bio\n  ownedBy\n  isFollowedByMe\n  stats {\n    totalFollowers\n    totalFollowing\n    __typename\n  }\n  attributes {\n    key\n    value\n    __typename\n  }\n  picture {\n    ... on MediaSet {\n      original {\n        url\n        __typename\n      }\n      __typename\n    }\n    ... on NftImage {\n      uri\n      __typename\n    }\n    __typename\n  }\n  followModule {\n    __typename\n  }\n  __typename\n}"
    })
    return response.data.data.profiles.items[0].handle
}

export const searchProfiles = async (str:string) => {
    let response = await axios.post('https://api.lens.dev/',
        {"operationName":"SearchProfiles","variables":{"request":{"query":str,"type":"PROFILE","customFilters":["GARDENERS"],"limit":10}},"query":"query SearchProfiles($request: SearchQueryRequest!) {\n  search(request: $request) {\n    ... on ProfileSearchResult {\n      items {\n        ...ProfileFields\n        __typename\n      }\n      pageInfo {\n        next\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ProfileFields on Profile {\n  id\n  name\n  handle\n  bio\n  ownedBy\n  isFollowedByMe\n  stats {\n    totalFollowers\n    totalFollowing\n    __typename\n  }\n  attributes {\n    key\n    value\n    __typename\n  }\n  picture {\n    ... on MediaSet {\n      original {\n        url\n        __typename\n      }\n      __typename\n    }\n    ... on NftImage {\n      uri\n      __typename\n    }\n    __typename\n  }\n  followModule {\n    __typename\n  }\n  __typename\n}"
    })
    return response.data.data.search.items
}