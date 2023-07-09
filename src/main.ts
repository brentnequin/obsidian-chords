import { Plugin, Editor, MarkdownPostProcessorContext } from "obsidian";
import 'markdown-it-chords/markdown-it-chords.css';

var MarkdownIt = require('markdown-it')()
  .use(require('markdown-it-chords'))

export default class ChordsPlugin extends Plugin {
  async onload() {

    this.registerMarkdownPostProcessor((element: HTMLElement, context: MarkdownPostProcessorContext) => {
    })

    this.registerMarkdownCodeBlockProcessor("chords", (source: String, element: HTMLElement, context: MarkdownPostProcessorContext) => {
      element.innerHTML = MarkdownIt.render(source)
    })
  }
}
