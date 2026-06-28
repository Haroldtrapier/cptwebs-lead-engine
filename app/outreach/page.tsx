import {getLeads} from '../../lib/leadRepository'
import OutreachView from '../../components/OutreachView'
export const dynamic='force-dynamic'
export default async function OutreachPage(){const leads=await getLeads();return <OutreachView leads={leads}/>}
