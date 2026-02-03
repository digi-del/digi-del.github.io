'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // --- Validation Logic ---
  const validateName = (name) => {
    if (!name.trim()) return 'Name is required'
    if (name.trim().length < 2) return 'Min 2 chars'
    return ''
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return 'Email is required'
    if (!emailRegex.test(email)) return 'Invalid email'
    return ''
  }

  const validatePassword = (password) => {
    if (!password) return 'Required'
    if (password.length < 8) return 'Min 8 chars'
    if (!/(?=.*[a-z])/.test(password)) return 'Need lowercase'
    if (!/(?=.*[A-Z])/.test(password)) return 'Need uppercase'
    if (!/(?=.*\d)/.test(password)) return 'Need number'
    return ''
  }

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) return 'Required'
    if (confirmPassword !== password) return 'Mismatch'
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (touched[name]) {
      let error = ''
      if (name === 'name') error = validateName(value)
      else if (name === 'email') error = validateEmail(value)
      else if (name === 'password') {
        error = validatePassword(value)
        if (touched.confirmPassword) {
          setErrors(prev => ({
            ...prev,
            password: error,
            confirmPassword: validateConfirmPassword(formData.confirmPassword, value),
          }))
          return
        }
      } else if (name === 'confirmPassword') {
        error = validateConfirmPassword(value, formData.password)
      }
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true })
    let error = ''
    if (field === 'name') error = validateName(formData.name)
    else if (field === 'email') error = validateEmail(formData.email)
    else if (field === 'password') error = validatePassword(formData.password)
    else if (field === 'confirmPassword') error = validateConfirmPassword(formData.confirmPassword, formData.password)
    setErrors(prev => ({ ...prev, [field]: error }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)
    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.password)

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    })
    setTouched({ name: true, email: true, password: true, confirmPassword: true })

    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      console.log('Signup submitted:', formData)
      // Add your API call here
    }
  }

  // Helper to keep JSX clean
  const getInputClasses = (fieldName) => {
    const hasError = errors[fieldName] && touched[fieldName]
    return `
      w-full px-4 py-2.5 
      rounded-lg border outline-none 
      transition-all duration-200 
      text-sm font-medium
      placeholder:text-gray-400 placeholder:font-normal
      ${hasError 
        ? 'border-red-500 bg-red-50 focus:bg-white focus:ring-2 focus:ring-red-100' 
        : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-[#023347] focus:ring-2 focus:ring-[#023347]/10 hover:bg-gray-100'
      }
    `
  }

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      
      {/* --- LEFT SIDE: FORM --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-y-auto">
        <div className="w-full max-w-md space-y-6">
          
          {/* Logo & Header */}
          <div className="text-left space-y-2">
            <Link href="/" className="flex items-center gap-2 w-fit group">
               <div className="bg-[#023347] text-white p-1 rounded text-lg font-bold group-hover:scale-110 transition-transform">&lt;/&gt;</div>
               <span className="text-xl font-bold text-[#023347]">DevAsset</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mt-6">Create Account</h1>
            <p className="text-gray-500 text-sm">Start your developer journey today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name & Email Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={getInputClasses('name')}
                  placeholder="John Doe"
                />
                {errors.name && touched.name && <p className="text-[10px] text-red-500 font-medium">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={getInputClasses('email')}
                  placeholder="name@mail.com"
                />
                {errors.email && touched.email && <p className="text-[10px] text-red-500 font-medium">{errors.email}</p>}
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={() => handleBlur('password')}
                  className={`${getInputClasses('password')} pr-10`}
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#023347]">
                  {showPassword ? (
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0L3 15.29m3.29-12L18.71 3M21 21l-3.29-3.29m0 0L21 8.71m-3.29 12.29L5.29 21" /></svg>
                  ) : (
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
              {errors.password && touched.password && <p className="text-[10px] text-red-500 font-medium">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Confirm</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={() => handleBlur('confirmPassword')}
                  className={`${getInputClasses('confirmPassword')} pr-10`}
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#023347]">
                   {showConfirmPassword ? (
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0L3 15.29m3.29-12L18.71 3M21 21l-3.29-3.29m0 0L21 8.71m-3.29 12.29L5.29 21" /></svg>
                  ) : (
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && touched.confirmPassword && <p className="text-[10px] text-red-500 font-medium">{errors.confirmPassword}</p>}
            </div>

            {/* Actions */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#023347] text-white py-3 rounded-lg font-bold hover:bg-[#023347]/90 active:scale-[0.99] transition-all shadow-lg shadow-[#023347]/20"
              >
                Create Account
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium">Or continue with</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Socials */}
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                Github
              </button>
              <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account? <Link href="/login" className="text-[#023347] font-bold hover:underline">Log in</Link>
            </p>
          </form>
        </div>
      </div>

      {/* --- RIGHT SIDE: ARTWORK & CONTENT (Ecosystem Focus) --- */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#023347] relative items-center justify-center overflow-hidden">
        
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-white blur-3xl mix-blend-overlay"></div>
           <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-teal-400 blur-3xl mix-blend-overlay"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-lg text-center px-8 text-white space-y-8">
          
          {/* Header Text */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight leading-tight">
              The Marketplace for Modern Developers
            </h2>
            <p className="text-lg text-blue-100/80 font-light leading-relaxed">
              Whether you're shipping your next SaaS in record time or selling your best code to the world, your journey starts here.
            </p>
          </div>

          {/* DUAL CARD VISUAL */}
          <div className="relative h-48 w-full max-w-[340px] mx-auto mt-8">
            
            {/* CARD 1: THE BUYER (Top Left) */}
            <div className="absolute top-0 left-0 z-20 w-64 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl -rotate-3 animate-pulse-slow">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-400/20 p-2 rounded-lg text-green-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-blue-200 uppercase font-bold tracking-wider">Download</p>
                  <p className="text-sm font-semibold text-white">Docker</p>
                </div>
              </div>
              <div className="bg-black/20 rounded-lg px-3 py-1.5 flex justify-between items-center">
                <span className="text-[10px] text-gray-300">Status</span>
                <span className="text-xs font-bold text-green-300">Ready to Ship</span>
              </div>
            </div>

            {/* CARD 2: THE SELLER (Bottom Right) */}
            <div className="absolute bottom-0 right-0 z-10 w-64 bg-[#034259] border border-blue-400/30 p-4 rounded-xl shadow-xl rotate-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-blue-200 uppercase font-bold tracking-wider">Earnings</p>
                  <p className="text-sm font-semibold text-white">Monthly Payout</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-1">
                <span className="text-[10px] text-gray-300">Wallet</span>
                <span className="text-sm font-bold text-teal-300">$1,250.00</span>
              </div>
            </div>

          </div>

        </div> 
        {/* Decorative Gradient Line */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </div>
  )
}