const customMatchers = {
  toContainLoading(element) {
    const loading = element.queryByRole('status', { hidden: true })
    return {
      pass: loading ?? false,
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