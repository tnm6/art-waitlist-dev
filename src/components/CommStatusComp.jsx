import { useState } from "react"

function CommStatusComp() {

   const status = "Closed";
   let status_expl;
   
    if (status == "Open") {
        status_expl = "Commissions are open, and there is no waitlist. Fill in the form below and I'll respond within 7 working days if I'm able to take on your project."
    }
    else if (status == "Waitlist active") {
        status_expl = "Commissions are open and I am working through the waitlist requests. Fill in the form below and I'll respond within 7 working days if I'm able to take on your project."
    }
    else if (status == "Closed") {
        status_expl = "Commissions are closed. Feel free to join the waitlist. I'll respond within 7 working days if I'm able to take on your project with an estimated start date."
    }

    

  return (
    <>
      <div>
        <h2>Commission status:</h2>
        <p>{status}</p>
        <p>{status_expl}</p>
      </div>
    </>
  )
}

export default CommStatusComp;
