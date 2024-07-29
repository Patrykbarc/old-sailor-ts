import { SetCartContent } from "@/lib/contexts/CartContext"

export function rollbackUpdateQuantity(
  lineId: string,
  quantity: number,
  setCartContent: SetCartContent
) {
  setCartContent((prevState) => {
    // Find the original edge to restore its quantity
    const originalEdge = prevState.lines.edges.find(
      (edge) => edge.id === lineId
    )
    if (!originalEdge) return prevState

    const updatedEdges = prevState.lines.edges.map((edge) => {
      if (edge.id === lineId) {
        return {
          ...edge,
          quantity: originalEdge.quantity, // Restore the original quantity
        }
      }
      return edge
    })

    return {
      ...prevState,
      lines: {
        edges: updatedEdges,
      },
    }
  })
}
