const loggedReducer = () => {
      return document.cookie.indexOf('token') === -1 ? false : true
}
export default loggedReducer
