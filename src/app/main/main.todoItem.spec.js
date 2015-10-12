(function() {
  'use strict';

  describe('TodoItem', function(){
    var subject, TodoItem;

    beforeEach(module('angularTdd'));

    beforeEach(inject(function(_TodoItem_) {
      TodoItem = _TodoItem_;
      subject = new TodoItem();
    }));

    describe("constructor", function () {
      it('can set text', function () {
        subject = new TodoItem('hello');
        expect(subject.text).toEqual('hello');
      });

      it('can set done state', function () {
        subject = new TodoItem('hello',false);
        expect(subject.done).toEqual(false);
      });

      describe('by default', function () {
        it('set done state to false', function () {
          subject = new TodoItem('hello');
          expect(subject.done).toEqual(false);
        });
      
        it('set text to blank', function () {
          subject = new TodoItem();
          expect(subject.text).toEqual('');
        });
      });


    }); 
  });
})();
