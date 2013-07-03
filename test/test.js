var should = require("should")
  , postbox = require("../")
  ;

describe('postbox', function(){

  describe('#getEmails', function(){

    it('should return null if there are no emails', function (){
      var text = 'hello, is there anybody in there?'
        ;
      should.equal(postbox.getEmails(text), null);
    });

    it('should return an array of emails from text', function (){
      var text = 'john.doe@example.com,the child is grown, the dream is gone;pop@example.co'
        , output = postbox.getEmails(text)
        ;
      should.equal(output[0], 'john.doe@example.com');
      should.equal(output[1], 'pop@example.co');
    });
    
  });

  describe('#validateEmail', function(){

    it('should return true for a valid email', function(){
      should.equal(postbox.validateEmail('john.doe@example.com'), true);
    });

    it('should return false for an invalid email', function(){
      should.equal(postbox.validateEmail('john@random @doe.com'), false);
    });

    it('should return false for null input', function(){
      should.equal(postbox.validateEmail(''), false);
    });

  });

  describe('#hasEmail', function(){

    it('should return false for null input', function(){
      should.equal(postbox.hasEmail(''), false);
    });

    it('should return true for a valid email', function(){
      should.equal(postbox.hasEmail('john.doe@example.com{is there anybody in there?}'), true);
    });

    it('should return false for no valid email inside text', function(){
      should.equal(postbox.hasEmail('john@random @doe.com'), false);
    });

  });
});