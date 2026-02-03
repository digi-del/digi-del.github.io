'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PlatformSpecificDeliverySection() {
  const [activeTab, setActiveTab] = useState('GitHub')

  const tabs = [
    {
      id: 'GitHub',
      label: 'GitHub',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      id: 'Docker',
      label: 'Docker',
      icon: (
        <img src="/docker.svg" alt="Docker" className="w-5 h-5" />
      ),
    },
    {
      id: 'npm',
      label: 'npm',
      icon: (
        <img src="/npm.svg" alt="npm" className="w-5 h-5" />
      ),
    },
    {
      id: 'Coming Soon',
      label: 'Coming Soon',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
  ]

  const githubProcessSteps = [
    {
      number: 1,
      title: 'Developer Setup',
      description: 'Make your repository private on GitHub, generate a PAT or deploy key, and provide credentials to our platform.',
    },
    {
      number: 2,
      title: 'Asset Caching',
      description: 'We clone and cache your private repository securely on our infrastructure.',
    },
    {
      number: 3,
      title: 'Purchase & Payment',
      description: 'Customer completes purchase through paywall, payment is verified instantly.',
    },
    {
      number: 4,
      title: 'Secure Delivery',
      description: 'Buyer receives unique repository access via our network with various options.',
    },
  ]

  const githubDeliveryOptions = [
    {
      title: 'Direct Repository Clone',
      code: `git clone
https://cache.devpaywall.com/repo/unique-id`,
    },
    {
      title: 'Zip Download',
      code: `wget
https://cache.devpaywall.com/download/repo/unique-id`,
    },
    {
      title: 'Read-only Access',
      code: `Custom Git endpoint with read-only permissions`,
    },
  ]

  const dockerProcessSteps = [
    {
      number: 1,
      title: 'Developer Setup',
      description: 'Make your image private on Docker Hub, provide registry credentials to our platform.',
    },
    {
      number: 2,
      title: 'Asset Caching',
      description: 'We pull and cache your Docker image, store in our container registry.',
    },
    {
      number: 3,
      title: 'Purchase & Payment',
      description: 'Customer purchases image access, payment processing completed.',
    },
    {
      number: 4,
      title: 'Secure Delivery',
      description: 'Buyer receives temporary registry credentials to pull from our cached registry.',
    },
  ]

  const dockerDeliveryOptions = [
    {
      title: 'Login to Our Registry',
      code: `docker login cache.devpaywall.com`,
    },
    {
      title: 'Pull from Our Cache',
      code: `docker pull cache.devpaywall.com/your-image:tag`,
    },
    {
      title: 'Access Control',
      code: `Automatic credential revocation after license expires.`,
    },
  ]

  const npmProcessSteps = [
    {
      number: 1,
      title: 'Developer Setup',
      description: 'Create private package on npmjs.com, generate npm access token, provide to our platform.',
    },
    {
      number: 2,
      title: 'Asset Caching',
      description: 'We download and cache your package, cache all required dependencies.',
    },
    {
      number: 3,
      title: 'Purchase & Payment',
      description: 'Customer purchases package access, payment verification, installation token generated.',
    },
    {
      number: 4,
      title: 'Secure Delivery',
      description: 'Buyer receives scoped registry credentials to install from our cached registry.',
    },
  ]

  const npmInstallationOptions = [
    {
      title: 'Configure Registry',
      code: `npm config set @scope:registry
https://cache.devpaywall.com`,
    },
    {
      title: 'Install from Our Cache',
      code: `npm install @scope/your-package`,
    },
    {
      title: 'Access Control',
      code: `Support for organization/team installations with license terms`,
    },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#023347] mb-3 sm:mb-4">
            Platform-Specific Delivery
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Each platform works differently. We handle the complexity of caching and delivering your assets securely to buyers.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#023347] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5">{tab.icon}</span>
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* GitHub Repository Delivery Content */}
        {activeTab === 'GitHub' && (
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Section Title */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-900 flex-shrink-0">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#023347]">
                GitHub Repository Delivery
              </h3>
            </div>

            {/* Process Flow and Delivery Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Process Flow */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Process Flow</h4>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {githubProcessSteps.map((step, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#023347] text-white rounded-lg flex items-center justify-center text-base sm:text-lg md:text-xl font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                          {step.title}
                        </h5>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Options */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Delivery Options</h4>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {githubDeliveryOptions.map((option, index) => (
                    <div key={index} className="bg-[#F7FAFC] rounded-lg p-3 sm:p-4 md:p-5 border border-gray-200">
                      <h5 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                        {option.title}:
                      </h5>
                      <div className="bg-gray-900 rounded-md p-2 sm:p-3 md:p-4 overflow-x-auto">
                        <pre className="text-white text-xs sm:text-sm font-mono whitespace-pre-wrap break-words">
                          {option.code}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 border-t border-gray-200">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">
                Visual Flow
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {/* Private GitHub */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-600">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Private GitHub</span>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 sm:rotate-0 rotate-90">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Our Cache */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Our Cache</span>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 sm:rotate-0 rotate-90">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Buyer */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Buyer</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Docker Image Delivery Content */}
        {activeTab === 'Docker' && (
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Section Title */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#2496ED] rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/docker.svg" alt="Docker" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#023347]">
                Docker Image Delivery
              </h3>
            </div>

            {/* Process Flow and Delivery Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Process Flow */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Process Flow</h4>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {dockerProcessSteps.map((step, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#023347] text-white rounded-lg flex items-center justify-center text-base sm:text-lg md:text-xl font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                          {step.title}
                        </h5>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Process */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Delivery Process</h4>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {dockerDeliveryOptions.map((option, index) => (
                    <div key={index} className="bg-[#F7FAFC] rounded-lg p-3 sm:p-4 md:p-5 border border-gray-200">
                      <h5 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                        {option.title}:
                      </h5>
                      <div className="bg-gray-900 rounded-md p-2 sm:p-3 md:p-4 overflow-x-auto">
                        <pre className="text-white text-xs sm:text-sm font-mono whitespace-pre-wrap break-words">
                          {option.code}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 border-t border-gray-200">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">
                Visual Flow
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {/* Private Docker Hub */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <img src="/docker.svg" alt="Docker" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Private Docker Hub</span>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 sm:rotate-0 rotate-90">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Our Cache */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Our Cache</span>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 sm:rotate-0 rotate-90">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Buyer */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Buyer</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* npm Package Delivery Content */}
        {activeTab === 'npm' && (
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Section Title */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#CB3837] rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/npm.svg" alt="npm" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#023347]">
                npm Package Delivery
              </h3>
            </div>

            {/* Process Flow and Installation Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Process Flow */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Process Flow</h4>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {npmProcessSteps.map((step, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4 md:gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#023347] text-white rounded-lg flex items-center justify-center text-base sm:text-lg md:text-xl font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                          {step.title}
                        </h5>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Installation Process */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Installation Process</h4>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {npmInstallationOptions.map((option, index) => (
                    <div key={index} className="bg-[#F7FAFC] rounded-lg p-3 sm:p-4 md:p-5 border border-gray-200">
                      <h5 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                        {option.title}:
                      </h5>
                      <div className="bg-gray-900 rounded-md p-2 sm:p-3 md:p-4 overflow-x-auto">
                        <pre className="text-white text-xs sm:text-sm font-mono whitespace-pre-wrap break-words">
                          {option.code}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 border-t border-gray-200">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">
                Visual Flow
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {/* Private npm */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <img src="/npm.svg" alt="npm" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Private npm</span>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 sm:rotate-0 rotate-90">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Our Cache */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Our Cache</span>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 sm:rotate-0 rotate-90">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Buyer */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">Buyer</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* More Platforms Coming Section */}
        {activeTab === 'Coming Soon' && (
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Large Plus Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#023347]/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023347] mb-3 sm:mb-4">
                More Platforms Coming
              </h3>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                We're working to support more platforms and package types. Stay tuned for updates!
              </p>
            </div>

            {/* Platform Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* PyPI */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 p-3 sm:p-4">
                  <Image 
                    src="/pypi.svg" 
                    alt="PyPI" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700">PyPI</span>
              </div>

              {/* Maven */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-orange-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 p-3 sm:p-4">
                  <Image 
                    src="/maven.svg" 
                    alt="Maven" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700">Maven</span>
              </div>

              {/* NuGet */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 p-3 sm:p-4">
                  <Image 
                    src="/nuget.svg" 
                    alt="NuGet" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700">NuGet</span>
              </div>

              {/* Helm */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 p-3 sm:p-4">
                  <Image 
                    src="/helm.svg" 
                    alt="Helm" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700">Helm</span>
              </div>
            </div>

            {/* Request Platform Button */}
            <div className="text-center pt-4 sm:pt-6">
              <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-[#023347] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30 text-base sm:text-lg md:text-xl font-semibold">
                <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
                <span className="relative">Request a Platform</span>
              </button>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'GitHub' && activeTab !== 'Docker' && activeTab !== 'npm' && activeTab !== 'Coming Soon' && (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <p className="text-gray-600 text-lg sm:text-xl">
              {activeTab} delivery details coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

