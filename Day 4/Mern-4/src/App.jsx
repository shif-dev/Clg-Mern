import React from 'react'

function App() {
  return (
    <>
  <nav>
  <h2>ToolM5</h2>
  <div>
    <a href="#">About Us</a>
    <a href="#">Services</a>
    <a href="#">Contacts</a>
    <button  className="get" >Get Started</button>
  </div>
</nav>

<div className="hero">
  <h1>Digital Art</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quo placeat natus assumenda quod illo quaerat ipsum iure dolorum. Quos, perspiciatis consectetur expedita nulla, facilis dolor totam omnis asperiores voluptatibus in, veritatis quis inventore aut ad dolorum consequuntur corrupti? Tenetur dolorem impedit dolores ipsa earum praesentium itaque consectetur totam soluta.</p>
  <button>View More </button>
  <button className="get">Get Started </button>
</div>

<div class="about">
  <div>
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quasi placeat ut, voluptates eum totam aperiam. Maxime, ullam? Aspernatur magni doloremque a animi sapiente molestias tempora. Labore nisi, impedit debitis exercitationem voluptatem commodi illum quisquam eius iusto dolor saepe molestiae beatae similique veniam, id, iure hic accusamus molestias explicabo animi.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis qui perferendis at possimus alias inventore sint numquam, doloribus iste veniam accusamus mollitia repellendus nobis ipsa quae esse ex sapiente exercitationem ad! Repudiandae sapiente sequi labore hic ipsam tempora fugiat quia distinctio illum aut soluta, excepturi amet expedita facere quae quod?</p>
    <button class="bot get">Get Started </button>
  </div>

 
</div>

<div class="cards">
  <div class="card black">
    <h2>Create Unique Digital Art</h2>
    <img class="photo img2" src="img2.jpeg"/>
  </div>
  <div class="card green">
    <h2>Professional tools for illustration design...</h2>
     <img class="img img2" src="img2.jpeg"/>
    <button class="small-btn">Instructions </button>
  </div>
</div>

    </>
  )
}

export default App