import React from 'react'
import './ContactPage.css'
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navBar/NavBar';
import CustomButton from '../../components/custombutton/CustomButton'
import email from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'
import address from '../../assets/images/address.png'



function ContactPage() {
    
    // const [data, setData] = useState({});

    function contactDetails(event) {
        // const { name, value } = event.target
        // const newData = { ...data }
        // newData[name] = value;
        // setData(newData);
        // console.log(newData)
    }

    return (

        <div className='contact-page' id='contact-pg'>

            <div>
                <NavBar />
            </div>

            <div className='contact-us-header'>
                <h2>Contact Us</h2>
            </div>

            <div className='know-us-better'>
                <h1>Would you like to know us better ?</h1>
            </div>

            <div className='phone-email-address'>
                <div className='phone-id'>
                    <img src={phone} alt="phone" />
                    <div className='ph-em-ad'>
                        <h2>Phone</h2>
                        <p>+234 9037231624 or <br /> +234 8115636432</p>
                    </div>
                </div>

                <div className='email-id'>
                    <img src={email} alt="email" />
                    <div className='ph-em-ad'>
                        <h2>Email Id</h2>
                        <p>  
                            <a href="joedangoldtech@gmail.com ">joedangoldtech@gmail.com </a>
                        </p>
                   </div>
  
                </div>                      

                <div className='address-id'>
                    <img src={address} alt="address"/>
                    <div className='ph-em-ad' id='address-cp'>
                        <h2>Address</h2>
                        <p> Federal Capital Territory,
                            <br /> Abuja, Nigeria.</p> 
                    </div>
                </div>

            </div>

            <div className='get-in-touch'>
                <h1>Get in touch with us</h1>
                <p>For more enquiry about our services - please fill up the form below and we will contact you shortly</p>
            </div>

            <form action="" className='contact-page-form'>
                <div className='fullname-mobile-email'>
                    <div className='full-name'>
                        <input className='fme-input' onChange={contactDetails} name='fullName' placeholder='Enter Full Name'/> 
                    </div>

                    <div className='mobile-number'>
                        <input className='fme-input' onChange={contactDetails} name='mobile' placeholder='Enter Mobile Number'/>
                    </div>

                    <div className='email-address'>
                        <input className='fme-input' onChange={contactDetails}  name='email' placeholder='Enter Email Address' />
                    </div>
                
                </div>

                <div className='subject'>
                    <input className='subject-input' onChange={contactDetails} name='subject' placeholder='Enter Subject' />
                </div>

                <div className='message'>
                    <textarea  id="message-input" onChange={contactDetails} name="message" cols="30" rows="10" placeholder='Enter Message....'></textarea>
                </div>
            </form>    

            <div className='send-message'>
                <CustomButton id="sm-button" type={'submit'} content='Send Message' style={{ width: '300px', height: '70px', borderRadius: '70px'}} />
            </div>

            <div>
                <Footer />
            </div>

        </div>

    )
}

export default ContactPage