export interface IPropMeta {
  metadata: {
    title: string
    description: string
    canonicalPath?: string
    ogImage?: string
    keywords?: string
    noIndex?: boolean
  }
}
