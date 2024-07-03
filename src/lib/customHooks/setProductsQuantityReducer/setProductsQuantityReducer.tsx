export type Action =
  | { type: 'add' }
  | { type: 'subtract' }
  | { type: 'input'; payload: number }

type State = { quantity: number }

export function setProductsQuantityReducer(
  state: State,
  action: Action
): State {
  switch (action.type) {
    case 'add':
      return { quantity: state.quantity + 1 }
    case 'subtract':
      return { quantity: state.quantity > 1 ? state.quantity - 1 : 1 }
    case 'input':
      return { quantity: action.payload <= 0 ? 1 : Math.ceil(action.payload) }
    default:
      throw new Error('Unknown action type')
  }
}
