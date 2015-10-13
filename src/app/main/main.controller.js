(function() {
  'use strict';

  angular
    .module('angularTdd')
    .controller('TodoListController', TodoListController);

  function TodoListController(TodoItem, _) {
    this.newItemText = '';
    this.itemList = [];
    this.notDoneCounter = 0;

    this.countNotDone = function() {
      var notDoneList = _.filter(this.itemList, this.onlyNotDone);
      this.notDoneCounter = notDoneList.length;
    };

    this.displayItems = function() {
      this.countNotDone();
      return _.filter(this.itemList, this.filterType);
    };

    this.addItem = function(text) {
      if(text.trim()){
        this.itemList.push(new TodoItem(text));
        this.newItemText = '';
      }
    };

    this.removeItem = function(index) {
      this.itemList.splice(index, 1);
    };

    this.takeAll = function() {
      return true;
    };

    this.onlyDone = function(item) {
      return item.done;
    };

    this.onlyNotDone = function(item) {
      return !item.done;
    };
    this.filterType = this.takeAll;

    this.removeCompletedItem = function() {
      this.itemList = _.filter(this.itemList, this.onlyNotDone);
    };

 }
})();
