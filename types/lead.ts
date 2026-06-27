export interface Lead {
  id: string
  name: string
  type: 'church' | 'small_business'
  category: string
  address: string
  city: string
  state: string
  phone?: string
  website?: string
  contactUrl?: string
  email?: string
  googleRating?: number
  websiteIssues: string[]
  score: number
  priority: 'Hot' | 'Strong' | 'Possible' | 'Low'
  recommendedOffer: string
  outreachAngle?: string
  status: 'New' | 'Contacted' | 'Replied' | 'Booked' | 'Closed'
}
