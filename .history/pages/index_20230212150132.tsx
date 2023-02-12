import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { PageInfo, Project, Skill } from '../typing'
import { sanityClient } from '../sanity'
import { fetchInfo } from '../utils/fetchInfo'



type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
}
 const Home = ({pageInfo, projects, skills}: Props) => {
  return (
    < div className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80" >
      <Head>
        <title>Duc Hoang</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <section id= "hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      
      
      <section id= "about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      
      <section id= "skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      
      <section id= "projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>


      <Link href= "#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex item-end justify-end pr-10 ">
            <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
            src="https://cdn.discordapp.com/attachments/1072170194912424038/1072470609847656548/A4A13F1E-77E7-4C22-B0AB-073BB4D8EB7D.jpg" alt="" />
          </div>
        </footer>
      </Link>
  
    </div>
  )
}


export default Home;




export const getStaticProps: GetStaticProps <Props> = async () => {
  
  const pageInfo: PageInfo = await fetchInfo();
  console.log(skills)
  const querySkills = '*[_type == "skills"]'
  const skills: Skill[] = await sanityClient.fetch(querySkills)
  console.log(skills)

  const queryProject = '*[_type == "projects"]'
  const projects: Project[] = await sanityClient.fetch(queryProject)

  return {
    props:{ pageInfo, skills, projects }, revalidate: 10,
  };
} 




