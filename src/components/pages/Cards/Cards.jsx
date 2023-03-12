
import './style.css'

export default function Cards(props){
 const project=props.projects

console.log(props.projects[0])

   return(
    
    <>
    <div className="card">
        <div className="img-container">
        <img src={project[0].pic} alt="" className="img-fluid"/>
        </div>
        
        <div className="card-body">
            <h5 className="card-title">Project: {project[0].name}</h5>
            <div className="card-text">somekind of text</div>
        </div>

    </div>
    </>
    

   )

}