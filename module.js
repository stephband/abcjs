
import ABCParser from './modules/parse/abc_parse.js';

const parser = new ABCParser();

export default function parse(abc) {
    parser.parse(abc);

    console.log(abcParser.getTune(), abcParser.getWarnings());
}
