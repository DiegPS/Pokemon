import request from "supertest"
import app from "../../app.js"

describe("GET /pokemons", () => {
  it("prueba", done => {
    request(app)
      .get("/pokemons")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done)
  })
  it("prueba 2", done => {
    request(app)
      .get("/pokemons")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect("debe ser error")
      .end(err => {
        if (err) return done(err)
        done()
      })
  })
})