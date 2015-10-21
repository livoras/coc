import chai from "chai"

chai.should()

describe("Test for fun", function() {
  it("should have value a", function() {
    "a".should.be.equal("a")
  })
  it("should have value b", function() {
    "b".should.be.equal("b")
  })
})