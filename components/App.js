import React from 'react';
import {run,getParameterByName,calcImpact} from '../main/bloom';
import {submit} from '../main/process';
import ReCAPTCHA from 'react-google-recaptcha';

import CountryCodes from './CountryCodes';
import StateCodes from './StateCodes';

var initialized = run();
const pageMax = 3;
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page:0,
      modalShowing:false,
      donationFail:false,

      amount:"",
      recurring:false,
      frequency:"Monthly",
      startDate: "yyyy-mm-dd",
      firstName: "",
      lastName: "",
      email: "",
      phone:"",
      country: "US",
      address: "",
      zip: "",
      state: "CA",
      city: "",
      type: "credit",
      comments: "",
      increaseImpact:false,
      increaseImpactBank: false,
      routingNumber: "",
      accountNumber: "",
      captcha: false,

      invalidAmount:false,
      invalidDate:false,
      invalidFirstName:false,
      invalidLastName:false,
      invalidEmail:false,
      invalidPhone:false,
      invalidAddress:false,
      invalidCity: false,
      invalidZip: false,
      invalidCaptcha:false
    }
  }

  /**********************
   * PROCESSING METHODS *
   **********************/

  invalidCallback(errorObj) {
    this.setState(errorObj)
  }

  onDonationSuccess() {
    window.location.href = "http://nationalschoolproject.com/hidden/thanks";
  }

  onDonationFail(error) {
    this.setState({
      donationFail:true
    })
  }

  confirmModal() {
    submit(this.state,this.invalidCallback.bind(this), () => this.onDonationSuccess(), () => this.onDonationFail(error));
  }

  /******************
   * EVENT HANDLERS *
   ******************/

  showModal() {
    this.setState(
      {
        modalShowing:true
      }
    )
  }

  hideModal() {
    this.setState(
      {
        modalShowing:false
      }
    )
  }

  isValidDate(date) {
    if (date == undefined || date==null || date == "")
      return false;

    date = date.replace(/[^0-9]/g,'');

    if (date.length != 8)
      return false;

    if (Number.isNaN(parseInt(date)))
      return false;

    return true;
  }

  nextPage() {
    let errors = {}
    if (this.state.page == 0) {

      let amount = parseInt(this.state.amount);

      if (amount <= 0 || Number.isNaN(amount)) {
        errors.invalidAmount = true;
      }

      if (this.state.recurring && !this.isValidDate(this.state.startDate)) {
        errors.invalidDate = true;
      }

    }
    else if (this.state.page == 1) {

      if (this.state.firstName == "") {
        errors.invalidFirstName = true;
      }

      if (this.state.lastName == "") {
        errors.invalidLastName = true;
      }

      if (!/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}\b/g.test(this.state.email)) {
        errors.invalidEmail = true;
      }

      if (this.state.phone == "") {
        errors.invalidPhone = true;
      }

    }
    else if (this.state.page == 2) {


      if (this.state.address == "") {
        errors.invalidAddress = true;
      }

      if (this.state.country == "US" || this.state.country == "CA") {
        if (this.state.zip == "") {
          errors.invalidZip = true;
        }
        if (this.state.city == "") {
          errors.invalidCity = true;
        }
      }

    }

    if (Object.keys(errors).length > 0) {
      this.setState(errors);
      return;
    }

    if (this.state.page < pageMax) {
      this.setState({
        page:this.state.page+1
      })
    }
  }

  previousPage() {
    if (this.state.page > 0) {
      this.setState({
        page:this.state.page-1
      })
    }
  }

  onAmountChange(event) {
    this.setState({
      amount:event.target.value
    })
  }

  onRecurringChange(event) {
    this.setState({
      recurring:event.target.checked
    })
  }

  onFrequencyChange(event) {
    console.log("frequency change: " + event.target.value.toLowerCase());
    this.setState({
      frequency:event.target.value
    })
  }

  onStartDateChange(event) {
    console.log("start date change: " + event.target.value);
    this.setState({
      startDate:event.target.value
    })
  }

  onFirstNameChange(event) {
    this.setState({
      firstName:event.target.value
    })
  }

  onLastNameChange(event) {
    this.setState({
      lastName:event.target.value
    })
  }

  onEmailChange(event) {
    this.setState({
      email:event.target.value
    })
  }

  onPhoneChange(event) {
    this.setState({
      phone:event.target.value
    })
  }

  onCountryChange(event) {
    this.setState({
      country:event.target.value
    })
  }

  onAddressChange(event) {
    this.setState({
      address: event.target.value
    })
  }

  onCityChange(event) {
    this.setState({
      city:event.target.value
    })
  }

  onStateChange(event) {
    console.log("state change: " + event.target.value);
    this.setState({
      state: event.target.value
    })
  }

  onZipChange(event) {
    this.setState({
      zip:event.target.value
    })
  }

  onRadioChange(event) {
    console.log("payment method change: " + event.target.id);
    this.setState({
      type:event.target.id
    })
  }

  onRoutingChange(event) {
    this.setState({
      routingNumber:event.target.value
    })
  }

  onAccountChange(event) {
    this.setState({
      accountNumber:event.target.value
    })
  }

  onCommentsChange(event) {
    this.setState({
      comments: event.target.value
    })
  }

  onImpactChange(event) {
    this.setState({
      increaseImpact: event.target.checked
    })
  }

  onImpactChangeBank(event) {
    this.setState({
      increaseImpactBank: event.target.checked
    })
  }

  render() {
    var name = getParameterByName("name");
    if (this.state.donationFail) return (
      <div>
        <h2 className="donation-header">We{"'"}re sorry but there was a problem processing your donation and your account was not charged. Feel free to try again by going <a href="http://www.nationalschoolproject.com/give">here</a> or calling us at  562-943-9787</h2>
      </div>
    )
    else if (initialized) return (
        <div>
          <div className={`form-modal-container ${!this.state.modalShowing ? "hidden" : ""}`}>
            <div className="form-modal">
              <h1 className="form-modal-title">Are you sure?</h1>
              <button className="sites-button" onClick={() => {this.confirmModal(); this.hideModal()}}>Yes</button>
              <button className="sites-button" onClick={() => {this.hideModal();}} className="negative">No</button>
            </div>
          </div>

          {
            name == "" || name == null ?
                <h1 className="donation-header">Donate to the National School Project</h1>
              :
                <h1 className="donation-header">Support <span className="undl">{name}</span></h1>
          }

          <div className = "form">

            {
              this.state.page == 0 ?
                <div>
                  <div className="form-section">
                    <h2>Donation</h2>
                    <label className={`required ${this.state.invalidAmount ? "required-error" : ""}`} htmlFor="amount">Amount (USD)</label>
                    <input type="number" id="amount" placeholder="e.g. 10.00" value={this.state.amount != null ? this.state.amount : null} onChange={this.onAmountChange.bind(this)}/>
                    <div className="section radio-container">
                      <input type="checkbox" id="recurring" defaultChecked={this.state.recurring} onChange={this.onRecurringChange.bind(this)}/>
                      <label htmlFor="recurring">Make this a recurring donation</label>
                      <br/>

                      {this.state.recurring ?
                          <div id="recurring-div">
                            <label htmlFor="frequency">Frequency</label>
                            <select value={this.state.frequency} className="donation-select" id="frequency" onChange={this.onFrequencyChange.bind(this)}>
                              <option value="Weekly">Weekly</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Quarterly">Quarterly</option>
                              <option value="Yearly">Yearly</option>
                            </select>
                            <label className={`required ${this.state.invalidDate ? "required-error" : ""}`} htmlFor="start-date">Start Date</label>
                            <input type="date" id="datepicker" value={this.state.startDate} onChange={this.onStartDateChange.bind(this)}/>
                          </div>
                        :
                          ""
                      }
                    </div>
                    <br/>
                  </div>
                  <button className="sites-button" id="next" onClick={this.nextPage.bind(this)}>Next</button>
                </div>
              : this.state.page == 1 ?
                <div>
                  <div className="form-section">
                    <h2>Contact Information</h2>
                    <label className={`required ${this.state.invalidFirstName ? "required-error" : ""}`} htmlFor="first-name">First Name</label>
                    <input type="text" value={this.state.firstName} id="first-name" placeholder="e.g. Simeon" onChange={this.onFirstNameChange.bind(this)}/>

                    <label className={`required ${this.state.invalidLastName ? "required-error" : ""}`} htmlFor="last-name">Last Name</label>
                    <input value={this.state.lastName} type="text" id="last-name" placeholder="e.g. Peter" onChange={this.onLastNameChange.bind(this)}/>

                    <label className={`required ${this.state.invalidEmail ? "required-error" : ""}`} htmlFor="email">Email</label>
                    <input value={this.state.email} type="text" id="email" placeholder="e.g. you@site.com" onChange={this.onEmailChange.bind(this)}/>

                    <label className={`required ${this.state.invalidPhone ? "required-error" : ""}`} htmlFor="phone">Phone</label>
                    <input value={this.state.phone} type="text" id="phone" placeholder="e.g. (123) 456-7890" onChange={this.onPhoneChange.bind(this)}/>
                  </div>

                  <button className="sites-button" onClick={this.previousPage.bind(this)}>Back</button>
                  <button className="sites-button" onClick={this.nextPage.bind(this)}>Next</button>

                </div>
              : this.state.page == 2 ?
                <div>
                  <div className="form-section">
                    <h2>Billing Address</h2>
                    <label htmlFor="country">Country</label>
                    <CountryCodes id="country" value={this.state.country} onChange={this.onCountryChange.bind(this)}/>

                    <label className={`required ${this.state.invalidAddress ? "required-error" : ""}`} htmlFor="address">Address</label>
                    <textarea value={this.state.address} placeholder="e.g. 777 Demascus Rd." onChange={this.onAddressChange.bind(this)}></textarea>

                    {
                      this.state.country == "CA" || this.state.country == "US" ?
                        <div>
                          <label className={`required ${this.state.invalidCity ? "required-error" : ""}`} htmlFor="city">City</label>
                          <input value={this.state.city} type="text" id="city" placeholder="e.g. Los Angeles" onChange={this.onCityChange.bind(this)}/>

                          <label htmlFor="state">{this.state.country == "CA" ? <span>Province</span> : <span>State</span>}</label>
                          <StateCodes country={this.state.country} value={this.state.state} id="state" onChange={this.onStateChange.bind(this)}/>

                          <label className={`required ${this.state.invalidZip ? "required-error" : ""}`} htmlFor="zip">{this.state.country == "CA" ? <span>Postal Code</span> : <span>Zip Code</span>}</label>
                          <input value={this.state.zip} type="number" id="zip" placeholder="e.g. 90210" onChange={this.onZipChange.bind(this)}/>
                        </div>
                      :
                        ""
                    }
                  </div>

                  <button className="sites-button" onClick={this.previousPage.bind(this)}>Back</button>
                  <button className="sites-button" onClick={this.nextPage.bind(this)}>Next</button>
                </div>
              :
                <div>

                  <div className="form-section">
                    <h2>Payment Method</h2>

                    <div className="section radio-container">
                      <input type="radio" name="payment" id="credit" defaultChecked={this.state.type=="credit"} onChange={this.onRadioChange.bind(this)}/>
                      <label htmlFor="credit">Credit</label>

                      <input type="radio" name="payment" id="checking" defaultChecked={this.state.type=="checking"} onChange={this.onRadioChange.bind(this)}/>
                      <label htmlFor="checking">Checking</label>

                      <input type="radio" name="payment" id="savings" defaultChecked={this.state.type=="savings"} onChange={this.onRadioChange.bind(this)}/>
                      <label htmlFor="savings">Savings</label>
                    </div>

                    {
                      this.state.type !="credit" ?
                        <div id = "bank-info">
                          <label htmlFor="routing">Routing Number</label>
                          <input value={this.state.routingNumber} type="text" id="routing" placeholder="e.g. 123456789" onChange={this.onRoutingChange.bind(this)}/>

                          <label htmlFor="account">Account Number</label>
                          <input value={this.state.accountNumber} type="text" id="account" placeholder="e.g. 456789123456" onChange={this.onAccountChange.bind(this)}/>

                          <input type="checkbox" id="increase-impact" defaultChecked={this.state.increaseImpactBank} onChange={this.onImpactChangeBank.bind(this)}/>
                          <label htmlFor="increase-impact">Offset bank fees by adding {"$"}0.20 to my donation</label>
                        </div>
                      :
                        <div>
                          <p>Note: A small portion of donations submitted through credit cards go to paying processing fees</p>

                          <input type="checkbox" id="increase-impact" defaultChecked={this.state.increaseImpact} onChange={this.onImpactChange.bind(this)}/>
                          <label htmlFor="increase-impact">Offset these fees by adding {accounting.formatMoney(calcImpact(parseInt(this.state.amount)))} to my donation</label>
                        </div>
                    }
                  </div>

                  <div className="form-section">
                    <h2>Comments and Prayer Requests</h2>
                    <textarea value={this.state.comments} onChange={this.onCommentsChange.bind(this)}></textarea>
                  </div>

                  <div className="form-section">
                    <label className={`required ${this.state.invalidCaptcha ? "required-error" : "required-hidden"}`}>Please fill out the ReCAPTCHA</label>
                    <ReCAPTCHA
                      id="captcha-conatiner"
                      className="captcha-div"
                      ref="recaptcha"
                      sitekey="6LdZNTYUAAAAAM6j_lU3lRi9Dco561ldipwsOTtI"
                      onChange={(value) => {
                          console.log("Captcha has changed to " + value);
                          Bloomerang.captchaResponse(value);
                          this.setState({
                            captcha:value!=null || value!=undefined || value!=""
                          })
                      }}
                    />
                  </div>

                  <button className="sites-button" onClick={this.previousPage.bind(this)}>Back</button>
                  <button className="sites-button" id="donate-button" onClick={
                    this.state.type=='credit'
                      ? () => submit(this.state,this.invalidCallback.bind(this), () => this.onDonationSuccess(), () => this.onDonationFail(error))
                      : () => this.showModal()
                  }>
                    {
                      this.state.type=="credit"
                        ? "Enter Payment Info"
                        : `Donate ${
                            this.state.increaseImpact
                              ? accounting.formatMoney(parseInt(this.state.amount))
                              : accounting.formatMoney(this.state.amount)
                          }${
                            this.state.recurring
                              ? ` per ${this.state.frequency.substring(0,this.state.frequency.length-2)}`
                              : ""
                          }`
                    }
                  </button>
                </div>
            }
          </div>

          <div>
            <div className="inline-block info-box container-child">
              <p>Questions?</p>
              <p>Contact us at <a href="mailto:kenny@nationalschoolproject.com">kenny@nationalschoolproject.com</a></p>
              <p>
                National School Project<br/>
                16175 Whittier Blvd.<br/>
                Whittier, CA 90603<br/>
              </p>
            </div>

            <div className="inline-block">
              <img src="https://crm.bloomerang.co/Content/Images/SecureDonationBanner.png"/>
            </div>
          </div>
        </div>
      )
    else if (getParameterByName("dID") != null)
      return (<div>
        <h1 className="donation-header">We{"'"}re sorry, there was a problem loading the page! You can use <a href={"https://crm.bloomerang.co/HostedDonation?ApiKey=pub_eaf5f8aa-fc8f-11e3-a756-02a718d18e56&WidgetId=" + getParameterByName("dID")}>this page</a> to show your support!</h1>
      </div>)
    else
      return (<div>
        <h1 className="donation-header">It looks like you{"'"}ve got a bad url there! We{"'"}re sorry about that! Find a better one <a href="http://www.nationalschoolproject.com/give">here</a>!</h1>
      </div>)
  }
}
