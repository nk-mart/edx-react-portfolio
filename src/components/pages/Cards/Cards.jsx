
import './style.css'

export default function Cards(props){
 const project=props.projects
    


   return(
    
    <>
    

       { project.map(projects =>{
        return<>
        
        <div className="card">
        <div className="img-container">
        <img src={projects.pic} alt="" className="img-fluid"/>
        </div>
        
        <div className="card-body">
            <h5 className="card-title">Project:{projects.name}</h5>
            <div className="card-text">{projects.about}</div>
        </div>
        </div>
        </>
       })}
        
        {/* <div className="img-container">
        <img src={project[0].pic} alt="" className="img-fluid"/>
        </div>
        
        <div className="card-body">
            <h5 className="card-title">Project:  {project[0].name}</h5>
            <div className="card-text">{project[0].about}</div>
        </div> */}

    
    </>
    

   )

}