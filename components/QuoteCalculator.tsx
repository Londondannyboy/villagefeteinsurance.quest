'use client'

import { useState, useMemo } from 'react'

const EVENT_TYPES = [
  { value: 'church', label: 'Church Fete', description: 'Church fundraising events' },
  { value: 'community', label: 'Community Event', description: 'Village gatherings & festivals' },
  { value: 'charity', label: 'Charity Fundraiser', description: 'Non-profit fundraising events' },
  { value: 'parish', label: 'Parish Council Event', description: 'Council-organized events' },
  { value: 'school', label: 'School Fete', description: 'School fundraising events' },
  { value: 'village-hall', label: 'Village Hall Event', description: 'Community hall events' },
]

const EVENT_SIZES = [
  { value: 'small', label: 'Small Event', description: 'Under 100 attendees' },
  { value: 'medium', label: 'Medium Event', description: '100-500 attendees' },
  { value: 'large', label: 'Large Event', description: '500+ attendees' },
]

const COVER_TYPES = [
  { value: 'liability', label: 'Public Liability', description: 'Covers injury to attendees or property damage', multiplier: 1.0, popular: true },
  { value: 'cancellation', label: 'Event Cancellation', description: 'Covers costs if event must be cancelled', multiplier: 0.9 },
  { value: 'combined', label: 'Combined Cover', description: 'Public liability + event cancellation', multiplier: 1.5 },
]

const ADDITIONAL_OPTIONS = [
  { value: 'equipment', label: 'Equipment Cover', description: 'Protection for tents, stalls, and equipment' },
  { value: 'weather', label: 'Weather Insurance', description: 'Additional weather-related cancellation cover' },
  { value: 'alcohol', label: 'Alcohol Liability', description: 'Cover for events serving alcohol' },
]

function estimatePremium(eventSize: string, coverType: string, additionalOptions: string[]) {
  // Base premium varies by event size and cover type
  const basePremium: Record<string, number> = {
    'small': 75,
    'medium': 150,
    'large': 300,
  }

  const baseAmount = basePremium[eventSize] || 150
  const coverMultiplier = COVER_TYPES.find(c => c.value === coverType)?.multiplier || 1

  // Calculate with cover type multiplier
  const afterCover = baseAmount * coverMultiplier

  // Add additional options
  let additionalCost = 0
  if (additionalOptions.includes('equipment')) additionalCost += 25
  if (additionalOptions.includes('weather')) additionalCost += 35
  if (additionalOptions.includes('alcohol')) additionalCost += 40

  const total = afterCover + additionalCost

  // Add some variance for realism
  const variance = total * 0.12

  return {
    low: Math.floor(total - variance),
    high: Math.ceil(total + variance)
  }
}

function formatCurrency(amount: number) {
  return `£${amount.toFixed(0)}`
}

export function QuoteCalculator() {
  const [step, setStep] = useState(1)
  const [eventType, setEventType] = useState('community')
  const [eventSize, setEventSize] = useState('medium')
  const [coverType, setCoverType] = useState('liability')
  const [additionalOptions, setAdditionalOptions] = useState<string[]>([])
  const [showEstimate, setShowEstimate] = useState(false)

  const premium = useMemo(
    () => estimatePremium(eventSize, coverType, additionalOptions),
    [eventSize, coverType, additionalOptions]
  )

  const canProceed = () => {
    switch (step) {
      case 1: return eventType
      case 2: return coverType
      default: return true
    }
  }

  const toggleAdditionalOption = (value: string) => {
    setAdditionalOptions(prev =>
      prev.includes(value)
        ? prev.filter(o => o !== value)
        : [...prev, value]
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <button
              onClick={() => s < step && setStep(s)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s === step
                  ? 'bg-green-500 text-white'
                  : s < step
                  ? 'bg-green-500/30 text-green-400 cursor-pointer hover:bg-green-500/50'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {s < step ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </button>
            {s < 3 && (
              <div className={`w-16 sm:w-24 h-1 mx-2 rounded ${s < step ? 'bg-green-500/50' : 'bg-slate-700'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-8 text-sm text-slate-400 px-2">
        <span className={step === 1 ? 'text-green-400' : ''}>Event Details</span>
        <span className={step === 2 ? 'text-green-400' : ''}>Coverage</span>
        <span className={step === 3 ? 'text-green-400' : ''}>Get Quotes</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Event Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">What Type of Event?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EVENT_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setEventType(type.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        eventType === type.value
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{type.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{type.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Expected Attendance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EVENT_SIZES.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setEventSize(size.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        eventSize === size.value
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{size.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{size.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Coverage Options */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Choose Your Coverage</h3>
                <div className="space-y-3">
                  {COVER_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setCoverType(type.value)}
                      className={`w-full text-left p-4 rounded-xl transition-all relative ${
                        coverType === type.value
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      {type.popular && (
                        <span className="absolute -top-2 right-4 px-2 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full">
                          Recommended
                        </span>
                      )}
                      <div className="font-medium text-white">{type.label}</div>
                      <div className="text-sm text-slate-400">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Additional Coverage</h3>
                <div className="space-y-3">
                  {ADDITIONAL_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative mt-1">
                        <input
                          type="checkbox"
                          checked={additionalOptions.includes(opt.value)}
                          onChange={() => toggleAdditionalOption(opt.value)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          additionalOptions.includes(opt.value) ? 'bg-green-500 border-green-500' : 'border-slate-500 group-hover:border-slate-400'
                        }`}>
                          {additionalOptions.includes(opt.value) && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-medium">{opt.label}</div>
                        <div className="text-sm text-slate-400">{opt.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Summary */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Your Quote Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Event Type</span>
                    <span className="text-white">{EVENT_TYPES.find(t => t.value === eventType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Event Size</span>
                    <span className="text-white">{EVENT_SIZES.find(e => e.value === eventSize)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coverage Type</span>
                    <span className="text-white">{COVER_TYPES.find(c => c.value === coverType)?.label}</span>
                  </div>
                  {additionalOptions.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Additional</span>
                      <span className="text-green-400">{additionalOptions.length} option(s)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 rounded-xl font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-colors"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => setShowEstimate(true)}
                className="flex-1 py-4 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                Get Quote Estimates
              </button>
            )}
          </div>
        </div>

        {/* Estimate Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 border border-green-500/30">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Estimated Event Cost</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {formatCurrency(premium.low)} - {formatCurrency(premium.high)}
                </div>
                <div className="text-sm text-green-400">per event</div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-600/50 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Public liability cover
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Community event protection
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  UK specialist providers
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                *Indicative pricing only. Actual premiums depend on event specifics.
              </p>
            </div>

            {showEstimate && (
              <div className="mt-4 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">Get Accurate Quotes</h4>
                <p className="text-sm text-slate-400 mb-4">
                  Compare quotes from specialist village fete and community event insurance providers.
                </p>
                <a
                  href="#providers"
                  className="block w-full text-center py-3 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  Compare Providers
                </a>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  View detailed quotes from specialist community event insurers
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
