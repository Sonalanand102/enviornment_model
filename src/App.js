import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

import './index.css';




function App() {

  const [formStep , setFormStep] = useState(1);

const changeFormStep1 = (e) =>{
  e.preventDefault();
  setFormStep(1);
  document.getElementById("form-step-1").style.display = "block";
  document.getElementById("form-step-2").style.display = "none";
  document.getElementById("form-step-3").style.display = "none";
  document.getElementById("form-step-4").style.display = "none";
  document.getElementById("form-step-5").style.display = "none";
}

const changeFormStep2 = (e) =>{
  e.preventDefault();
  setFormStep(2);
  document.getElementById("form-step-1").style.display = "none";
  document.getElementById("form-step-2").style.display = "block";
  document.getElementById("form-step-3").style.display = "none";
  document.getElementById("form-step-4").style.display = "none";
  document.getElementById("form-step-5").style.display = "none";
}

const changeFormStep3= (e) =>{
  e.preventDefault();
  setFormStep(3);
  document.getElementById("form-step-1").style.display = "none";
  document.getElementById("form-step-2").style.display = "none";
  document.getElementById("form-step-3").style.display = "block";
  document.getElementById("form-step-4").style.display = "none";
  document.getElementById("form-step-5").style.display = "none";
}

const changeFormStep4 = (e) =>{
  e.preventDefault();
  setFormStep(4);
  document.getElementById("form-step-1").style.display = "none";
  document.getElementById("form-step-2").style.display = "none";
  document.getElementById("form-step-3").style.display = "none";
  document.getElementById("form-step-4").style.display = "block";
  document.getElementById("form-step-5").style.display = "none";
}

const changeFormStep5 = (e) =>{
  e.preventDefault();
  setFormStep(5);
  document.getElementById("form-step-1").style.display = "none";
  document.getElementById("form-step-2").style.display = "none";
  document.getElementById("form-step-3").style.display = "none";
  document.getElementById("form-step-4").style.display = "none";
  document.getElementById("form-step-5").style.display = "block";
}

  return (
    <div className="App">
      <div className="banner">
        <div className="pageTitle">
          <h1>Engagement <span>Models</span></h1>
          <p>At Space-O Technologies, we offer four different engagement models, allowing enterprises and startups to choose one that best meets their project requirements.</p>
        </div>
        <div className='page-info'>
          <div className='decidingSection'>
            <div className='decidingLeftSection'>
              <img src={`${process.env.PUBLIC_URL}/assets/bhaval-patel.jpg.webp`} alt=''/>
              <p className="dir-name">Mr. Bhaval Patel</p>
              <p className="dir-pos">Director (Operations)</p>
            </div>
            <div className='decidingRightSection'>
              <p>
              Deciding engagement model is confusing, right? No problem, allow me making it easier for you. Just share quick details with me.
              </p>
            </div>
          </div>
          <div className='form-section'>
            <div className='down-arrow'>
                <img src={`${process.env.PUBLIC_URL}/assets/down-arrow.png.webp`} alt=''/>
            </div>
            <div className='enquiry-form-section'>
              <div className='enquiry-form'>

                {formStep === 1 &&(
                <div className='form-step-1' id="form-step-1">
                  <div className='form-slider'></div>
                  <p>What is the approximate budget for your project?</p>
                  <div className='budget-selector'>
                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input id="select1" type="radio" name='budget' value="Upto $5k"/>
                        <label for="select1">Upto $5k</label>
                      </div>
                      <div className='select-option'>
                        <input type="radio" name='budget' value="$5k to $50k"/>
                        <label>$5k to $50k</label>
                      </div>
                      <div className='select-option'>
                        <input type="radio" name='budget' value="$50k to $99k"/>
                        <label>$50k to $99k</label>
                      </div>
                    </div>

                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input type="radio" name='budget' value="Above $99k"/>
                        <label>Above $99k</label>
                      </div>
                      <div className='select-option'>
                        <input type="radio" name='budget' value="Not Sure"/>
                        <label>Not Sure</label>
                      </div>
                      <div className='select-option'>
                        
                      </div>
                    </div>
                  </div>
                  <div className='budget-selector2'>
                    <a className='btn-next' onClick={changeFormStep2}>
                      Next
                      <strong className='areo-icon'></strong>
                    </a>
                  </div>
                </div>
                )}
                
                {formStep === 2 &&(
                <div className='form-step-2' id="form-step-2">
                  <div className='form-slider'></div>
                  <p>When do you want the project to be completed?</p>
                  <div className='budget-selector'>
                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input id="select1" type="radio" name='timeline' value="2 to 4 Months"/>
                        <label for="select1">2 to 4 Months</label>
                      </div>
                      <div className='select-option'>
                        <input type="radio" name='timeline' value="4 to 6 Months"/>
                        <label>4 to 6 Months</label>
                      </div>
                    </div>

                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input type="radio" name='timeline' value="Need constant update"/>
                        <label>Need constant update</label>
                      </div>
                      <div className='select-option'>
                        <input type="radio" name='timeline' value="Not much aware"/>
                        <label>Not much aware</label>
                      </div>
                    </div>
                  </div>
                  <div className='budget-selector2'>
                    <a className='btn-prev' onClick={changeFormStep1}>
                      <strong className='areo-icon'></strong>
                      Previous
                    </a>
                    <a className='btn-next' onClick={changeFormStep3}>
                      Next
                      <strong className='areo-icon'></strong>
                    </a>
                    
                  </div>
                </div>
                )}
                
                {formStep === 3 && (
                  <div className='form-step-3' id="form-step-3">
                  <div className='form-slider'></div>
                  <p>Do you want to develop a mobile app, web app solution or custom solution?</p>
                  <div className='budget-selector'>
                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input id="select1" type="checkbox"/>
                        <label for="select1">Mobile App (Android, iOS or both)</label>
                      </div>
                    </div>

                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input type="checkbox" />
                        <label>Web App Solution</label>
                      </div>
                    </div>

                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input type="checkbox"/>
                        <label>A Complete Custom Solution</label>
                      </div>
                    </div>
                  </div>
                  <div className='budget-selector2'>
                    <a className='btn-prev' onClick={changeFormStep2}>
                      <strong className='areo-icon'></strong>
                      Previous
                    </a>
                    <a className='btn-next' onClick={changeFormStep4}>
                      Next
                      <strong className='areo-icon'></strong>
                    </a>
                    
                  </div>
                </div>
                )}
                
                {formStep === 4 && (
                  <div className='form-step-4' id="form-step-4">
                  <div className='form-slider'></div>
                  <p>What is the purpose of developing an app/solution?</p>
                  <div className='budget-selector'>
                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input id="select1" type="checkbox"/>
                        <label for="select1">Personal Use</label>
                      </div>
                      <div className='select-option'>
                        <input id="select1" type="checkbox"/>
                        <label for="select1">For my own Startup</label>
                      </div>
                    </div>

                    <div className='budget-selector1'>
                      <div className='select-option'>
                        <input type="checkbox" />
                        <label>For my established Business</label>
                      </div>
                      <div className='select-option'>
                        <input type="checkbox" />
                        <label>This is for my organization</label>
                      </div>
                    </div>
                  </div>
                  <div className='budget-selector2'>
                    <a className='btn-prev' onClick={changeFormStep3}>
                      <strong className='areo-icon'></strong>
                      Previous
                    </a>
                    <a className='btn-next' onClick={changeFormStep5}>
                      Next
                      <strong className='areo-icon'></strong>
                    </a>
                    
                  </div>
                </div>
                )}
                
                {formStep === 5 && (
                  <div className='form-step-5' id="form-step-5">
                  <div className='form-slider'></div>
                  <p>Thank you for submitting your requirement. I’ll analyze it and get back to you soon with suitable engagement model suggestion. Please share your contact details.</p>
                  <div className='budget-selector'>
                    <div className='budget-selector1'>
                      <div className='select-option form-input'>
                        <input id="select1" type="text" placeholder='Name*'/>
                        <input id="select1" type="text" placeholder='Email*'/>
                        <input id="select1" type="text" placeholder='Phone*'/>
                      </div>
                      <div className='select-option'>
                        <div className='enquiry-detail'>
                          <p><strong>Budget: </strong> Upto $5k</p>
                          <p><strong>Period: </strong> 2 to 4 months</p>
                          <p><strong>Type: </strong> A Complete Custom Solution</p>
                          <p><strong>Purpose: </strong> For my established Business</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='budget-selector2'>
                    <a className='btn-prev' onClick={changeFormStep4}>
                      <strong className='areo-icon'></strong>
                      Previous
                    </a>
                    <a className='btn-finish'>
                      Finish
                      <strong className='areo-icon'></strong>
                    </a>
                    
                  </div>
                </div>
                )}
                
              </div>
            </div>
          </div> 
        </div>      
      </div>

      
      <div className='table-section'>
          <div className='table-section-title'>
            <p>
              Let's have a look at these engagement models and comprehend how <br/> 
              each one has its own benefits.
            </p>
          </div>

          <div className='factors-table'>
            <div className='factors-table-section'>
              <div class="factors-title">
                <h2>
                  <img src={`${process.env.PUBLIC_URL}/assets/arrow.svg`} alt=''/>
                  FACTORS
                </h2>
                <p className='suited'>Suited For :</p>
                <p >Size of Project :</p>
                <p >Requirement Type :</p>
                <p >Client's Enviornment :</p>
                <p >Time Frame :</p>
                <p >Budget :</p>
                <p ></p>
              </div>
            </div>

            <div className='factors-table-section2'>
              <div class="factors-model">
                <div className='swap-on-hover'>
                  <img className='front-image' src={`${process.env.PUBLIC_URL}/assets/Dedicated-Team-Model.png`} alt=''/>
                  <img className='back-image' src={`${process.env.PUBLIC_URL}/assets/Dedicated-Team-Model1.png`} alt=''/>
                </div>
                <h3>Dedicated Team <br/> Model</h3>
                <p><strong>Suited For : </strong>Entrepreneur</p>
                <p><strong>Size of Project : </strong>Large</p>
                <p ><strong>Requirement Type : </strong>Evolving</p>
                <p><strong>Client's Enviornment : </strong>Row</p>
                <p><strong>Time Frame : </strong>Estimated</p>
                <p><strong>Budget : </strong>Flexiable</p>
                <div className='read-more-btn'>
                  <a>
                    <button>Read More</button>
                  </a>
                </div>
              </div>
            </div>

            <div className='factors-table-section2'>
              <div class="factors-model">
                <div className='swap-on-hover'>
                  <img className='front-image' src={`${process.env.PUBLIC_URL}/assets/Fixed-Price-Model.png`} alt=''/>
                  <img className='back-image' src={`${process.env.PUBLIC_URL}/assets/Fixed-Price-Model1.png`} alt=''/>
                </div>
                <h3>Fixed Price <br/> Model</h3>
                <p><strong>Suited For : </strong>Entrepreneur & <br/> Startup</p>
                <p><strong>Size of Project : </strong>Medium to Large</p>
                <p ><strong>Requirement Type : </strong>Fixed</p>
                <p><strong>Client's Enviornment : </strong>Medium</p>
                <p><strong>Time Frame : </strong>Fixed</p>
                <p><strong>Budget : </strong>Fixed</p>
                <div className='read-more-btn'>
                  <a>
                    <button>Read More</button>
                  </a>
                </div>
              </div>
            </div>


            <div className='factors-table-section2'>
              <div class="factors-model">
                <div className='swap-on-hover'>
                  <img className='front-image' src={`${process.env.PUBLIC_URL}/assets/Hourly-Price-Model.png`} alt=''/>
                  <img className='back-image' src={`${process.env.PUBLIC_URL}/assets/Hourly-Price-Model1.png`} alt=''/>
                </div>
                <h3>Hourly Price <br/> Model</h3>
                <p><strong>Suited For : </strong>Startup Company</p>
                <p><strong>Size of Project : </strong>Small & Medium</p>
                <p ><strong>Requirement Type : </strong>Fixed</p>
                <p><strong>Client's Enviornment : </strong>High</p>
                <p><strong>Time Frame : </strong>Fixed</p>
                <p><strong>Budget : </strong>Fixed</p>
                <div className='read-more-btn'>
                  <a>
                    <button>Read More</button>
                  </a>
                </div>
              </div>
            </div>

            <div className='factors-table-section2'>
              <div class="factors-model">
                <div className='swap-on-hover'>
                  <img className='front-image' src={`${process.env.PUBLIC_URL}/assets/On-site-Team-Model.png`} alt=''/>
                  <img className='back-image' src={`${process.env.PUBLIC_URL}/assets/On-site-Team-Model1.png`} alt=''/>
                </div>
                <h3>On-Site Team <br/> Model</h3>
                <p><strong>Suited For : </strong>Enterprises & <br/>
                    Government Firms</p>
                <p><strong>Size of Project : </strong>Large</p>
                <p ><strong>Requirement Type : </strong>Evolving</p>
                <p><strong>Client's Enviornment : </strong>Row</p>
                <p><strong>Time Frame : </strong>Estimated</p>
                <p><strong>Budget : </strong>Flexiable</p>
                <div className='read-more-btn'>
                  <a>
                    <button>Read More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className='model-detail-section'>
        <div className='team-model display-flex'>
          <div className='team-desc'>
            <h2>Dedicated Team Model</h2>
            <p>If you are an entrepreneur and want to develop a mobile application for your company, but don't have enough time to regularly communicate with each team member like a developer, designer, quality analyst and web developer regarding your requirements, then dedicated team model is for you.</p>
            <p>Under this model, you can hire an entire team, including Android and iPhone developers, web developer for backend, UI/UX designer, quality analyst and project manager, who will handle the entire team.</p>
            <p>You just need to communicate with the project manager, regarding your project requirements, and he/she will handle the entire team and take care of the project. In short, the main purpose of this model is to hire a dedicated team, who will seamlessly work as your own.</p>
            <p>For this model, you only have to pay a fixed monthly fee for each resource you use or hire. You are allowed to choose the best and skilled resources.</p>
            <div className='quote-btn'>
              <button>Get Free Quote</button>
            </div>
          </div>
          <div className='team-left-img'>
            <img src={`${process.env.PUBLIC_URL}/assets/Dedicated-Team-Model-img.png.webp`} alt=''/>
          </div>
        </div>

        <div className='team-model display-flex-reverse '>
          <div className='team-desc ml-5'>
            <h2>Fixed Price Model</h2>
            <p>If you are an entrepreneur and want to develop a mobile application for your company, but don't have enough time to regularly communicate with each team member like a developer, designer, quality analyst and web developer regarding your requirements, then dedicated team model is for you.</p>
            <p>Under this model, you can hire an entire team, including Android and iPhone developers, web developer for backend, UI/UX designer, quality analyst and project manager, who will handle the entire team.</p>
            <p>You just need to communicate with the project manager, regarding your project requirements, and he/she will handle the entire team and take care of the project. In short, the main purpose of this model is to hire a dedicated team, who will seamlessly work as your own.</p>
            <p>For this model, you only have to pay a fixed monthly fee for each resource you use or hire. You are allowed to choose the best and skilled resources.</p>
            <div className='quote-btn'>
              <button>Get Free Quote</button>
            </div>
          </div>
          <div className='team-right-img'>
            <img src={`${process.env.PUBLIC_URL}/assets/Fixed-Price-Model-img.png.webp`} alt=''/>
          </div>
        </div>

        <div className='team-model display-flex'>
          <div className='team-desc'>
            <h2>Hourley Price Model</h2>
            <p>If you are an entrepreneur and want to develop a mobile application for your company, but don't have enough time to regularly communicate with each team member like a developer, designer, quality analyst and web developer regarding your requirements, then dedicated team model is for you.</p>
            <p>Under this model, you can hire an entire team, including Android and iPhone developers, web developer for backend, UI/UX designer, quality analyst and project manager, who will handle the entire team.</p>
            <p>You just need to communicate with the project manager, regarding your project requirements, and he/she will handle the entire team and take care of the project. In short, the main purpose of this model is to hire a dedicated team, who will seamlessly work as your own.</p>
            <p>For this model, you only have to pay a fixed monthly fee for each resource you use or hire. You are allowed to choose the best and skilled resources.</p>
            <div className='quote-btn'>
              <button>Get Free Quote</button>
            </div>
          </div>
          <div className='team-left-img'>
            <img src={`${process.env.PUBLIC_URL}/assets/Hourly-Price-Model-img.png.webp`} alt=''/>
          </div>
        </div>

        <div className='team-model display-flex-reverse '>
          <div className='team-desc ml-5'>
            <h2>On-Site Team Model</h2>
            <p>If you are an entrepreneur and want to develop a mobile application for your company, but don't have enough time to regularly communicate with each team member like a developer, designer, quality analyst and web developer regarding your requirements, then dedicated team model is for you.</p>
            <p>Under this model, you can hire an entire team, including Android and iPhone developers, web developer for backend, UI/UX designer, quality analyst and project manager, who will handle the entire team.</p>
            <p>You just need to communicate with the project manager, regarding your project requirements, and he/she will handle the entire team and take care of the project. In short, the main purpose of this model is to hire a dedicated team, who will seamlessly work as your own.</p>
            <p>For this model, you only have to pay a fixed monthly fee for each resource you use or hire. You are allowed to choose the best and skilled resources.</p>
            <div className='quote-btn'>
              <button>Get Free Quote</button>
            </div>
          </div>
          <div className='team-right-img'>
            <img src={`${process.env.PUBLIC_URL}/assets/On-site-Team-Model-img.png.webp`} alt=''/>
          </div>
        </div>

        <div className='consulting-section'>
          <h2>Still puzzled? Have any query or confusion related to these engagement models?</h2>
          <p>No worries get in touch with us.</p>
          <div className='quote-btn'>
            <button>Consult Our Experts</button>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
