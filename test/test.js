const Product = require("../src/models/Product");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index")
chai.should();

chai.use(chaiHttp);

describe("Products", () => {
  beforeEach((done) => {
    Product.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET product", () => {
    it("It should GET all the products", (done) => {
      chai
        .request(app)
        .get("/product")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST product", () => {
    it("It should new POST a product", (done) => {
      let product = {
        name: "Monitor",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 100,
        description: {
          cor: "azul",
          altura: 15
        }
      };
      chai
        .request(app)
        .post("/product")
        .send(product)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id product", () => {
    it("It should GET a product by the id", (done) => {
      let product = new Product({
        name: "Monitor",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 100,
        description: {
          cor: "azul",
          altura: 15
        }
      });
      product.save((err, product) => {
        console.log(product.id)
        chai
          .request(app)
          .get("/product" + product.id)
          .send(product)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id product", () => {
    it("It should UPDATE a product given the id", (done) => {
      let product = new Product({
        name: "Monitor",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 100,
        description: {
          cor: "azul",
          altura: 15
        }
      });
      product.save((err, product) => {
        console.log(product.id);
        chai
          .request(app)
          .put("/product" + product.id)
          .send({
            name: "Teclado",
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            price: 1000,
            description: {
              cor: "preto",
              altura: 15
            }
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id product", () => {
    it("It should DELETE a product given the id", (done) => {
      let product = new Product({
        name: "Monitor",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 100,
        description: {
          cor: "azul",
          altura: 15
        }
      });
      product.save((err, product) => {
        console.log(product.id);
        chai
          .request(app)
          .delete("/product" + product.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});