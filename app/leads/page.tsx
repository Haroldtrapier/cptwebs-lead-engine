import {getLeads} from '../../lib/leadRepository'
import LeadsView from '../../components/LeadsView'
export const dynamic='force-dynamic'
export default async function LeadsPage(){const leads=await getLeads();return <LeadsView leads={leads}/>}
