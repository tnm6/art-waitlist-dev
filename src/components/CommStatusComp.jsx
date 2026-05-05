import { useState, useRef } from "react"

function CommStatusComp() {

   const status = "Closed";
   let status_expl;
   
    if (status == "Open") {
        status_expl = "Commissions are open, and there is no waitlist. Fill in the form below and I'll respond within 7 working days if I'm able to take on your project."
    }
    else if (status == "Waitlist active") {
        status_expl = "Commissions are open. I am working through waitlist requests. Fill in the form below and I'll respond within 7 working days if I'm able to take on your project."
    }
    else if (status == "Closed") {
        status_expl = "Commissions are closed. Feel free to join the waitlist by filling in the form below. I'll respond within 7 working days if I'm able to take on your project with an estimated start date."
    }

   const ref = useRef(null);

  const handleClick = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;

      const elementBottom = rect.bottom + scrollTop;

      window.scrollTo({
        top: elementBottom,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="footer" ref={ref}>
        @nadiabeeart's
        <h2>Commission status:</h2>
        <div className="container">
          <p>&#9733; {status} &#9733;</p>
          <p>{status_expl}</p>
        </div>
        
        <br/>
        <button onClick={handleClick}>Join Waitlist</button>

      </div>
      
    </>
  )
}

export default CommStatusComp;
