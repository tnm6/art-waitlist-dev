import { useState } from 'react';


function PortraitRelatedFields({typeOfComm}){
    if(typeOfComm == "Portrait"){
        return <>
            <p>What size portrait?</p>
          {/*  <input type="radio" id="bust_pc" name="portrait_size" value="Bust" required></input>
            <label for="bust_pc">Bust</label><br/> */}
            <input type="radio" id="halfbody_pc" name="portrait_size" value="Half-body" required></input>
            <label for="halfbody_pc">Half-body</label> <br/>
            <input type="radio" id="fullbody_pc" name="portrait_size" value="Full body" required></input>
            <label for="fullbody_pc">Full body</label> <br/><br/>

            <label for="char_no">How many characters? </label>
            <input type="number" id="char_no" name="char_no" min="1"></input> <br/><br/>
        </>
    }
    return null;
}

function CommercialRelatedFields({commUseState}) {
    if (commUseState == "Commercial") {
        return <>
            <label for="commercial_intention">Describe how the commissioned artwork will be used commercially </label>
            <input type="text" id="commercial_intention" name="commercial_intention"></input> <br/><br/>
        </>
    }
    return null;
}

//<input type="radio" id="bust_pc" name="portrait_size" value="Bust" required onClick={() => console.log({typeOfComm})}></input>


function FormComp() {

    const [typeOfComm, setTypeOfComm] = useState(null);
    const [commUseState, setCommUseState] = useState(null);
 

     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f5852cfb-62a7-47f6-8ba7-a67f38c67edc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

return (
    <>
      <div>
        <h2>About You</h2>

       {/* <form action="https://formkeep.com/f/cea3189eaa88"
   accept-charset="UTF-8"
   enctype="multipart/form-data"
   method="POST">*/}
            
            {/*<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="f5852cfb-62a7-47f6-8ba7-a67f38c67edc"></input>*/}

            <form onSubmit={onSubmit}>

            {/*User's name, email address and insta handle*/}
            <label for="uname">Name </label>
            <input type="text" id="uname" name="uname"></input> <br/><br/>
            
            <label for="usr_email">Email* </label>
            <input type="email" id="usr_email" name="usr_email" required></input> <br/><br/>

            <label for="insta_handle">Instagram handle </label>
            <input type="text" id="insta_handle" name="insta_handle"></input> <br/><br/>

        <h2>About the Commission</h2>

        {/*Type of piece*/}
        <p>What type of artwork would you like?*</p>
            <input type="radio" id="portrait_pc" name="comm_type" value="Portrait" required onClick={() => setTypeOfComm('Portrait')}></input>
            <label for="portrait_pc">Portrait</label> <br/>
            <input type="radio" id="env_pc" name="comm_type" value="Environment" required onClick={() => setTypeOfComm('Environment')}></input>
            <label for="env_pc">Environment</label> <br/>
            <input type="radio" id="other_pc" name="comm_type" value="Other" required onClick={() => setTypeOfComm('Other')}></input>
            <label for="other_pc">Other</label> <br/><br/>

        {/*Portrait size and No. of chars*/}
        <PortraitRelatedFields
            typeOfComm={typeOfComm}
        />           

        {/*Illustration description*/}
        <label for="comm_desc">Describe the illustration in as much detail as you can supply. Include anything you think I should know that would help me with the artwork e.g., your character's colour scheme, etc. </label>
       {/* <input type="text" id="comm_desc" name="comm_desc"></input> <br/><br/>*/}
        <br/>
        <textarea id="comm_desc" name="comm_desc" rows="4" cols="50" defaultValue={"Describe the artwork..."}></textarea> <br/><br/>

        {/*Personal/ Commercial use?*/}        
        <p>Is this for personal or commercial use?*</p>
            <input type="radio" id="personal_use" name="comm_use" value="Personal" required onClick={() => setCommUseState('Personal')}></input>
            <label for="personal_use">Personal</label> <br/>
            <input type="radio" id="commercial_use" name="comm_use" value="Commercial" required onClick={() => setCommUseState('Commercial')}></input>
            <label for="commercial_use">Commercial</label> <br/><br/>

        {/*Commercial use purpose*/}
        <CommercialRelatedFields
            commUseState={commUseState}
        />

        {/*Add-ons?*/}        
        <p>Would you like any add-ons?</p>
            <input type="checkbox" id="psd_file" name="psd_file" value="PSD file"></input>
            <label for="psd_file">PSD file</label> <br/>
            <input type="checkbox" id="art_print" name="art_print" value="Art print to be posted to you"></input>
            <label for="art_print">Art print to be posted to you</label> <br/><br/>

        {/*Postage country*/}
        <label for="postage_country">If you want the art print to be posted to you, which country do you live in? </label>
        <input type="text" id="postage_country" name="postage_country"></input> <br/><br/>
        
        {/*Resolution*/}
        <label for="resolution">If you need the commission in a particular resolution, enter it below e.g. 1080px by 1920px </label>
        <input type="text" id="resolution" name="resolution"></input> <br/><br/>


        {/*Deadline*/}
        <label for="proj_deadline">If this artwork has a deadline, enter it here </label>
        <input type="text" id="proj_deadline" name="proj_deadline"></input> <br/><br/>


         <input type="submit" value="Submit"></input>

        </form>
        <span>{result}</span>

      </div>
    </>
  )
}

export default FormComp;