const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
          Welcome to{' '}
          <span className="text-blue-200">
            Starter
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-md mx-auto">
          Your modern React foundation — ready to build.
        </p>
        <p className="text-sm text-blue-200">
          Prepared by{' '}
          <a
            href="https://webdevshihab.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-100 underline underline-offset-2 transition-colors"
          >
            Shihab Hasan
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
