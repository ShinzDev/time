import React from 'react'
import  './project.css'
const Projects = () => {
  return (
    <div>

    <h2>
        Projects
    </h2>
    <p>These are a list of my favourite projects</p>

       <div className="contanier">

       <div className="projects">
            <div className="row">
                <div className="col">

                <div class="card" >
  <img src="images/photography-2.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

                </div>
                <div className="col">
                <div class="card" >
  <img src="images/photography-6.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className="col">
                <div class="card" >
  <img src="images/photography-4.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
            </div>
        </div>

       </div>
    </div>
  )
}

export default Projects