export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  "name": "TravelItinerary",
  "slug": "travel-itinerary",
  "tagline": "A day-by-day trip plan",
  "description": "Name a city, number of days, and vibe; get a simple day-by-day itinerary. For travelers who want a plan without 20 open tabs.",
  "toolTitle": "Plan your trip",
  "resultLabel": "Your itinerary",
  "ctaLabel": "Build itinerary",
  "features": [
    "Day-by-day",
    "Vibe-aware",
    "Copy plan",
    "No booking needed"
  ],
  "inputs": [
    {
      "key": "city",
      "label": "City",
      "type": "input",
      "placeholder": "e.g. Tokyo"
    },
    {
      "key": "days",
      "label": "Days",
      "type": "select",
      "options": [
        "3",
        "5",
        "7",
        "10"
      ]
    },
    {
      "key": "pref",
      "label": "Vibe",
      "type": "input",
      "placeholder": "e.g. Food + culture"
    }
  ],
  "systemPrompt": "You are a travel itinerary assistant. Given a city, number of days, and preferences, produce a day-by-day plan with morning/afternoon/evening blocks.",
  "pricing": [
    {
      "tier": "Free",
      "price": "$0",
      "desc": "2 trips/month"
    },
    {
      "tier": "Plus",
      "price": "$9/mo",
      "desc": "Unlimited, maps"
    },
    {
      "tier": "Pro",
      "price": "$29/mo",
      "desc": "Bookable, budget, API"
    }
  ],
  mock: (inputs: Record<string, string>): string => {
  const city = inputs['city'] || 'Tokyo'
  const days = inputs['days'] || '3'
  const pref = inputs['pref'] || 'Food + culture'
  let out = `ITINERARY: ${city} (${days} days, ${pref})\n`
  const n = parseInt(days, 10) || 3
  for (let d = 1; d <= n; d++) {
    out += `Day ${d}: Morning activity, afternoon explore, evening local food\n`
  }
  out += '\n---\n(Mock itinerary. Add OPENAI_API_KEY for timed, booked-ready plans.)'
  return out
  }
}
