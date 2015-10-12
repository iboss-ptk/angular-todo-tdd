(function() {
  'use strict';

  angular
    .module('angularTdd')
    .controller('TodoListController', TodoListController);

  function TodoListController(TodoItem, _) {
    this.newItemText = '';
    this.itemList = [];

    this.displayItems = function() {
      return _.filter(this.itemList, this.filterType);
    }

    this.addItem = function(text) {
      if(text.trim()){
        this.itemList.push(new TodoItem(text));
        this.newItemText = '';
      }
    }

    this.removeItem = function(index) {
      this.itemList.splice(index, 1);
    }

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
 }
})();
