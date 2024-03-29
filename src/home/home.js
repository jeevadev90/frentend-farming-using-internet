import "./home.css";
import myImg from "./img/green-field.jpg"
import first from "./img/slid/slid1.jpg"
import second from "./img/slid/slid2.jpg"
import third from "./img/slid/slid3.jpg"
import fourth from "./img/slid/slid4.jpg"
import fifth from "./img/slid/slid5.jpg"
import sixth from "./img/slid/slid6.jpg"
import seven from "./img/slid/slid7.jpg"
import Nav from "../nve/nav";
import Footer from "../footer/footer";
import { useEffect, useState } from "react";
import { fetchFeedback } from "../service/Api";


function Home()
{
  const [feedback,setFeedback]=useState()

    useEffect(()=>
    {

      fetchFeedback().then((response)=>
      {
        
        setFeedback(response.data)
      }).catch((error)=>
      {
        console.log(error)
        
      })
    },[])

    return(
        <>
          <Nav></Nav>
        <div className="homeCont container">
        
        
        <div className="row">
          <div className="col">
           <div id="carouselExampleControls" className="imgHome carousel slide" data-bs-ride="carousel">
       
            <div className="carousel-inner">
            
            <div  className="carousel-item active">
                <img src={myImg} className="d-block w-100" alt="..."/>
              </div>
              
              <div className="carousel-item">
                <img src={first} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={second} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={third} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={fourth} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={fifth} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={sixth} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={seven} className="d-block w-100" alt="..."/>
              </div>  
              
            </div>
            
            <button  className="carousel-control-prev btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button  className="carousel-control-next btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
      </div>
      </div>
        <b> <hr></hr></b>
        <div className="contDetail container">
          <div className="row">
            <div className="col">
        <p>
            <h2 style={{color:"green"}}><u>இயற்கை வேளாண்மை</u></h2>
            <br/>
            <p>
            இயற்கை வேளாண்மை என்பது இயற்கை விவசாய கழிவுகள் மூலமாக கொண்டு உருவாக்கப்பட்ட உரங்களை பயன்படுத்தி செய்யப்படும் வேளாண்மையாகும்.
             இதனை சுமார் <b>70000</b> ஆண்டுகளாக தமிழர்கள் தொன்றுத்தொட்டு பாலை நிலம் உருவான காலங்களில் இருந்து தொடர்ந்து வருகின்றனர். இதற்கு காளைமாடு 
             மிகவும் உதவியாக இருக்கிறது. இயற்கை வேளாண்மையை கொண்டு உருவாகும் விவசாயப்பொருட்கள் மனித உடலுக்கு தேவையான சக்தியை இலகுவாக 
             பயன்பட உதவுகிறது.இதனால் இயற்கையான ஆரோக்கிய வாழ்வு வாழலாம்.
             இயற்கை விவசாயத்தை பயன்படுத்தும் மனிதர்கள் சுமார் <b>300</b> ஆண்டுகள் உயிர் வாழலாம் என கண்டறியப்பட்டது.

            </p>
            <br></br><br/>
            <h2 style={{color:"green"}}><u> வேளாண்மை</u></h2>
            <br/>
        <p className="firstP">
            <b>உழவு</b> அல்லது <b>வேளாண்மை</b> அல்லது<b> விவசாயம்</b> அல்லது <b>கமம் </b>என்பது உணவுக்காகவும் ஏனைய பயன்பாடுகளுக்காகவும் சிலவகைப்
         பயிர்களை உற்பத்தி செய்வதையும், கால்நடை வளர்ப்பையும் குறிக்கும். வேளாண்மை ஒரு முக்கியமான முதனிலைத் தொழில் ஆகும்.
          இத்தொழிலில் மனிதன் இயற்கையிலிருந்து கிடைக்கும் பொருள்களைச் சேகரித்துப் பயன்படுத்திக் கொள்வதோடு நிறுத்திக் கொள்ளாமல்,
           அவ்வியற்கையோடு ஒன்றிணைந்து பணியாற்றி உணவுப் பொருட்களை உற்பத்தி செய்து கொள்கிறான்.
           </p>
           <br></br><br/>
           <h2 style={{color:"green"}}><u> பயிர் விளைவிக்கும் முறைகள்</u></h2>
           <br/>
           <p>
           கிடைக்கக்கூடிய மூலவளங்கள் பண்ணையின் புவியியல், காலநிலை, அரசின் கொள்கை, பொருளாதார, சமூக மற்றும் அரசியல் நெருக்கடிகள்,
            பண்ணையாளரின் அடிப்படை மற்றும் கலாச்சாரம் ஆகியவற்றைச் சார்ந்து பயிரிடும் முறைகள் பண்ணைகளுக்கிடையே மாறுபடுகின்றன.
            <br/>
            <br/>
            விளை நிலத்தில் ஒரே ஒரு பயிர் மட்டும் ஒரு முறை விளைவிக்கப்பட்டால் அது 'ஒருபயிர் விளைவிக்கும் முறை' என அழைக்கப்படுகிறது.இரண்டு 
            அல்லது இரண்டுக்கும் மேற்பட்ட பயிர்களை ஒரே விளைநிலதிதில் ஒரே பருவகாலத்தில் விளைவித்தால் அது 'பல்பயிர் விளைவிக்கும் முறை' என 
            அழைக்கப்படுகிறது. எடுத்துக்காட்டாக கார்வால் இமயமலைப் பகுதியில் ஒரே விளை நிலத்தில் 12க்கும் மேற்பட்ட பல்வேறு விதமான பீன்சு, பருப்பு, 
            திணைவகைகள் ஆகியவை பயிர்செய்யப்பட்டு அப்பயிர்களின் அறுவடை காலகட்டங்களுக்கு ஏற்றவாறு அறுவடை செய்யப்படுகிறது. வேளாண் பயிர்களை 
            உணவுப்பயிர்கள் எனவும் பணப்பயிர்கள் எனவும் இரு பெரும் பிரிவுகளாகப் பிரிக்கலாம். பணப்பயிர்கள் உணவு போல் நுகரப்படாமல் அவற்றை மேலும் 
            பதப்படுத்தும் வகையில் மூலப் பொருள்களாகப் பயன்படுகின்றன. எடுத்துக்காட்டாக இரப்பர், சின்கோனா மற்றும் பருத்தி முதலியன.
             உணவுப் பயிர்கள் தன்னிறைவுப் பயிர்களாகவோ அல்லது வணிகப்பயிர்களாகவோ வளர்க்கப்படுகின்றன.
           </p>
           <br/>
           <br/>
           <h2 style={{color:"green"}}><u>வேளாண் உற்பத்திப் பொருட்கள்</u></h2>
           <br></br>
           <p>
           மனிதனால் பலவிதமான வேளாண்பயிர்கள் பயிரிடப்படுகின்றன. சில உணவுக்காகவும் சில இழைகளுக்காகவும் பயிரிடப்படுகின்றன.
            தானியங்களே மனிதனது அடிப்படை உணவாகும். மாவுச்சத்து கொண்ட விதைகளையுடைய தானியவகைகள் புல்வகைத் தாவரங்களாகும். 
            நெல் கோதுமை, சோளம் மற்றும் திணைவகைகள் பொதுவாக தானிய வகைகள் ஆகும். விவசாய உற்பத்திப் பொருட்களைப் பொதுவாக உணவுகள்,
             இழைமங்கள், எரிபொருள், மூலப்பொருட்கள், மருந்துப்பொருட்கள், ஊக்க மருந்துகள், மற்றும் ஒப்பனை வகைப் பொருட்கள் என பலவாறு வகைப்படுத்தலாம்.
              தற்காலத்தில் தாவரங்கள் இயற்கை எரிபொருள்கள், இயற்கை மருந்துப்பொருள்கள், மற்றும் மருந்துகளின் உற்பத்திக்குப் பயன்படுத்தப்படுகின்றன.
              <br/>
              <br/>
              <br/>
              <ul style={{color:"rgb(29, 106, 8)"}}>
              <li>வேளாண்மையால் உணவு உற்பத்தியாகிறது. அது உணவு தானியங்கள், காய்கறிகள், பழங்கள் மற்றும் இறைச்சி ஆகியவற்றை உள்ளடக்கும்.</li>
              <li> இழைமங்கள் என்பவை பருத்தி, கம்பளி, சணல், பட்டு மற்றும் ஆளி ஆகியவற்றை உள்ளடக்கியதாகும்.</li>
              <li>  மூலப்பொருட்கள் என்பவை மரத் தடிகள் மற்றும் மூங்கில் ஆகியவற்றை உள்ளடக்கியதாகும். பிற பயன்மிக்க பிசின்கள் போன்ற மூலப்பொருட்களும் தாவரங்களிலிருந்து கிடைக்கின்றன.</li>
              <li> ஊக்கப்பொருட்கள் என்பவை யிலை, சாராயம், கஞ்சா, அபினி, கோகெய்ன் மற்றும் டிஜிட்டலிஸ் ஆகியவற்றை உள்ளடக்கியிருக்கிறது.</li>
              <li> இயற்கை எரிபொருட்கள் இயற்கையாகக் கிடைக்கும் மீத்தேன்,எத்தனால் மற்றும் பயோடீசல் ஆகியவற்றை உள்ளடக்கியிருக்கிறது.</li>
              <li> வெட்டியெடுக்கப்படும் பூக்கள், தாவர வளர்ப்பு, மீன் வளர்ப்பு மற்றும் வீட்டு விலங்குகள், விற்பனைக்கான பறவைகள் ஆகியவை அலங்காரப் பொருள்களுள் சிலவாகும்.</li>
              </ul>
           </p>
        </p>
        </div>
       
        </div>
     </div>
     <div className="row">
     <div className="col feedBack">
          <h3>Feed backs</h3>
          {feedback&&feedback.length>0?feedback.map((feed)=>(
            <>
            <div className="card " key={feed.id}>
            <div className="card-body">
              <p>{feed.content}</p>
              <div className="card-text">
                <div className="row">
                  <div className="col">
                    <p> {feed.user.name}<sub><p>{feed.created_At}</p></sub></p>
                  </div>
                  <div className="col"></div>
                </div>
                
              </div>
            </div>
          </div>
            </>
          )):<div></div>}
        </div>
     </div>
        <footer>
          <Footer/>
        </footer>
    </>
  );
}

export default Home;