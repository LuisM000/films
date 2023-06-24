export const LoadingComponent = () => {
  return (
    <div role="status" aria-hidden="true" className="flex items-start justify-center h-screen mt-20">
      <div className="w-20 h-20 rounded-full animate-spin border-y-2 border-solid bg-purple-600 border-t-transparent"></div>
    </div>
  )
}