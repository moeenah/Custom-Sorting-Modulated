var list = [];
module.exports = {

  createList: function(num) {
    list.push(num);
    return (this.sortList(list));
  },
  sortList: function(arr) {
    var result = arr.sort(function(a, b){
      return a-b;
    });
    return result;
  }

};