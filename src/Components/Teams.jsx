import React from 'react'
import bg from '../assets/Images/teamsbg.svg'
import TeamsCard from './TeamsCard'
import it from '../assets/Images/tech.png'
import act from '../assets/Images/act.png'
import comu from '../assets/Images/comunication.png'
import desgin from '../assets/Images/desgin.png'
import hr from '../assets/Images/hr.png'
import er from '../assets/Images/er.png'
export default function Teams() {
  return (
    <>
    <section className=" relative" id='teams'>
    <h1 className="text-center text-3xl font-medium mb-5 opacity-70 text-white" >
          TEAMS
        </h1>
    <img src={bg} alt=""  className='absolute top-[200px] w-[800px] left-[20%] ' id='teamsimg'/>
    <div className='grid grid-cols-3 mt-20 gap-12 my-10 px-28  relative z-30' id='teamsgrid'>
      
 <TeamsCard img={it} title='Tech Team' teamdes={`The Tech Team develops and maintains the club's technical projects, focusing on coding, data analysis, and building tools that drive innovation in the club.`} />
 <TeamsCard img={act} title={' Activities Team'} teamdes={`The Activities Team organizes events like workshops, hackathons, and challenges, creating engaging opportunities for members to learn, grow, and network.`} />
 <TeamsCard img={comu} title={'Communication Team'} teamdes={`The Communication Team ensures smooth internal and external communication, handling updates, social media, and promoting the club’s initiatives to a wider audience.`} />
 <TeamsCard img={desgin} title={'Design Team'} teamdes={`The Design Team creates visually appealing designs for club events, marketing materials, and the website, enhancing the club’s overall look and feel.`} />
 <TeamsCard img={hr} title={'Human Resources Team'}  teamdes={`The HR Team manages member recruitment, onboarding, and team-building, fostering a supportive and inclusive environment for all members.`}/>
 <TeamsCard img={er}  title={'External Relations Team'} teamdes={`The ER Team builds partnerships with organizations, securing sponsorships, collaborations, and internship opportunities to benefit the club and its members.`} />
 </div>
    </section>
    </>
  )
}
