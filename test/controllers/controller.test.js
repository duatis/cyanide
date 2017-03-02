/**
 * Created by duatis on 02/03/2017.
 */
var chai = require('chai')
var expect = chai.expect
var Controller = require('../../library/classes/controller')
var models = require('../../library/models/module')
var faker = require('faker')

var controller = new Controller(models.Player);

describe("Controller class", (done)=>{

    it("Should exist", (done) =>{
        expect(Controller).to.be.ok
        done();
    })

    it("Should fail with wrong parameter type", (done) =>{
        expect(()=>{ new Controller()}).to.throw(Error);
        done();
    })

    it("Should accept  model as parameter", (done) =>{
        expect(()=>{ new Controller(models.Player)}).not.to.throw(Error);
        done();
    })

    it("Should respond to create", (done) =>{
        expect(controller).to.respondsTo('create');
        done();
    });

    it("Should respond to save", (done) =>{
        expect(controller).to.respondsTo('save');
        done();
    });
    
    it("Create should return instance of model", (done) =>{
        var player = controller.create();
        expect(player.constructor.name).to.eql('model');
        done();

    });

    it("Should save a valid model", (done) =>{
        var player = controller.create(generateValidPlayer());
        controller.save(player, (err, data) =>{
            if(err) return done(err);
            expect(data).to.be.ok;
            done();
        })

    });

    it("Should reject a invalid model", (done) =>{
        var player = controller.create();
        controller.save(player, (err) =>{
            expect(err).not.to.be.null;
            done();
        })

    });

    it("Should respond to find");
    it("Should respond to findOne");
    it("Should respond to delete");


});

var generateValidPlayer = ()=>{
    return {name: faker.name.findName(), number: faker.random.number()};
}