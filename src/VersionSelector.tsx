import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';

interface VersionSelectorProps {
  onSelectVersion: (version: 1 | 2) => void;
}

export default function VersionSelector({ onSelectVersion }: VersionSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Halo Collar Plan Selection
          </h1>
          <p className="text-lg text-gray-600">
            Choose a version to explore different UX approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Version 1 Card */}
          <Card className="border-2 hover:border-[#2F93F3] transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl">Version 1</CardTitle>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  Multi-Step
                </span>
              </div>
              <CardDescription className="text-base">
                Guided multi-step flow with updated Halo Care
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#2F93F3] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>4-step guided experience (Plans → Halo Care → Summary → Checkout)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#2F93F3] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Compact Halo Care benefits with tier-specific pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#2F93F3] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Clear step-by-step progression with progress bar</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-gray-500 mb-4">
                  <strong>Use case:</strong> Users who prefer guided flows and clear decision points
                </p>
                <Button
                  onClick={() => onSelectVersion(1)}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 rounded-2xl"
                >
                  View Version 1
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Version 2 Card */}
          <Card className="border-2 border-[#1a1a1a] hover:border-[#2F93F3] transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl">Version 2</CardTitle>
                <span className="px-3 py-1 bg-[#1a1a1a] text-white text-sm font-semibold rounded-full">
                  Mobile-First
                </span>
              </div>
              <CardDescription className="text-base">
                Single-page with billing as stacked options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Plan tabs → billing radio cards → Halo Care toggle</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Relative feature comparisons between tiers</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Sticky bottom bar with total + CTA always visible</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-gray-500 mb-4">
                  <strong>Use case:</strong> Mobile users who want a guided top-down decision flow
                </p>
                <Button
                  onClick={() => onSelectVersion(2)}
                  className="w-full bg-[#1a1a1a] hover:bg-[#333] text-white h-12 rounded-2xl shadow-md"
                >
                  View Version 2
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Both versions maintain Halo's brand design system and pricing logic
          </p>
        </div>
      </div>
    </div>
  );
}
