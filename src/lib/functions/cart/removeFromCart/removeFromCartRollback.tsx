import { SetCartContent } from "@/lib/contexts/CartContext"

export function rollbackRemove(originalEdge: any, setCartContent: SetCartContent) {
    setCartContent((prevState) => {
      const updatedEdges = [...prevState.lines.edges, originalEdge]
  
      return {
        ...prevState,
        lines: {
          edges: updatedEdges,
        },
      }
    })
  }
  