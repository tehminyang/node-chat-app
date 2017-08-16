const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Tim';
        var text = 'hello everyone';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from: from,
            text: text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = 'Tim';
        var latitude = 15;
        var longitude = 19;
        var  url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var locationMessage = generateLocationMessage(from, latitude, longitude);
        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({
            from: from,
            url: url
        });
    });
});