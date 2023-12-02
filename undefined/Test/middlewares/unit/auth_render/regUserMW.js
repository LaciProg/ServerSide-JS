var expect = require('chai').expect;
var regUserMW = require('../../../../middlewares/auth_render/regUserMW');

describe('regUserMW middleware ', function () {
    class profileModel {
        constructor() {
            this.Email = '';
            this.Password = '';
            this.Name = '';
        }
    }

    it('Check if the req.body EMPTY', function (done) {
        const mw = regUserMW({
            profileModel: profileModel
        });

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
        const mw = regUserMW({
            profileModel: profileModel
        });
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

        const newProfile = new profileModel();

        const mw = regUserMW({
            profileModel: profileModel
        });

        mw({
            body: {
                email: 'Test email',
                password: 'oprepass',
                name: 'SAndor'
            }
        },{
            redirect: (url) => {
                done(new Error('next should not be called'));
            },
            locals: {
                profile: '',
                newUser: ''
            }
        },()=>{
            done();
        });
    });

});