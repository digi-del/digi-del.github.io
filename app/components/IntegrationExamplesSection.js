export default function IntegrationExamplesSection() {
  const examples = [
    {
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#CB3837] rounded-lg flex items-center justify-center p-2 sm:p-2.5 md:p-3">
          <img src="/npm.svg" alt="npm" className="w-full h-full object-contain" />
        </div>
      ),
      title: 'npm Package',
      description: 'Add a paywall link to your npm package documentation',
      code: `// In your package's purchase flow

const paywallUrl = \`https://devasset.com/buy/\${packageId}\`;`,
      explanation: 'After purchase, customers receive an npm token to access your private package.',
    },
    {
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#2496ED] rounded-lg flex items-center justify-center p-2 sm:p-2.5 md:p-3">
          <img src="/docker.svg" alt="Docker" className="w-full h-full object-contain" />
        </div>
      ),
      title: 'Docker Image',
      description: 'Secure access to your private Docker images',
      code: `# After purchase, customers receive:

docker login registry.devasset.com

docker pull yourimage:tag`,
      explanation: 'We generate pull tokens that grant access to your private registry.',
    },
    {
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-900 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>
        </div>
      ),
      title: 'GitHub Repository',
      description: 'Monetize access to your private GitHub repositories',
      code: `## Purchase
      
[Buy Access](https://devasset.com/buy/your-repo-id)

After purchase, you'll receive collaborator access.`,
      explanation: 'We automatically add customers as collaborators to your private repo.',
    },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5">
            Integration Examples
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Simple code snippets to get you started in minutes
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#023347]/20 transition-all duration-300 p-6 sm:p-7 md:p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {example.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#023347] transition-colors duration-300">
                {example.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                {example.description}
              </p>

              {/* Code Snippet */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-2 sm:p-3 mb-4 sm:mb-5 md:mb-6 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-gray-800 font-mono whitespace-pre overflow-visible">
                  <code className="block">{example.code}</code>
                </pre>
              </div>

              {/* Explanation */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-auto">
                {example.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

