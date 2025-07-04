export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Mettle Racing Resources
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A community platform for athletes competing at high levels while managing chronic conditions
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              Connect with fellow athletes, share resources, and get advice from those who understand 
              the unique challenges of competing with chronic illness.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃‍♂️</span>
                </div>
                <h3 className="font-semibold text-gray-800">Multi-Sport</h3>
                <p className="text-sm text-gray-600">Road, CX, MTB, Gravel, Trail Running</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-800">Community</h3>
                <p className="text-sm text-gray-600">Connect with others who understand</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-semibold text-gray-800">Resources</h3>
                <p className="text-sm text-gray-600">Curated advice and information</p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Database Status: <span className="text-green-600 font-medium">Connected ✓</span></p>
            <p>Authentication: <span className="text-yellow-600 font-medium">Setting up...</span></p>
          </div>
        </div>
      </div>
    </main>
  )
}
