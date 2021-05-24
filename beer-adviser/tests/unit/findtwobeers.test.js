const handler = require('../../handler');
const chai = require('chai');
const expect = chai.expect;

describe('#1 - Return valid beer combination', () => {

    const request = {
        body: JSON.stringify({beers: [16, 60, 14, 35, 39], target: 30})            
    };

    it('Checked valid combination in response', async () => {

        const response = await handler.findtwobeers(request);
        const body = JSON.parse(response.body);
        expect(response.statusCode).to.equal(200);
        expect(body.index).to.have.length(2);
        expect(body.index[0]).to.equal(0);
        expect(body.index[1]).to.equal(2);

    });

});

describe('#2 - No valid beer combination found', () => {
    
    const request = {
        body: JSON.stringify( {beers: [15, 20, 60, 35, 39], target: 45} )            
    };

    it('Checked that the response is empty', async () => {

        const response = await handler.findtwobeers(request);
        const body = JSON.parse(response.body);
        expect(response.statusCode).to.equal(200);
        expect(body.index).to.have.length(0);

    });

});

describe('#3 - Send two equal IBUs that match the target and get different indexes', () => {

    const event = {
        body: JSON.stringify({beers: [15, 15, 60, 35, 39], target: 30})            
    };

    it('Checked response with different indexes', async () => {

        const response = await handler.findtwobeers(event);
        const body = JSON.parse(response.body);
        expect(response.statusCode).to.equal(200);
        expect(body.index).to.have.length(2);
        expect(body.index[0]).to.equal(0);
        expect(body.index[1]).to.equal(1);

    });

});