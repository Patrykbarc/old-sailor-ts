import { Edge } from './EdgeType'
import { ImageNode } from './ImageNodeType'

export type Images = {
  edges: Array<Edge<ImageNode>>
} | null
