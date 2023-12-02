var expect = require('chai').expect;
var checkUserLoginMW = require('../../../../middlewares/auth_render/checkUserLoginMW');

describe('regUserMW middleware ', function () {

    it('Check if the req.body EMPTY', function (done) {
        const mw = checkUserLoginMW({});

        mw({
            body: {
                email: '',
                password: '',
                name: ''
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

    it('Check if the req.body UNDEFINED', function (done) {
        const mw = checkUserLoginMW({});
        mw({
            body: {
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

    it('Check if the req.body good data', function (done) {

        const mw = checkUserLoginMW({});

        mw({
            body: {
                email: 'Test email',
                password: 'oprepass',
            },
            session: {
                loggedIn: false,
                email: '',
                profileID: '',
                save: (err) =>{
                    err();
                }
            }
        },{
            redirect: (url) => {
                expect(url).to.equal('/gamemodes');
                done();
            },
            locals: {
                profile:  {
                    Password: 'oprepass'
                },
            }
        },()=>{
            done(new Error('next should not be called'));
        });
    });


    it('Check if the req.body bad data', function (done) {

        const mw = checkUserLoginMW({});
        mw({
            body: {
                email: 'Test email',
                password: 'asdasd',
            },
            session: {
                loggedIn: false,
                email: '',
                profileID: '',
                save:(err) => {}
            }
        },{
            redirect: (url) => {
                expect(url).to.equal('/');
                done();
            },
            locals: {
                profile:  {
                    Password: 'oprepass'
                },
                error: '',
            }
        },()=>{
            done(new Error('next should not be called'));
        });
    });

});