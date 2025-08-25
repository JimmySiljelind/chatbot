import { get_encoding } from "tiktoken";

const encoding = get_encoding('cl100k_base');
const tokens = encoding.encode('Hello World! This is the first test of tiktoken library.');

console.log(tokens);