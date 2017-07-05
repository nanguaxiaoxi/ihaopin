export default{
  install (Vue) {
    Vue.prototype.$myName = `zhagngsan`;
    Vue.prototype.checkUserName = (value) => {
      if (/\w{6,20}/.test(value)) {
        return true;
      } else {
        return false;
      }
    };
  }
};
