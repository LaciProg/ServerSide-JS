var expect = require('chai').expect;
var authMW = require('../../../../middlewares/auth_render/authMW');

describe('authMW middleware ', function () {

    it('Check if the user is logged in TRUE', function (done) {
        const mw = authMW({});

        mw({
            session: {
                loggedIn: true
            }
        },{
            redirect: () => {
            done(new Error('redirect should not be called'));
        }
        },()=>{
            done();
        });
    });

    it('Check if the user is logged in FALSE', function (done) {
        const mw = authMW({});
        mw({
            session: {

            }
        },{
            redirect: (url) => {
                expect(url).to.equal('/');
                done();
            }

        },()=>{
            done(new Error('next should not be called'));
        });
    });

    it('Check if the user is logged in NO loggedIn', function (done) {
        const mw = authMW({});

        mw({
            session: {
                loggedIn: false
            }
        },{
            redirect: (url) => {
                expect(url).to.equal('/');
                done();
            }
        },()=>{
            done(new Error('next should not be called'));
        });
    });

});