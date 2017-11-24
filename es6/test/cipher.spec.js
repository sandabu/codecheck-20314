import fs from "fs";
import {Tokenizer} from "./tokenizer";
import {assert} from 'chai';
import {CaesarCipher} from '../target/cipher';

describe("Q5", () => {

  it("test1", () => {
    const cipher = new CaesarCipher(5);
    var ret = cipher.encrypt("hello world!");
    assert.equal(ret , "mjqqt btwqi!");
  });

  it("test2", () => {
    const cipher = new CaesarCipher(5);
    var ret = cipher.decrypt("mjqqt btwqi!");
    assert.equal(ret , "hello world!");
  });

  it("test3", () => {
    const cipher = new CaesarCipher(26);
    var ret = cipher.encrypt("hello world!");
    assert.equal(ret , "hello world!");
  });

  it("test4", () => {
    const cipher = new CaesarCipher(26);
    var ret = cipher.decrypt("hello world!");
    assert.equal(ret , "hello world!");
  });

  it("not use `for`", () => {
    var str = fs.readFileSync("es6/src/cipher.js", "utf-8");
    assert.notOk(new Tokenizer().split(str).some(v => v === "for"));
  });
});

