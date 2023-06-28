import Team from "../components/Team"
import TeamTitle from "../components/TeamTitle"
const TeamPage = () => {
  return (
    <div className="mt-40"> 
       
        <TeamTitle />
        {/* <p className="max-auto m-28 text-2xl text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nobis autem et. Inventore fugit est repudiandae, ratione nulla illum incidunt in maxime delectus doloribus magni tenetur possimus nostrum ipsa aliquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil repudiandae assumenda unde laudantium fuga perspiciatis quis neque maxime quisquam, ipsum nulla accusantium sed! Corrupti magnam rerum eaque labore repudiandae.
        </p> */}
        <Team />
        <button 
        className="border-4  font-bold px-4 py-2 mb-16 border-blue-700 rounded-md lg:ml-[42vw]  text-blue-700  text-lg z-50 hover:border-[gold] hover:text-[gold]">
          JOIN OUR TEAM</button>
    </div>
  )
}

export default TeamPage