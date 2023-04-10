import { getJobInformation } from "../utilities/fakedb";

export const loadAppliedJobInfo = async()=>{
    const jobInfoData = await fetch('job_posting.json');
    const jobCards = await jobInfoData.json()

  const savedJobCart = getJobInformation()
  const initialJobCartInfo = []
  for (const id in savedJobCart) {
    const foundAppliedPost = jobCards.find(appliedPost => appliedPost.id === id)
    if (foundAppliedPost) {
        initialJobCartInfo.push(foundAppliedPost)
    }
  }

  return { jobCards, initialJobCartInfo }
}