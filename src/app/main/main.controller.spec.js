(function() {
  'use strict';

  describe('TodoList', function(){
    var subject, TodoItem;

    beforeEach(module('angularTdd'));

    beforeEach(inject(function($controller, _TodoItem_) {
      subject = $controller('TodoListController');
      TodoItem = _TodoItem_;
    }));

    describe("by default", function () {
      it("sets newItemText as blank", function () {
        expect(subject.newItemText).toEqual('');
      });

      it("sets itemList as empty array", function () {
        expect(subject.itemList).toEqual([]);
      });

      it("sets filterType to takeAll", function () {
        expect(subject.filterType).toEqual(subject.takeAll);
      });
    });

    describe("displayItems", function () {
      beforeEach(function() {
        this.item1 = new TodoItem('item1', false);
        this.item2 = new TodoItem('item2', true);
        this.item3 = new TodoItem('item3', false);

        subject.itemList = [this.item1, this.item2, this.item3];
      });

      describe('takeAll filter', function() {
        it('returns takeAll item in itemList', function () {
          expect(subject.displayItems()).toEqual(subject.itemList);
        });
      });

      describe('onlyDone filter', function() {
        it('returns onlyDone item in itemList', function () {
          subject.filterType = subject.onlyDone;
          expect(subject.displayItems()).toEqual([this.item2]);
        });
      });

      describe('onlyNotDone filter', function() {
        it('returns onlyNotDone item in itemList', function () {
          subject.filterType = subject.onlyNotDone;
          expect(subject.displayItems()).toEqual([this.item1,this.item3]);
        });
      });
      
    });

    describe("addItem", function () {
      it('appends newItemText to itemList', function () {
        subject.newItemText = 'hello';
        subject.addItem(subject.newItemText);
        expect(subject.displayItems()).toEqual([new TodoItem('hello')]);
      });

      it('resets newItemText to blank', function () {
        subject.newItemText = 'hello';
        subject.addItem(subject.newItemText);
        expect(subject.newItemText).toEqual('');
      });

      it('ignores whitespace', function () {
        subject.newItemText = '    ';
        subject.addItem(subject.newItemText);
        expect(subject.displayItems()).toEqual([]);
      });
    });

    describe("removeItem", function () {
      it('removeItem from itemList for the given index', function (){
        subject.itemList = ['item1', 'item2', 'item3'];
        subject.removeItem(1);
        expect(subject.displayItems()).toEqual(['item1', 'item3']);
      });
    });

    describe("clearCompletedItem", function() {
      beforeEach(function() {
        this.item1 = new TodoItem('item1', false);
        this.item2 = new TodoItem('item2', true);
        this.item3 = new TodoItem('item3', false);

        subject.itemList = [this.item1, this.item2, this.item3];
      });

      it('remove all complete item from itemList', function() {
        subject.removeCompletedItem();
        expect(subject.itemList).toEqual([this.item1,this.item3]);
      });
    });
  });
})();
