import {mockLeads} from './mockLeads'
import {supabase,isSupabaseConfigured} from './supabase'

export async function getLeads(){
  if(!isSupabaseConfigured||!supabase)return mockLeads
  const {data,error}=await supabase.from('leads').select('*').order('created_at',{ascending:false})
  if(error||!data)return mockLeads
  return data.map((l:any)=>({id:l.id,name:l.name,type:l.lead_type,category:l.category||'',address:l.address||'',city:l.city||'',state:l.state||'',phone:l.phone||'',website:l.website||'',contactUrl:l.contact_url||'',email:l.email||'',googleRating:Number(l.google_rating||0),websiteIssues:l.website_issues||[],score:l.score,priority:l.priority,recommendedOffer:l.recommended_offer||'',outreachAngle:l.outreach_angle||'',status:l.status}))
}
