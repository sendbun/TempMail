declare module 'rss-parser' {
  export interface Output {
    title?: string
    description?: string
    link?: string
    items: Item[]
  }

  export interface Item {
    title?: string
    link?: string
    pubDate?: string
    content?: string
    contentSnippet?: string
    isoDate?: string
  }

  export default class Parser {
    constructor(options?: { headers?: Record<string, string> })
    parseURL(url: string): Promise<Output>
  }
}
