import React from "react";
const Form=()=>{
return(
    <>
<div className="cform">
 <form>

  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" for="form6Example1">Email</label>
        <input type="text" id="form6Example1" className="form-control" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <label className="form-label" for="form6Example2">Name</label>
        <input type="text" id="form6Example2" className="form-control" />
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" for="form6Example1">Tel</label>
        <input type="text" id="form6Example1" className="form-control" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <label className="form-label" for="form6Example2">Title</label>
        <input type="text" id="form6Example2" className="form-control" />
      </div>
    </div>
  </div>
  
 

  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example7">Additional information</label>
    <textarea className="form-control" id="form6Example7" rows="4"></textarea>
  </div>
<div className="container_fbtn">
  <button type="submit" className="form_btn "  >Send Message</button>

</div>
</form>
</div>

    </>
)
}
export default Form