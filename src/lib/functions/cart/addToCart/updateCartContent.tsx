import { CartLine } from './addToCart'

export function updateCartContent(
  prevState: any,
  newEdges: CartLine[],
  variantId: string,
  href: string
) {
  const updatedEdges = prevState.lines.edges.map((prevEdge: CartLine) => {
    const matchingNewEdge = newEdges.find(
      (edge) => edge.node.merchandise.id === prevEdge.merchandise.id
    )

    if (matchingNewEdge) {
      return {
        ...matchingNewEdge.node,
        href:
          matchingNewEdge.node.merchandise.id === variantId
            ? href
            : prevEdge.href,
        merchandiseId: matchingNewEdge.node.merchandise.id,
      }
    }

    return prevEdge
  })

  newEdges.forEach((newEdge) => {
    const existsInPrevState = prevState.lines.edges.some(
      (prevEdge: CartLine) =>
        prevEdge.merchandise.id === newEdge.node.merchandise.id
    )

    if (!existsInPrevState) {
      updatedEdges.push({
        ...newEdge.node,
        href: newEdge.node.merchandise.id === variantId ? href : '',
        merchandiseId: newEdge.node.merchandise.id,
      })
    }
  })

  return {
    ...prevState,
    lines: {
      edges: updatedEdges,
    },
  }
}
