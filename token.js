import { getEncoding } from "js-tiktoken";

const enc =  getEncoding('gpt2')

const encoded = enc.encode("hello,i am shubham")

console.log(encoded)
