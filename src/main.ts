import { Plugin } from "obsidian";
import 'markdown-it-chords/markdown-it-chords.css';

var md = require('markdown-it')()
md.use(require('markdown-it-chords'))

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("chords", (source, el, ctx) => {
      el.innerHTML = md.render(source)
    })
  }
}