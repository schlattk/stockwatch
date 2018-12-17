const apiCall: any = (uri: any): Promise<any> => {
    return fetch(uri)
      .then( (res) => {
         return res
      })
      .catch( (ex) => {
         return 0
      })
}

  export default apiCall;