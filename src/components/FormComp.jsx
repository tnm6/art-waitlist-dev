import { useState } from 'react';
import { useForm } from 'formbold-react';

//images
const starRadioUnselected = "src/assets/starG24x.webp";
const starRadioSelected = "src/assets/starO224x.webp";

const portraitPrice = "£75+";
const environmentPrice = "£75+";
const otherPrice = "£75+";
const psdFilePrice = 15;
const artPrintPrice = 25;

const halfBodyPrice = 75;
const fullBodyPrice = 95;
const simpleBgPrice = 0;
const complexBgPrice = 50;
const extraHalfBodyPrice = 50;
const extraFullBodyPrice = 65;



function PortraitRelatedFields({typeOfComm, pushPortraitType, pushCharCount, pushCharPriceCalc, pushBgReceipt}){
    const [typeOfPortrait, setTypeOfPortrait] = useState(null);
    const [backgroundComplexity, setBackgroundComplexity] = useState(null);
    const [animate, setAnimate] = useState(null);
    const [portraitCalcs, setPortraitCalcs] = useState(null);
    const [basePrice, setBasePrice] = useState(null);

    

    const sizeImages = {
        Half_body: "src/assets/tpws.webp",
        Full_body: "src/assets/giddon.webp",
        null: "src/assets/chooseSize.webp",
    };

    const backgroundImages = {
        Simple: "src/assets/annabeth.webp",
        Complex: "src/assets/annabeth_bg.webp",
        null: "src/assets/chooseBG.webp",
    };

    const numberImages = {
        1: "src/assets/sam.webp",
        2: "src/assets/samClover.webp",
        3: "src/assets/samCloverAlex.webp",
    };


    const [value, setValue] = useState(1);

    if(typeOfComm == "Portrait"){
        return <>

{/*SIZE PORTRAIT?*/}
    <div>
        <div data-aos="fade-down">
            <h2>What size portrait?</h2>
            <div className="subText"><br/>{typeOfPortrait == null ? "Make a selection" : <br/>}</div>
        </div>

            <div className="hero">
                    <img className="flower left swayLHS" src="src/assets/longFblue.webp" />
                    <img className="artworkExample" src={sizeImages[typeOfPortrait]} alt={typeOfPortrait+" example"} onError={(e) => (e.currentTarget.src = "src/assets/vase.webp")}/>
                    <img className="flower right swayRHS" src="src/assets/orangeF.webp" />
            </div>

            <div className="questionContainer">

                <div className="radioSet">
                    <label for="halfbody_pc">
                        <img src={typeOfPortrait === "Half_body" ? starRadioSelected : starRadioUnselected} 
                        className={animate === "Half_body" ? "spin" : ""}
                        alt="Half body radio button"/> Half-body <span> &#9733; £{halfBodyPrice} </span>
                        <input type="radio"
                            id="halfbody_pc"
                            name="portrait_size"
                            value="Half_body"
                            checked={typeOfPortrait === "Half_body"}
                            onChange={() => {
                                setTypeOfPortrait("Half_body");
                                setPortraitCalcs(extraHalfBodyPrice);
                                setBasePrice(halfBodyPrice);
                                setAnimate("Half_body");
                                setTimeout(() => setAnimate(null), 500);
                                pushPortraitType("Half body figure");
                                pushCharPriceCalc(halfBodyPrice+(value-1)*extraHalfBodyPrice);
                            }}  
                            required></input>
                    </label> <br/>

                    <label for="fullbody_pc">
                        <img src={typeOfPortrait === "Full_body" ? starRadioSelected : starRadioUnselected} 
                        className={animate === "Full_body" ? "spin" : ""}
                        alt="Full body radio button"/> Full body <span> &#9733; £{fullBodyPrice} </span>
                        <input type="radio"
                            id="fullbody_pc"
                            name="portrait_size"
                            value="Full_body"
                            onChange={() => {
                                setTypeOfPortrait("Full_body");
                                setPortraitCalcs(extraFullBodyPrice);
                                setBasePrice(fullBodyPrice);
                                setAnimate("Full_body");
                                setTimeout(() => setAnimate(null), 500);
                                pushPortraitType("Full body figure");
                                pushCharPriceCalc(fullBodyPrice+(value-1)*extraFullBodyPrice);
                            }}  
                            required></input>
                    
                    </label> <br/><br/>
                </div>
            </div>
    </div>

        

{/*NO. OF CHARACTERS?*/}
    <div>
        <div data-aos="fade-down">
            <h2>How many characters?</h2>
        </div>

            <div className="hero">
                <img className="artworkExample" 
                    src={value == 2 ? numberImages[2]
                            : value >= 3 ? numberImages[3]
                            : numberImages[1]}
                    alt={value+" character example"}
                    onError={(e) => (e.currentTarget.src = "src/assets/vase.webp")}/>
                
            </div>

                <br/>

                <p className="myCaption">
                    Every additional {typeOfPortrait === "Half_body" ? "half body" : "full body"} character costs <span> £{portraitCalcs} </span> <br/>
                </p>

            <div className="questionContainer">
                <label for="character_count">How many characters in this piece? </label> <br/>

                <div className="myDropdown"> 
                <select 
                    name="character_count" 
                    id="character_count"
                    onChange={(e) => {
                        setValue(e.target.value);
                        pushCharCount(e.target.value);
                        pushCharPriceCalc(basePrice+(e.target.value-1)*portraitCalcs);
                    }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                </select>
                </div>
            </div>

            <div className="container">
             <p className="myCaption">
                Your total character price: <span> £{basePrice+((value-1)*portraitCalcs)} {value >= 5 ? "+" : ""} </span> <br/><br/>
            </p>
            <p><i>If you want multiple standalone portraits, e.g., three individual full body portraits, select <span>1</span> above, and in the description section further down, specify how many artworks you want to commission.</i></p>
            </div>

    </div>

{/*BACKGROUND COMPLEXITY?*/}
    <div>
        <div data-aos="fade-down">        
            <h2>How detailed is the background?</h2>
            <div className="subText"><br/>{backgroundComplexity == null ? "Make a selection" : <br/>}</div>
        </div>

            <div className="hero">
                    <img className="flower left swayLHS" src="src/assets/blueF.webp" />
                    <img className="artworkExample" src={backgroundImages[backgroundComplexity]} alt={backgroundComplexity+" example"} onError={(e) => (e.currentTarget.src = "src/assets/vase.webp")}/>
                    <img className="flower right swayRHS" src="src/assets/pinkF.webp" />
            </div>

            <div className="questionContainer">

                <div className="radioSet">
                    <label for="simple_bg">
                        <img src={backgroundComplexity === "Simple" ? starRadioSelected : starRadioUnselected} 
                        className={animate === "Simple" ? "spin" : ""}
                        alt="Simple radio button"/> Simple
                        <input type="radio"
                            id="simple_bg"
                            name="background_detail" 
                            value="Simple"
                            checked={backgroundComplexity === "Simple"}
                            onChange={() => {
                                setBackgroundComplexity("Simple");
                                setAnimate("Simple");
                                setTimeout(() => setAnimate(null), 500);
                                pushBgReceipt("Simple background");
                            }}  
                            required></input>
                    </label> <br/>

                    <label for="complex_bg">
                        <img src={backgroundComplexity === "Complex" ? starRadioSelected : starRadioUnselected} 
                        className={animate === "Complex" ? "spin" : ""}
                        alt="Complex radio button"/> Complex <span> &#9733; + £{complexBgPrice} </span>
                        <input type="radio"
                            id="complex_bg"
                            name="background_detail"
                            value="Complex"
                            onChange={() => {
                                setBackgroundComplexity("Complex");
                                setAnimate("Complex");
                                setTimeout(() => setAnimate(null), 500);
                                pushBgReceipt("Complex background");
                            }}  
                            required></input>     
                    
                    </label> <br/><br/>
                </div>
            </div>
    </div>

        </>
    }
    return null;
}

function CommercialRelatedFields({commUseState}) {
    if (commUseState == "Commercial") {
        return <>
        <div data-aos="fade-down">
            <div className='questionContainer'>
                <div className="subContainer">
                <label for="commercial_intention">Describe how the commissioned artwork will be used commercially </label> <br/>
                
                <textarea id="commercial_intention" 
                        name="commercial_intention" 
                        placeholder="Book cover, character prints, game assets..."
                        required></textarea> <br/><br/>

            </div>
            </div>
        </div>
        </>
    }
    return null;
}

function CommercialExplanation({explNeeded}){
    
    if (explNeeded) {
     return <>
        <div className="container">
            <div data-aos="fade-down">
                <p> <span>Personal use:</span> Artwork that you won't sell or redistribute to gain profit. E.g., a profile picture, fanart (even of an original character*) that you just want to post on social media, or print a copy for yourself to keep </p>
                <p> <span>Commercial use:</span> Artwork you directly make profit off of, or use to assist in making a profit off of something else. E.g., book covers (for publishing. Non-published work is personal use), art prints to be distributed with book copies, artwork you intend to use regularly for marketing or in promotional campaigns, artwork to be included in a commercial product. </p>
                <p> *If you're an author commissioning artwork of your own characters, and you only want to post the artwork to show them off, I wouldn't apply a commercial fee. If you're still unsure, select either option. If I can take on your project, I'll respond to your request with further clarification. </p>
            </div>
        </div>
        </>
    }      
    return null;
}


function FormComp() {



    const [typeOfComm, setTypeOfComm] = useState(null);
    const [commUseState, setCommUseState] = useState(null);
    const [animate, setAnimate] = useState(null);
    const [quote, setQuote] =useState(0);
    const [explNeeded, setExplNeeded] = useState(false);

    const [portraitTypeReceipt, setPortraitTypeReceipt] = useState("");
    const [charCountReceipt, setCharCountReceipt] = useState(1);
    const [charPriceCalc, setCharPriceCalc] = useState(null);
    const [bgReceipt, setBgReceipt] = useState("");
    const [psdAddon, setPsdAddon] = useState("No");
    const [printAddon, setPrintAddon] = useState("No");

    const artworkImages = {
        Portrait: "src/assets/jude.webp",
        Environment: "src/assets/cloudpanel.webp",
        Other: "src/assets/vase.webp",
        null: "src/assets/chooseArtwork.webp",
    };

   
//Receipt price calculation

const basePriceReceipt =
  typeOfComm === "Environment" || typeOfComm === "Other" ? 75 : 0;

const portraitPriceReceipt =
  typeOfComm === "Portrait" ? charPriceCalc : 0;

const backgroundPriceReceipt =
  bgReceipt === "Complex background" ? complexBgPrice : 0;

const psdPriceReceipt = psdAddon === "Yes" ? psdFilePrice : 0;

const printPriceReceipt = printAddon === "Yes" ? artPrintPrice : 0;

//Receipt price calculation
const estTotal =
  basePriceReceipt +
  portraitPriceReceipt +
  backgroundPriceReceipt +
  psdPriceReceipt +
  printPriceReceipt;


return (
    <>
      <div>
        
        

        <h1>About You</h1>

       <form action="https://formbold.com/s/60R0r" method="POST" encType="multipart/form-data">
        <div className="container">
            <div id="commissioner_info">
                {/*User's name, email address and insta handle*/}
                <label for="client">Name (or username)*</label> <br/>
                <input type="text" id="client" name="client" placeholder="Enter your name" required></input> <br/><br/>
                
                <label for="clientEmail">Email* </label> <br/>
                <input type="email" id="clientEmail" name="clientEmail" placeholder="Enter your email" required></input> <br/><br/>

                <label for="instaHandle">Instagram handle (optional)</label> <br/>
                <input type="text" id="instaHandle" name="instaHandle" placeholder="Enter your username"></input> <br/><br/>
            </div>
        </div>

        
    
        <h1>About the Commission</h1>

        {/*Type of piece*/}

        
        <h2>What type of artwork would you like?*</h2>
         <div className="subText"><br/>{typeOfComm == null ? "Make a selection" : <br/>}</div>

        <div className="hero">
            <img className="flower left swayLHS" src="src/assets/whiteF.webp" />
            <img className="artworkExample" src={artworkImages[typeOfComm]} alt={typeOfComm+" example"} onError={(e) => (e.currentTarget.src = "src/assets/vase.webp")}/>
            <img className="flower right swayRHS" src="src/assets/blueF.webp" />
        </div>


        <div className="questionContainer">
           
            <div className="radioSet">
                <label for="portrait_pc">
                    <img src={typeOfComm === "Portrait" ? starRadioSelected : starRadioUnselected} 
                    className={animate === "Portrait" ? "spin" : ""}
                    alt="Portrait radio button"/> Portrait <span> &#9733; {portraitPrice} </span>                              
                    <input type="radio"
                        id="portrait_pc"
                        name="comm_type"
                        value="Portrait"
                        checked={typeOfComm === "Portrait"}
                        onChange={() => {
                            setTypeOfComm("Portrait");
                            setAnimate("Portrait");
                            setTimeout(() => setAnimate(null), 500);
                        }}                         
                        required></input>
                </label> <br/>
          
                <label for="env_pc">
                    <img src={typeOfComm === "Environment" ? starRadioSelected : starRadioUnselected} 
                    className={animate === "Environment" ? "spin" : ""}
                    alt="Environment radio button"/> Environment <span> &#9733; {environmentPrice} </span>                                                
                    <input type="radio"
                        id="env_pc"
                        name="comm_type"
                        value="Environment"
                        checked={typeOfComm === "Environment"}
                        onChange={() => {
                            setTypeOfComm("Environment");
                            setAnimate("Environment");
                            setTimeout(() => setAnimate(null), 500);
                        }}                         
                        required></input>
                </label> <br/>

                <label for="other_pc">
                    <img src={typeOfComm === "Other" ? starRadioSelected : starRadioUnselected}
                    className={animate === "Other" ? "spin" : ""}
                    alt="Other radio button"/> Other <span> &#9733; {otherPrice} </span>
                <input type="radio"
                        id="other_pc"
                        name="comm_type"
                        value="Other"
                        checked={typeOfComm === "Other"}
                        onChange={() => {
                            setTypeOfComm("Other");
                            setAnimate("Other");
                            setTimeout(() => setAnimate(null), 500);
                        }}                         
                        required></input>
                </label> <br/>

            </div>
        
            <div className="container">
                <p><i>If the illustration's focal point is a detailed figure, please select portrait. <br/> This includes book covers with detailed figures. Background complexity can be specified in the next sections. </i></p>
            </div>

        </div>
    
   

        {/*Portrait size, no. of chars and bg complexity*/}
        
        <PortraitRelatedFields
            typeOfComm={typeOfComm}
            pushPortraitType={setPortraitTypeReceipt}
            pushCharCount={setCharCountReceipt}
            pushBgReceipt={setBgReceipt}
            pushCharPriceCalc={setCharPriceCalc}
        />           
        

        <h2>Illustration description and references</h2>


        {/*Illustration description*/}
        <div className='questionContainer'>
            <div className='subContainer'>
                <label for="comm_desc" className="myLabel">
                    Describe the illustration in as much detail as you think is necessary. Include anything you think that would help me with the artwork e.g., your character's colour scheme, etc. Feel free to link Pinterest boards and image collections.
                </label><br/>
                      
                <textarea id="comm_desc" 
                        name="comm_desc" 
                        placeholder="Describe the artwork..."
                        required></textarea> <br/><br/>
            </div>



        </div>

        {/*Personal/ Commercial use?*/}     
        <h2>Is this for personal or commercial use?*</h2>
            
            <div className="questionContainer">
                <div className="radioSet">
                    <label for="personal_use">
                        <img src={commUseState === "Personal" ? starRadioSelected : starRadioUnselected} 
                        className={animate === "Personal" ? "spin" : ""}
                        alt="Personal use radio button"/> Personal
                        <input type="radio"
                            id="personal_use"
                            name="comm_use"
                            value="Personal"
                            checked={commUseState === "Personal"}
                            onChange={() => {
                                setCommUseState("Personal");
                                setAnimate("Personal");
                                setTimeout(() => setAnimate(null), 500);
                        }}                         
                        required></input>
                    </label> <br/>
                    <label for="commercial_use">
                        <img src={commUseState === "Commercial" ? starRadioSelected : starRadioUnselected} 
                        className={animate === "Commercial" ? "spin" : ""}
                        alt="Commercial use radio button"/> Commercial <span> &#9733; fees apply </span>
                        <input type="radio"
                            id="commercial_use"
                            name="comm_use"
                            value="Commercial"
                            onChange={() => {
                                setCommUseState("Commercial");
                                setAnimate("Commercial");
                                setTimeout(() => setAnimate(null), 500);
                        }}                         
                        required></input>
                    </label> <br/>
                </div>

                <div className="subContainer">
                 <p className="myHyperlink"
                    onClick={() => setExplNeeded(prev => !prev)}><i>What's the difference?</i></p> 
                 
                 </div>
            </div>

            <CommercialExplanation
                explNeeded={explNeeded}
            />

        {/*Commercial use purpose*/}
        <CommercialRelatedFields
            commUseState={commUseState}
        />

        {/*Add-ons?*/}        
        <h2>Would you like any add-ons?</h2>
        <div className='questionContainer'>
            <div>
                <input type="checkbox" 
                    id="psd_file" 
                    name="psd_file" 
                    value="PSD file"
                    onChange={(e) => {
                        e.target.checked ? setPsdAddon("Yes") : setPsdAddon("No");
                    }}>
                </input>
                <label for="psd_file">PSD file <span> &#9733; £{psdFilePrice}</span></label> 

                    <br/>
                <input type="checkbox"
                    id="art_print"
                    name="art_print"
                    value="Art print to be posted to you"
                    onChange={(e) => {
                        e.target.checked ? setPrintAddon("Yes") : setPrintAddon("No");
                    }}>
                </input>
                <label for="art_print">Art print posted to you <span> &#9733; £{artPrintPrice}</span> </label> <br/><br/>
            </div>
        
            <div className="container">
                {/*Postage country*/}
                <label for="postage_country">If you want an art print of the commissioned piece to be posted to you, which country do you live in? </label> <br/>
                <input type="text" id="postage_country" name="postage_country"></input> <br/><br/>
                
                {/*Resolution*/}
                <label for="resolution">If you need the artwork in a particular resolution or format, enter it below e.g. 1080px by 1920px </label> <br/>
                <input type="text" id="resolution" name="resolution"></input> <br/><br/>


                {/*Deadline*/}
                <label for="deadline">If this artwork has a deadline, enter it here </label> <br/>
                <input type="text" id="deadline" name="deadline"></input> <br/><br/>
            </div>
        </div>

        

        <div className="container">
            <p> Review the charges below and click on <span>Submit</span> to send your request. <br/> Commercial fees will be quoted over email depending on the context of use. </p>
        </div>
        
    
    <div data-aos="fade-down">
        <div className="container">

        <div className="receipt" style={{zIndex: "2", position: "absolute", width: "250px"}}>
            <h3>Estimated<span>*</span> summary of charges &lt;3</h3>
            <table> 
                <tbody>
                    <tr>
                        <td></td>
                        <td className="emptyCell"> </td>
                        <td></td>
                    </tr>
                <tr>
                    <td colSpan={2}> <u>{typeOfComm}</u> &#9733; </td> 
                    
                    <td> {typeOfComm == "Environment" || typeOfComm == "Other" ? "£"+75 : ""} </td>
                </tr>

                {typeOfComm == "Portrait" ? 
                    <> 
                        <tr>
                            <td colSpan={2}>{portraitTypeReceipt == "" ? "" : charCountReceipt} {charCountReceipt >= 5 ? "(or more)" : ""} {portraitTypeReceipt}{charCountReceipt >1 ? "s" : ""}</td>
                            <td>£{charPriceCalc}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}> {bgReceipt} </td>
                            <td> {bgReceipt == "Complex background" ? "£"+complexBgPrice : ""} </td>
                        </tr>
                    </> 
                    : ""}
                       
                <tr>
                    <td colSpan={2}> {commUseState == "Commercial" ? "Commercial use" : ""} </td>
                    <td> {commUseState == "Commercial" ? "Fees apply" : ""} </td>
                </tr>

                <tr style={{height: "10px"}}></tr>

                <tr>
                    <td colSpan={2}> {psdAddon == "Yes" || printAddon == "Yes" ? <><u>Add-ons</u> &#9733;</> : ""} </td>
                    <td></td>
                </tr>

                <tr>
                    <td colSpan={2}> {psdAddon == "Yes" ? "PSD file" : ""} </td>
                    <td> {psdAddon == "Yes" ? "£"+psdFilePrice : ""} </td>
                </tr>

                <tr>
                    <td colSpan={2}> {printAddon == "Yes" ? "Art print" : ""} </td>
                    <td> {printAddon == "Yes" ? "£"+artPrintPrice : ""} </td>
                </tr>

                <tr style={{height: "10px"}}></tr>

                <tr style={{backgroundColor: "#ff6e6e56"}}>
                    <td colSpan={2}> Est. total </td>
                    <td > £{estTotal} </td>
                </tr>
                </tbody>
            </table>

            <p><span>*</span>Final price will be confirmed if your request has been accepted :&#41;</p>


        {/*Receipt*/}
        </div>
                <img src="src/assets/receiptALT2.webp" style={{width: "500px"}} alt="receipt paper background" />
        </div>
        
    </div>

        <div className="container">
            <br/>
            <button type="submit">Submit</button>
            <br/>
            <br/>
        </div>

        </form>
        
        <div className="footer">
             &#9733; Questions? Email me on nadiabeeart@gmail.com &#9733;
        </div>

      </div>
    </>
  )
}

export default FormComp;