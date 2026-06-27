export function getPriority(score:number){return score>=90?'Hot':score>=70?'Strong':score>=50?'Possible':'Low'}
export function scoreFromIssues(issues:string[]){let score=100-(issues.length*8);if(issues.some(i=>i.includes('missing')||i.includes('No website')))score-=8;return Math.max(35,Math.min(100,score))}
