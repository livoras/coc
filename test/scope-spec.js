import {ArrayScope, Scope} from "../src/scope"
import chai from "chai"

chai.should()

describe("Test for fun", function() {
  it("Scope should serialize html", function() {
    var scope = new Scope("fuk")
    scope.toStr().should.be.equal('<div class="scope"><div class="heading">fuk</div></div>')
  })
  it("Test scope append", function() {
    var scope = new Scope("fuk")
    var scope2 = new Scope("fuk2")
    scope.append(scope2)
    scope.toStr().should.be.equal('<div class="scope"><div class="heading">fuk</div><div class="scope"><div class="heading">fuk2</div></div></div>')
  })
  it("Test array scope", function() {
    var arrayScope = new ArrayScope("array-fuk")
    arrayScope.toStr().should.be.equal('<div class="array-scope"><div class="heading">array-fuk</div></div>')
  })
})