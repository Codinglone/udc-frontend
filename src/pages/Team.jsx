import Team from "../components/Team"
import TeamTitle from "../components/TeamTitle"
const TeamPage = () => {
  return (
    <div className="mt-40"> 
       
        <TeamTitle />
        <Team />
        <button 
        className="border-4  font-bold px-4 py-2 mb-16 border-blue-700 rounded-md lg:ml-[42vw]  text-blue-700  text-lg z-50 hover:border-[gold] hover:text-[gold]">
          JOIN OUR TEAM</button>
    </div>
  )
}

export default TeamPage