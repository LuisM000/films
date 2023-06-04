import { expect } from 'vitest'

const customMatchers = {
  toContainLoading(element) {
    let containsLoading = false

    try {
      const loading = element.getByRole('alert', { busy: true }) as HTMLElement
      expect(loading).toHaveTextContent('Cargando')
      containsLoading = true
    } catch (_error) {
      containsLoading = false
    }

    return {
      pass: containsLoading,
      message: () => `${element} is not contains loading`
    }
  },

  toContainError(element) {
    const error = element.queryByText('Algo ha ocurrido :S')
    return {
      pass: error ?? false,
      message: () => `${element} is not contains error`
    }
  }
}

export default customMatchers