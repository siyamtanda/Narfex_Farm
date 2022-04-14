const { assert } = require("chai");

const NarfexToken = artifacts.require('NarfexToken');

contract('NarfexToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.nrfx = await NarfexToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.nrfx.mint(alice, 1000, { from: minter });
        assert.equal((await this.nrfx.balanceOf(alice)).toString(), '1000');
    })
});
