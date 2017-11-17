var insertForm13206528 = function() {
    var html13206528 = '<style text=\'text/css\'>' +
'.donation-form label{color: #404040;' +
'                display: block;}' +
'' +
'.donation-form label.error{color:#900;' +
'                display: inline-block; ' +
'                padding: 0 10px;}' +
'' +
'.donation-form section{padding: 5px;}' +
'' +
'.donation-form .field{padding: 4px 0;}' +
'' +
'.donation-form .field .required-star{color: #aa0000; ' +
'                display: inline-block; ' +
'                margin-left: 5px;}' +
'' +
'.donation-form .field .checkboxes{max-width:275px;' +
'                border: 1px solid #A9A9A9;' +
'                -webkit-transition: all .3s ease-out;' +
'                -moz-transition: all .3s ease-out;' +
'                transition: all .3s ease-out;}' +
'' +
'.donation-form .field .checkbox{display:block;' +
'                position:relative;' +
'                -moz-box-sizing:border-box;' +
'                box-sizing:border-box;' +
'                height:30px;' +
'                line-height:26px;' +
'                padding:2px 28px 2px 8px;' +
'                border-bottom:1px solid rgba(0,0,0,0.1);' +
'                color:#404040;  ' +
'                overflow:hidden;' +
'                text-decoration:none; }' +
'' +
'.donation-form .field .checkbox input{opacity:0.01;' +
'                position:absolute;' +
'                left:-50px;  ' +
'                z-index:-5;}' +
'' +
'.donation-form .field .checkbox:last-child{border-bottom:none;}' +
'' +
'.donation-form .field .checkbox.selected{background: rgb(50, 142, 253);' +
'                color:#fff; }' +
'' +
'.donation-form .field .checkbox.selected:before{color:#fff;' +
'                text-shadow:1px 2px 1px rgba(0,0,0,0.25);' +
'                line-height:30px;' +
'                position:absolute;' +
'                right:10px; }' +
'' +
'.donation-form .field input,' +
'                     .donation-form .field select,' +
'                     .donation-form .field textarea{padding: 4px; ' +
'                max-width: 275px;' +
'                width: 96%}' +
'' +
'.donation-form .field textarea.international{height: 120px;}' +
'' +
'.donation-form .field select{box-sizing: content-box;}' +
'' +
'.donation-form .section.recurring{padding-left: 30px}' +
'' +
'.donation-form .field.radio label,' +
'                     .donation-form .field.checkbox label{display: inline-block;}' +
'' +
'.donation-form .field.radio input,' +
'                     .donation-form .field.checkbox input{width: auto;' +
'                margin-left:0;}' +
'' +
'.donation-form #cardExpirationMonth,' +
'                     .donation-form #cardExpirationYear{width: 85px;}' +
'' +
'.donation-form #security-code{width: 55px;}' +
'' +
'.donation-form .field .sidenote{color: #999;' +
'                font-size: 10px; }' +
'' +
'.donation-form .field.other-option,' +
'                     .donation-form .field.other-amount,' +
'                     .donation-form .field.cardExpirationMonth,' +
'                     .donation-form .field.cardExpirationYear{display: inline-block;}' +
'' +
'.donation-form .field.other-amount{padding-left: 6px;}' +
'' +
'.donation-form .field.cardExpirationMonth{padding-right: 20px;}' +
'' +
'.donation-form #other-amount{width: 65px;}' +
'' +
'.donation-form #frequency{width: 85px;}' +
'' +
'.donation-form #start-date{width: 150px;}' +
'' +
'.donation-form .errors{border: 1px solid #900;' +
'                color: #900;  ' +
'                padding: 10px;}' +
'' +
'.donation-form .radio label.error{display: inline-block;' +
'                padding-right: 86%;  ' +
'                float: right;}' +
'' +
'.donation-form .hidden{display: none;}' +
'' +
'.btn-group .btn-submit-donation{padding: 4px 10px;}' +
'' +
'iframe#spreedly-iframe[style=\'visibility: hidden;\']{display: none;}' +
'' +
'input, select, textarea, button{font-family: inherit;}' +
'' +
'#spreedly-modal-overlay[style="visibility:hidden"]{display: none;}' +
'' +
'</style>' +
'' +
'<div id="donation-form-container">' +
'  <form id="donation-form" class="donation-form" method="post" onsubmit="event.preventDefault(); collectPayment();">' +
'    <div class="errors hidden"></div>' +
'    <div class="section donation">' +
'      <h3>Donation</h3>' +
'      <div class="field tel donation-amount required" >' +
'<label for="donation-amount"><span class="label">Amount</span><span class="required-star">*</span></label>' +
'<input id="donation-amount" name="donation-amount" class="currency minimum1 required" type="tel" placeholder="$0.00"></input>' +
'</div>' +
'' +
'</div>' +
'    <div class="section recurring">' +
'      <div class="field checkbox recurring" >' +
'<label for="recurring"><input id="recurring" name="recurring" type="checkbox" maxlength="255"></input><span class="label">Show my support by making this a recurring donation</span></label>' +
'</div>' +
'<div class="field  frequency required" style="display: none">' +
'<label for="frequency">Frequency<span class="required-star">*</span></label>' +
'<select id="frequency" name="frequency" class="required"><option value=""></option>' +
'<option value="Weekly">Weekly</option>' +
'<option value="Monthly" selected>Monthly</option>' +
'<option value="Quarterly">Quarterly</option>' +
'<option value="Yearly">Yearly</option>' +
'</select>' +
'</div>' +
'<div class="field date start-date required" style="display: none">' +
'<label for="start-date"><span class="label">Start Date</span><span class="required-star">*</span></label>' +
'<input id="start-date" name="start-date" class="validDate required" type="date" placeholder="mm/dd/yyyy"></input>' +
'</div>' +
'' +
'</div>' +
'    ' +
'    <div class="section contact">' +
'      <h3>Contact Information</h3>' +
'      <div class="field text first-name required" >' +
'<label for="first-name"><span class="label">First Name</span><span class="required-star">*</span></label>' +
'<input id="first-name" name="first-name" class="required" type="text"></input>' +
'</div>' +
'<div class="field text last-name required" >' +
'<label for="last-name"><span class="label">Last Name</span><span class="required-star">*</span></label>' +
'<input id="last-name" name="last-name" class="required" type="text"></input>' +
'</div>' +
'<div class="field email email-address required" >' +
'<label for="email-address"><span class="label">Email</span><span class="required-star">*</span></label>' +
'<input id="email-address" name="email-address" class="email required" type="email" placeholder="someone@website.com"></input>' +
'</div>' +
'<div class="field tel phone-number" >' +
'<label for="phone-number"><span class="label">Phone</span></label>' +
'<input id="phone-number" name="phone-number" class="phoneUS" type="tel"></input>' +
'</div>' +
'' +
'</div>' +
'    <div class="section billing-address">' +
'      <h3>Billing Address</h3>' +
'      <div class="field  country required" >' +
'<label for="country">Country<span class="required-star">*</span></label>' +
'<select id="country" name="country" class="required"><option value=""></option>' +
'<option value="AF">Afghanistan</option>' +
'<option value="AX">Aland Islands</option>' +
'<option value="AL">Albania</option>' +
'<option value="DZ">Algeria</option>' +
'<option value="AS">American Samoa</option>' +
'<option value="AD">Andorra</option>' +
'<option value="AO">Angola</option>' +
'<option value="AI">Anguilla</option>' +
'<option value="AQ">Antarctica</option>' +
'<option value="AG">Antigua and Barbuda</option>' +
'<option value="AR">Argentina</option>' +
'<option value="AM">Armenia</option>' +
'<option value="AW">Aruba</option>' +
'<option value="AU">Australia</option>' +
'<option value="AT">Austria</option>' +
'<option value="AZ">Azerbaijan</option>' +
'<option value="BS">Bahamas</option>' +
'<option value="BH">Bahrain</option>' +
'<option value="BD">Bangladesh</option>' +
'<option value="BB">Barbados</option>' +
'<option value="BY">Belarus</option>' +
'<option value="BE">Belgium</option>' +
'<option value="BZ">Belize</option>' +
'<option value="BJ">Benin</option>' +
'<option value="BM">Bermuda</option>' +
'<option value="BT">Bhutan</option>' +
'<option value="BO">Bolivia</option>' +
'<option value="BA">Bosnia and Herzegovina</option>' +
'<option value="BW">Botswana</option>' +
'<option value="BV">Bouvet Island</option>' +
'<option value="BR">Brazil</option>' +
'<option value="IO">British Indian Ocean Territory</option>' +
'<option value="BN">Brunei Darussalam</option>' +
'<option value="BG">Bulgaria</option>' +
'<option value="BF">Burkina Faso</option>' +
'<option value="BI">Burundi</option>' +
'<option value="KH">Cambodia</option>' +
'<option value="CM">Cameroon</option>' +
'<option value="CA">Canada</option>' +
'<option value="CV">Cape Verde</option>' +
'<option value="KY">Cayman Islands</option>' +
'<option value="CF">Central African Republic</option>' +
'<option value="TD">Chad</option>' +
'<option value="CL">Chile</option>' +
'<option value="CN">China</option>' +
'<option value="CX">Christmas Island</option>' +
'<option value="CC">Cocos (Keeling) Islands</option>' +
'<option value="CO">Colombia</option>' +
'<option value="KM">Comoros</option>' +
'<option value="CG">Congo</option>' +
'<option value="CD">Democratic Republic of the Congo</option>' +
'<option value="CK">Cook Islands</option>' +
'<option value="CR">Costa Rica</option>' +
'<option value="CI">Cote d\'Ivoire</option>' +
'<option value="HR">Croatia</option>' +
'<option value="CU">Cuba</option>' +
'<option value="CW">Curacao</option>' +
'<option value="CY">Cyprus</option>' +
'<option value="CZ">Czech Republic</option>' +
'<option value="DK">Denmark</option>' +
'<option value="DJ">Djibouti</option>' +
'<option value="DM">Dominica</option>' +
'<option value="DO">Dominican Republic</option>' +
'<option value="EC">Ecuador</option>' +
'<option value="EG">Egypt</option>' +
'<option value="SV">El Salvador</option>' +
'<option value="GQ">Equatorial Guinea</option>' +
'<option value="ER">Eritrea</option>' +
'<option value="EE">Estonia</option>' +
'<option value="ET">Ethiopia</option>' +
'<option value="FK">Falkland Islands (Malvinas)</option>' +
'<option value="FO">Faroe Islands</option>' +
'<option value="FJ">Fiji</option>' +
'<option value="FI">Finland</option>' +
'<option value="FR">France</option>' +
'<option value="GF">French Guiana</option>' +
'<option value="PF">French Polynesia</option>' +
'<option value="TF">French Southern Territories</option>' +
'<option value="GA">Gabon</option>' +
'<option value="GM">Gambia</option>' +
'<option value="GE">Georgia</option>' +
'<option value="DE">Germany</option>' +
'<option value="GH">Ghana</option>' +
'<option value="GI">Gibraltar</option>' +
'<option value="GR">Greece</option>' +
'<option value="GL">Greenland</option>' +
'<option value="GD">Grenada</option>' +
'<option value="GP">Guadeloupe</option>' +
'<option value="GU">Guam</option>' +
'<option value="GT">Guatemala</option>' +
'<option value="GG">Guernsey</option>' +
'<option value="GN">Guinea</option>' +
'<option value="GW">Guinea-Bissau</option>' +
'<option value="GY">Guyana</option>' +
'<option value="HT">Haiti</option>' +
'<option value="HM">Heard Island</option>' +
'<option value="HN">Honduras</option>' +
'<option value="HK">Hong Kong</option>' +
'<option value="HU">Hungary</option>' +
'<option value="IS">Iceland</option>' +
'<option value="IN">India</option>' +
'<option value="ID">Indonesia</option>' +
'<option value="IR">Islamic Republic of Iran</option>' +
'<option value="IQ">Iraq</option>' +
'<option value="IE">Ireland</option>' +
'<option value="IM">Isle of Man</option>' +
'<option value="IL">Israel</option>' +
'<option value="IT">Italy</option>' +
'<option value="JM">Jamaica</option>' +
'<option value="JP">Japan</option>' +
'<option value="JE">Jersey</option>' +
'<option value="JO">Jordan</option>' +
'<option value="KZ">Kazakhstan</option>' +
'<option value="KE">Kenya</option>' +
'<option value="KI">Kiribati</option>' +
'<option value="KP">Democratic People\'s Republic of Korea</option>' +
'<option value="KR">Republic of Korea</option>' +
'<option value="KW">Kuwait</option>' +
'<option value="KG">Kyrgyzstan</option>' +
'<option value="LA">Lao People\'s Democratic Republic</option>' +
'<option value="LV">Latvia</option>' +
'<option value="LB">Lebanon</option>' +
'<option value="LS">Lesotho</option>' +
'<option value="LR">Liberia</option>' +
'<option value="LY">Libya</option>' +
'<option value="LI">Liechtenstein</option>' +
'<option value="LT">Lithuania</option>' +
'<option value="LU">Luxembourg</option>' +
'<option value="MO">Macao</option>' +
'<option value="MK">Macedonia</option>' +
'<option value="MG">Madagascar</option>' +
'<option value="MW">Malawi</option>' +
'<option value="MY">Malaysia</option>' +
'<option value="MV">Maldives</option>' +
'<option value="ML">Mali</option>' +
'<option value="MT">Malta</option>' +
'<option value="MH">Marshall Islands</option>' +
'<option value="MQ">Martinique</option>' +
'<option value="MR">Mauritania</option>' +
'<option value="MU">Mauritius</option>' +
'<option value="YT">Mayotte</option>' +
'<option value="MX">Mexico</option>' +
'<option value="FM">Federated States of Micronesia</option>' +
'<option value="MD">Republic of Moldova</option>' +
'<option value="MC">Monaco</option>' +
'<option value="MN">Mongolia</option>' +
'<option value="ME">Montenegro</option>' +
'<option value="MS">Montserrat</option>' +
'<option value="MA">Morocco</option>' +
'<option value="MZ">Mozambique</option>' +
'<option value="MM">Myanmar</option>' +
'<option value="NA">Namibia</option>' +
'<option value="NR">Nauru</option>' +
'<option value="NP">Nepal</option>' +
'<option value="NL">Netherlands</option>' +
'<option value="NC">New Caledonia</option>' +
'<option value="NZ">New Zealand</option>' +
'<option value="NI">Nicaragua</option>' +
'<option value="NE">Niger</option>' +
'<option value="NG">Nigeria</option>' +
'<option value="NU">Niue</option>' +
'<option value="NF">Norfolk Island</option>' +
'<option value="MP">Northern Mariana Islands</option>' +
'<option value="NO">Norway</option>' +
'<option value="OM">Oman</option>' +
'<option value="PK">Pakistan</option>' +
'<option value="PW">Palau</option>' +
'<option value="PS">State of Palestine</option>' +
'<option value="PA">Panama</option>' +
'<option value="PG">Papua New Guinea</option>' +
'<option value="PY">Paraguay</option>' +
'<option value="PE">Peru</option>' +
'<option value="PH">Philippines</option>' +
'<option value="PN">Pitcairn</option>' +
'<option value="PL">Poland</option>' +
'<option value="PT">Portugal</option>' +
'<option value="PR">Puerto Rico</option>' +
'<option value="QA">Qatar</option>' +
'<option value="RE">Reunion</option>' +
'<option value="RO">Romania</option>' +
'<option value="RU">Russian Federation</option>' +
'<option value="RW">Rwanda</option>' +
'<option value="BL">Saint Barthelemy</option>' +
'<option value="SH">Ascension and Tristan da Cunha Saint Helena</option>' +
'<option value="KN">Saint Kitts and Nevis</option>' +
'<option value="LC">Saint Lucia</option>' +
'<option value="MF">Saint Martin (French part)</option>' +
'<option value="PM">Saint Pierre and Miquelon</option>' +
'<option value="VC">Saint Vincent and the Grenadines</option>' +
'<option value="WS">Samoa</option>' +
'<option value="SM">San Marino</option>' +
'<option value="ST">Sao Tome and Principe</option>' +
'<option value="SA">Saudi Arabia</option>' +
'<option value="SN">Senegal</option>' +
'<option value="RS">Serbia</option>' +
'<option value="SC">Seychelles</option>' +
'<option value="SL">Sierra Leone</option>' +
'<option value="SG">Singapore</option>' +
'<option value="SX">Sint Maarten (Dutch part)</option>' +
'<option value="SK">Slovakia</option>' +
'<option value="SI">Slovenia</option>' +
'<option value="SB">Solomon Islands</option>' +
'<option value="SO">Somalia</option>' +
'<option value="ZA">South Africa</option>' +
'<option value="GS">South Georgia</option>' +
'<option value="SS">South Sudan</option>' +
'<option value="ES">Spain</option>' +
'<option value="LK">Sri Lanka</option>' +
'<option value="SD">Sudan</option>' +
'<option value="SR">Suriname</option>' +
'<option value="SJ">Svalbard and Jan Mayen</option>' +
'<option value="SZ">Swaziland</option>' +
'<option value="SE">Sweden</option>' +
'<option value="CH">Switzerland</option>' +
'<option value="SY">Syrian Arab Republic</option>' +
'<option value="TW">Taiwan</option>' +
'<option value="TJ">Tajikistan</option>' +
'<option value="TZ">United Republic of Tanzania</option>' +
'<option value="TH">Thailand</option>' +
'<option value="TL">Timor-Leste</option>' +
'<option value="TG">Togo</option>' +
'<option value="TK">Tokelau</option>' +
'<option value="TO">Tonga</option>' +
'<option value="TT">Trinidad and Tobago</option>' +
'<option value="TN">Tunisia</option>' +
'<option value="TR">Turkey</option>' +
'<option value="TM">Turkmenistan</option>' +
'<option value="TC">Turks and Caicos Islands</option>' +
'<option value="TV">Tuvalu</option>' +
'<option value="UG">Uganda</option>' +
'<option value="UA">Ukraine</option>' +
'<option value="AE">United Arab Emirates</option>' +
'<option value="GB">United Kingdom</option>' +
'<option value="US" selected>United States</option>' +
'<option value="UM">United States Minor Outlying Islands</option>' +
'<option value="UY">Uruguay</option>' +
'<option value="UZ">Uzbekistan</option>' +
'<option value="VU">Vanuatu</option>' +
'<option value="VA">Vatican City</option>' +
'<option value="VE">Venezuela</option>' +
'<option value="VN">Viet Nam</option>' +
'<option value="VG">British Virgin Islands</option>' +
'<option value="VI">U.S. Virgin Islands</option>' +
'<option value="WF">Wallis and Futuna</option>' +
'<option value="EH">Western Sahara</option>' +
'<option value="YE">Yemen</option>' +
'<option value="ZM">Zambia</option>' +
'<option value="ZW">Zimbabwe</option>' +
'</select>' +
'</div>' +
'<div class="field  street-address required" >' +
'<label for="street-address"><span class="label">Address</span><span class="required-star">*</span></label>' +
'<textarea id="street-address" name="street-address" class="required"></textarea>' +
'</div>' +
'<div class="field text city required" >' +
'<label for="city"><span class="label">City</span><span class="required-star">*</span></label>' +
'<input id="city" name="city" class="required" type="text" data-us-label="City" data-bm-label="Parish"></input>' +
'</div>' +
'<div class="field  state required" >' +
'<label for="state">State<span class="required-star">*</span></label>' +
'<select id="state" name="state" class="required"><option value=""></option>' +
'<option value="AL">Alabama</option>' +
'<option value="AK">Alaska</option>' +
'<option value="AS">American Samoa</option>' +
'<option value="AZ">Arizona</option>' +
'<option value="AR">Arkansas</option>' +
'<option value="AE">Armed Forces Africa, Canada, Europe, Middle East</option>' +
'<option value="AA">Armed Forces Americas (except Canada)</option>' +
'<option value="AP">Armed Forces Pacific</option>' +
'<option value="CA">California</option>' +
'<option value="CO">Colorado</option>' +
'<option value="CT">Connecticut</option>' +
'<option value="DE">Delaware</option>' +
'<option value="DC">District of Columbia</option>' +
'<option value="FL">Florida</option>' +
'<option value="GA">Georgia</option>' +
'<option value="GU">Guam</option>' +
'<option value="HI">Hawaii</option>' +
'<option value="ID">Idaho</option>' +
'<option value="IL">Illinois</option>' +
'<option value="IN">Indiana</option>' +
'<option value="IA">Iowa</option>' +
'<option value="KS">Kansas</option>' +
'<option value="KY">Kentucky</option>' +
'<option value="LA">Louisiana</option>' +
'<option value="ME">Maine</option>' +
'<option value="MD">Maryland</option>' +
'<option value="MA">Massachusetts</option>' +
'<option value="MI">Michigan</option>' +
'<option value="MN">Minnesota</option>' +
'<option value="MS">Mississippi</option>' +
'<option value="MO">Missouri</option>' +
'<option value="MT">Montana</option>' +
'<option value="NE">Nebraska</option>' +
'<option value="NV">Nevada</option>' +
'<option value="NH">New Hampshire</option>' +
'<option value="NJ">New Jersey</option>' +
'<option value="NM">New Mexico</option>' +
'<option value="NY">New York</option>' +
'<option value="NC">North Carolina</option>' +
'<option value="ND">North Dakota</option>' +
'<option value="OH">Ohio</option>' +
'<option value="OK">Oklahoma</option>' +
'<option value="OR">Oregon</option>' +
'<option value="PA">Pennsylvania</option>' +
'<option value="PR">Puerto Rico</option>' +
'<option value="RI">Rhode Island</option>' +
'<option value="SC">South Carolina</option>' +
'<option value="SD">South Dakota</option>' +
'<option value="TN">Tennessee</option>' +
'<option value="TX">Texas</option>' +
'<option value="VI">US Virgin Islands</option>' +
'<option value="UT">Utah</option>' +
'<option value="VT">Vermont</option>' +
'<option value="VA">Virginia</option>' +
'<option value="WA">Washington</option>' +
'<option value="WV">West Virginia</option>' +
'<option value="WI">Wisconsin</option>' +
'<option value="WY">Wyoming</option>' +
'</select>' +
'</div>' +
'<div class="field  province required" style="display: none">' +
'<label for="province">Province<span class="required-star">*</span></label>' +
'<select id="province" name="province" class="required"><option value=""></option>' +
'<option value="AB">Alberta</option>' +
'<option value="BC">British Columbia</option>' +
'<option value="MB">Manitoba</option>' +
'<option value="NB">New Brunswick</option>' +
'<option value="NL">Newfoundland and Labrador</option>' +
'<option value="NT">Northwest Territories</option>' +
'<option value="NS">Nova Scotia</option>' +
'<option value="NU">Nunavut</option>' +
'<option value="ON">Ontario</option>' +
'<option value="PE">Prince Edward Island</option>' +
'<option value="QC">Quebec</option>' +
'<option value="SK">Saskatchewan</option>' +
'<option value="YT">Yukon Territory</option>' +
'</select>' +
'</div>' +
'<div class="field number zip-code required" >' +
'<label for="zip-code"><span class="label">ZIP Code</span><span class="required-star">*</span></label>' +
'<input id="zip-code" name="zip-code" class="zipcodeUS required" type="number" step="any" maxlength="10"></input>' +
'</div>' +
'<div class="field text postal-code required" style="display: none">' +
'<label for="postal-code"><span class="label">Postal Code</span><span class="required-star">*</span></label>' +
'<input id="postal-code" name="postal-code" class="required" type="text"></input>' +
'</div>' +
'' +
'</div>' +
'    <div class="section payment">' +
'      <h3>Payment Information</h3>' +
'      <div class="field radio Savings required" >' +
'<label for="Savings"><input id="Savings" name="payment-type" class="required" type="radio" maxlength="255"></input><span class="label">Savings</span></label>' +
'</div>' +
'<div class="field radio Checking required" >' +
'<label for="Checking"><input id="Checking" name="payment-type" class="required" type="radio" maxlength="255"></input><span class="label">Checking</span></label>' +
'</div>' +
'<div class="field radio CreditCard required" >' +
'<label for="CreditCard"><input id="CreditCard" name="payment-type" class="required" type="radio" maxlength="255"></input><span class="label">Credit Card</span></label>' +
'</div>' +
'<div class="field tel routingNumber required" style="display: none">' +
'<label for="routingNumber"><span class="label">Routing Number</span><span class="required-star">*</span></label>' +
'<input id="routingNumber" name="routing-number" class="required" type="tel" maxlength="255"></input>' +
'</div>' +
'<div class="field tel accountNumber required" style="display: none">' +
'<label for="accountNumber"><span class="label">Account Number</span><span class="required-star">*</span></label>' +
'<input id="accountNumber" name="account-number" class="required" type="tel" maxlength="255"></input>' +
'</div>' +
'' +
'</div>' +
'    ' +
'    <div class="section comment">' +
'      <div class="field text comment" >' +
'<label for="comment"><span class="label">Comments</span></label>' +
'<textarea id="comment" name="comment" type="text" value="Comments"></textarea>' +
'</div>' +
'' +
'</div>' +
'    <div class="section true-impact">' +
'      <h3>Increase My Impact</h3>' +
'      <div class="field checkbox true-impact" >' +
'<label for="true-impact"><input id="true-impact" name="true-impact" type="checkbox" maxlength="255"></input><span class="label">Yes! Add [amount] to help offset bank fees</span></label>' +
'</div>' +
'' +
'</div>' +
'    <div class="section captcha">' +
'      <label id=\'noCaptchaResponseError\' class=\'error noCaptchaResponseError\' style=\'display: none\'>You must fill out the CAPTCHA</label><div id="captcha13206528"></div>' +
'' +
'</div>' +
'    <div class="btn-group">' +
'      <input class="btn btn-submit btn-submit-donation" type="submit" value="Enter Payment" id="express-submit" disabled="true" />' +
'    </div>' +
'  </form>' +
'</div>' +
'<div id="donation-processing-container" style="display: none">' +
'  <h2>Processing...</h2><p>Your transaction is being processed. Please do not close your browser or leave this page.</p>' +
'</div>' +
'' +
'' +  '';
var successHtml13206528 = '\u003cscript\u003ewindow.location.replace(\'http://nationalschoolproject.com/hidden/thanks\')\u003c/script\u003e';( function($) {if (Bloomerang.useDonationId('13206528')) {
                                Bloomerang.useProcessor('116736', 'BluePay', '100183179437', false, '46CED60BAB24A54120C67A1BB10C95D3', true);
                            } else {
                                html13206528 = '<p style="color: red">???Widget.Error.Multiple???</p>';
                            }if (jQuery('#bloomerangForm13206528').length) {

                if (window.ActiveXObject) { // they are using IE < 11, which doesn't support TLS 1.1
                    html13206528 = '<p style="color: red">​Your browser does not support the minimum security requirements for keeping your Credit Card information safe when processing payments. Please upgrade ​your browser or download the latest version of' +
                    ' <a target=\'_blank\' href=\'https://www.google.com/chrome/browser/desktop/\'>Chrome</a> or <a target=\'_blank\' href=\'https://www.mozilla.org/en-US/firefox/new/\'>Firefox</a>.</p>';
                }
                    jQuery('#bloomerangForm13206528').after(html13206528);
                     if (!Bloomerang.SpreedlyScriptLoaded) {
                                        Bloomerang.Util.load('https://core.spreedly.com/iframe/express-2.min.js',
                                            function() { return SpreedlyExpress != undefined; },
                                            function() {
                                                SpreedlyExpress.onInit(function() { jQuery('#express-submit').attr('disabled', false); });
                                                Bloomerang.initSpreedly = function() {
                                                    SpreedlyExpress.init('OqOMv1ksjPtXEYHtCYsVXzEpCbR', { 'company_name': 'National School Project' });
                                                };
                                                Bloomerang.initSpreedly();
                                            });
                                    }
                                    Bloomerang.SpreedlyScriptLoaded = true;
                };
                if (Bloomerang.paymentFormLoaded) {
                                        return false;
                                    }
                                    Bloomerang.paymentFormLoaded = true;
                   window.captchaLoadCallback = function() {
                        Bloomerang.gRecaptchaLoaded = true;
                    };
                    Bloomerang.Util.load('https://www.google.com/recaptcha/api.js?onload=captchaLoadCallback&render=explicit',
                        function() { return Bloomerang.gRecaptchaLoaded; },
                        function() {
                            jQuery('.section.captcha').removeAttr('style');
                            jQuery('form.donation-form').data('captcha-id', grecaptcha.render('captcha13206528', { 'sitekey' : '6LdZNTYUAAAAAM6j_lU3lRi9Dco561ldipwsOTtI' }));
                        },
                        true,
                        true);
                Bloomerang.transactionFee = 0.2; Bloomerang.transactionFeeRate = 0.025;
                Bloomerang.useKey('pub_eaf5f8aa-fc8f-11e3-a756-02a718d18e56');

    Bloomerang.Util.getDonationAmount = function() {
      return Number(accounting.unformat(jQuery(".donation-form .section.donation input[name='donation-level']:checked").val() || jQuery(".donation-form #donation-amount").val()));
    };

    // Register proper callbacks for various stages/outcomes of submission
    Bloomerang.Widget.Donation.OnSubmit = function (args) {
        jQuery(".btn-submit-donation").val("Donating...").prop("disabled", true).addClass("disabled");
        var val = function (selector) { return jQuery(selector).val(); };
        Bloomerang.Account
                .individual()
                .firstName(val(".donation-form #first-name"))
                .middleName(val(".donation-form #middle-name"))
                .lastName(val(".donation-form #last-name"))
                .homeAddress(val(".donation-form #street-address"),
                             val(".donation-form #city"),
                             val(".donation-form #state") || val(".donation-form #province"),
                             val(".donation-form #zip-code") || val(".donation-form #postal-code"),
                             val(".donation-form #country"))
                .homeEmail(val(".donation-form #email-address"))
                .homePhone(val(".donation-form #phone-number"))
                .applyDonationCustomFields();

        var amount = Bloomerang.Util.getDonationAmount() + Bloomerang.Util.getDonationTrueImpactAmount();
        if (jQuery(".donation-form #recurring").prop("checked")) {
            Bloomerang.RecurringDonation
                    .amount(amount)
                    .fundId(val(".donation-form #fund"))
                    .note(val(".donation-form #comment"))
                    .frequency(val(".donation-form #frequency") || "Monthly")
                    .startDate(val(".donation-form #start-date"))
                    .applyDonationCustomFields();

            // Need to do a null-check here because they might have a cached version of Bloomerang-v2.js
            if (Bloomerang.RecurringDonation.trueImpactEnabled && Bloomerang.RecurringDonation.trueImpactUsed) {
              Bloomerang.RecurringDonation
                    .trueImpactEnabled(jQuery(".donation-form .true-impact .fee-amount").length > 0)
                    .trueImpactUsed(jQuery(".donation-form .true-impact input:checked").length > 0);
            }
        } else {
            Bloomerang.Donation
                    .amount(amount)
                    .fundId(val(".donation-form #fund"))
                    .note(val(".donation-form #comment"))
                    .applyDonationCustomFields();

            // Need to do a null-check here because they might have a cached version of Bloomerang-v2.js
            if (Bloomerang.Donation.trueImpactEnabled && Bloomerang.Donation.trueImpactUsed) {
              Bloomerang.Donation
                    .trueImpactEnabled(jQuery(".donation-form .true-impact .fee-amount").length > 0)
                    .trueImpactUsed(jQuery(".donation-form .true-impact input:checked").length > 0);
            }
        }

        if (jQuery("#donation-form #Checking").is(":checked") ||
            jQuery("#donation-form #Savings").is(":checked")) {
          Bloomerang.Eft
            .accountNumber(val(".donation-form #accountNumber"))
            .routingNumber(val(".donation-form #routingNumber"))
            .type(jQuery("#donation-form .section.payment input[type='radio']:checked").attr("id"));
        }
    };
    Bloomerang.ValidateDonationFormCaptcha = function() {
        if (typeof(grecaptcha) !== "undefined" && jQuery("#captcha" + Bloomerang.Data.WidgetIds.Donation).children().length) {
            var captchaResponse = grecaptcha.getResponse(jQuery(".donation-form").data("captcha-id"));
            if (captchaResponse) {
                jQuery(".donation-form .noCaptchaResponseError").hide();
                Bloomerang.captchaResponse(captchaResponse);
                return true;
            } else {
                jQuery(".donation-form .noCaptchaResponseError").show();
                return false;
            }
        } else return true;
    };
    Bloomerang.scrollToElement = function(element) {
        var distance = 100;
        var offset = element.offset().top;
        var offsetTop = offset > distance ? offset - distance : offset;
        jQuery('html, body').animate({ scrollTop : offsetTop}, 500);
    };
    Bloomerang.Api.OnSuccess = Bloomerang.Widget.Donation.OnSuccess = function (response) {
        jQuery("#donation-processing-container").hide();
        var formContainer = jQuery("#donation-form-container");
        formContainer.show();
        formContainer.html(successHtml13206528);
        Bloomerang.scrollToElement(formContainer);
    };
    Bloomerang.Api.OnError = Bloomerang.Widget.Donation.OnError = function (response) {
        jQuery(".btn-submit-donation").prop("disabled", false).removeClass("disabled");
        if (jQuery("#donation-form #Checking").is(":checked") ||
            jQuery("#donation-form #Savings").is(":checked"))
          jQuery(".btn-submit-donation").val("Donate");
        else
          jQuery(".btn-submit-donation").val("Enter Payment");
        jQuery("#donation-form-container .errors").removeClass("hidden").html(response.Message);
        jQuery("#donation-processing-container").hide();
        jQuery("#donation-form-container").show();
        Bloomerang.scrollToElement(jQuery("#donation-form-container .errors"));
        Bloomerang.cancelFinancialSubmission(jQuery("#donation-form"));
        SpreedlyExpress.unload();
        Bloomerang.initSpreedly();
    };

    Bloomerang.Util.applyDonationCustomFields = function (obj, type) {

        // Clear any fields from a previous failed submission
        obj.clearCustomFields();

        // Apply all <input> (not multiselect), <select> and <textarea> fields
        jQuery(".donation-form .section.custom-fields :input:not(a > input, select)[id*=" + type + "]").each(function() {
            if (jQuery(this).val().hasValue()) {
                obj.customFreeformField(jQuery(this).attr("id").toUntypedValue(), jQuery(this).val());
            }
        });

        // Apply all <select> fields
        jQuery(".donation-form .section.custom-fields select[id*=" + type + "]").each(function() {
            if (jQuery(this).val().hasValue()) {
                obj.customPickField(jQuery(this).attr("id").toUntypedValue(), jQuery(this).val());
            }
        });

        // Apply all multiselect fields
        jQuery(".donation-form .section.custom-fields .checkboxes[id*=" + type + "]").each(function() {
            obj.customPickField(jQuery(this).attr("id").toUntypedValue(),
            jQuery.map(jQuery(this).children(".checkbox.selected"), function(v) { return jQuery(v).attr("data-id"); }));
        });
    };

    String.prototype.hasValue = function() {
        return (this && jQuery.trim(this)); //IE8 doesn't have a native trim function
    };

    Bloomerang.Account.applyDonationCustomFields = function () {
        Bloomerang.Util.applyDonationCustomFields(this, "Account");
        return this;
    };

    Bloomerang.Donation.applyDonationCustomFields = function () {
        Bloomerang.Util.applyDonationCustomFields(this, "Transaction");
        return this;
    };

    Bloomerang.RecurringDonation.applyDonationCustomFields = function () {
        Bloomerang.Util.applyDonationCustomFields(this, "Transaction");
        return this;
    };

    String.prototype.toUntypedValue = function() {
        return this.substring(this.indexOf('_') + 1);
    };

    Date.prototype.toDateInputValue = function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return (local.getMonth() + 1) + // Add one to the month because it starts at 0
                "/" + local.getDate() + "/" + local.getFullYear();
    };

    jQuery(document).ready(function() {
        jQuery(".donation-form .field.start-date input").val(new Date().toDateInputValue());
    });

    // Hide recurring donation options if recurring donation box is unchecked
    jQuery(".donation-form .field.recurring").change(function() {
        jQuery(".donation-form .field.recurring").siblings().each(function() {
            jQuery(this).toggle();
        });
    })

    // The other-amount field is only equired when the "Other" donation-level is selected
    jQuery(".donation-form .section.donation input[name='donation-level']").change(function () {
        if (jQuery(this).attr('id') == "other-option") {
            jQuery(".donation-form #other-amount").addClass("required");
        } else {
            jQuery(".donation-form #other-amount").removeClass("required");
        }
        Bloomerang.Util.calculateDonationTrueImpact();
    });

    if (jQuery(".donation-form .true-impact label").length) {
      jQuery(".donation-form .true-impact label")[0].innerHTML = jQuery(".donation-form .true-impact label")[0].innerHTML.replace("[amount]", "<span class='fee-amount'>$0</span>");
    }
    Bloomerang.Util.calculateDonationTrueImpact = function() {
      if (!jQuery(".donation-form .true-impact .fee-amount").length) { return; }
      // Note that we don't really care about JS floating point math. It's OK if the numbers are a couple cents off.
      var amount = Bloomerang.Util.getDonationAmount();
      var feeRate = (jQuery("#donation-form #Checking").is(":checked") || jQuery("#donation-form #Savings").is(":checked")) ? 0 : Bloomerang.transactionFeeRate;
      var newTotal = (amount + Bloomerang.transactionFee) / (1 - feeRate);
      var impactAmount = Number((newTotal - amount).toFixed(2));
      jQuery(".donation-form .true-impact .fee-amount").text(accounting.formatMoney(impactAmount));
      return impactAmount;
    };
    Bloomerang.Util.getDonationTrueImpactAmount = function() {
      if (jQuery(".donation-form .true-impact input:checked").length) {
        return Bloomerang.Util.calculateDonationTrueImpact();
      }
      return 0;
    };

    // Changing the value of other-amount should change the value of other-option
    jQuery(".donation-form #other-amount").change(function () {
      jQuery(".donation-form #other-option").val(jQuery(this).val());
      Bloomerang.Util.calculateDonationTrueImpact();
    });

    jQuery(".donation-form #donation-amount").change(function() {
      Bloomerang.Util.calculateDonationTrueImpact();
    });

    // Clicking into the other-amount field should select the other-option
    jQuery(".donation-form #other-amount").click(function() {
      jQuery(".donation-form #other-option").prop('checked',true);
      Bloomerang.Util.calculateDonationTrueImpact();
    });

    jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
        var digits = phone_number.replace(/\D/g, "");
        return this.optional(element) || digits.length == 7 || digits.length == 10 || digits.length == 11;
    }, "Please specify a valid phone number or use '+' for international.");

    jQuery.validator.addMethod("phoneInternational", function (phone_number, element) {
        return this.optional(element) || /^\+[0-9\-\(\)\s.]+$/i.test(phone_number);
    }, "Please specify a valid phone number.");
    jQuery.validator.classRuleSettings.phoneInternational = { phoneInternational: true };

    jQuery.validator.addMethod("zipcodeUS", function (value, element) {
        return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value)
    }, "The specified US ZIP Code is invalid");

    jQuery.validator.addMethod("currency", function (value, element, options) {
        return !value ||
            value
              .replace("$", "")
              .replace(".", "")
              .split(",").join("")
              .match(/^\d+$/g);
    }, "Not a valid currency");

    jQuery.validator.classRuleSettings.currency = { currency: true };

    jQuery.validator.addMethod("number", function (value, element, options) {
        return !value ||
            value
              .replace(".", "")
              .split(",").join("")
              .match(/^\d+$/g);
    }, "Not a valid number");

    jQuery.validator.classRuleSettings.number = { number: true };

    jQuery.validator.addMethod("validYear", function (value, element, options) {
        try {
            return (!value || value.match(/^[1-9]\d\d\d$/)) ? true : false;
        }
        catch (e) {
            return false;
        }
    }, function () { return "Must be a 4 digit year"; });

    jQuery.validator.classRuleSettings.validYear = { validYear: true };

    // Validate that the donation amount is at least $1
    jQuery.validator.methods.min = function( value, element, param ) {
      if (typeof (accounting) === "undefined") { // rip out $ and ,
          value = ((value + "") || "").replace(/[\$,]/g, "");
      }
      else { // Use accounting.parse, to handle $ and ,
          value = accounting.parse(value);
      }
      return this.optional( element ) || value >= param;
    };
    jQuery.validator.classRuleSettings.minimum1 = { min: 1 };
    jQuery.validator.messages.min = 'Please enter a value of at least {0}.'

    jQuery(".donation-form #country").change(function(event) {
      var element = jQuery(event.target || event.srcElement); // cross-browser event target selection
      var isInternational = (element.val() != "US" && element.val() != "CA" && element.val() != "BM");
      jQuery(".donation-form #state, .donation-form #province").val(""); // clear the state when the country changes
      jQuery(".donation-form .field.city, .donation-form .field.state, .donation-form .field.province, .donation-form .field.zip-code, .donation-form .field.postal-code").toggle(!isInternational);
      jQuery(".donation-form #street-address").toggleClass("international", isInternational);
      if (element.val() == "BM") {
        jQuery(".donation-form .field.city .label").text(jQuery(".donation-form .field.city input").data("bm-label"));
      } else if (element.val() == "US" || element.val() == "CA") {
        jQuery(".donation-form .field.city .label").text(jQuery(".donation-form .field.city input").data("us-label"));
      }
      if (element.val() == "US") {
        jQuery(".donation-form .field.state, .donation-form .field.zip-code").show();
        jQuery(".donation-form .field.province, .donation-form .field.postal-code").hide();
      } else if (element.val() == "CA") {
        jQuery(".donation-form .field.state, .donation-form .field.zip-code").hide();
        jQuery(".donation-form .field.province, .donation-form .field.postal-code").show();
      } else if (element.val() == "BM") {
        jQuery(".donation-form .field.state, .donation-form .field.province, .donation-form .field.zip-code").hide();
        jQuery(".donation-form .field.postal-code").show();
      } else {
        jQuery(".donation-form #city, .donation-form #postal-code, .donation-form #zip-code").val("");
      }
    });

    jQuery(".donation-form #phone-number").change(function () {
      var phoneField = jQuery(".donation-form #phone-number");
      var internationalNumber = phoneField.val().substring(0,1) === '+';
      phoneField.toggleClass("phoneUS", !internationalNumber);
      phoneField.toggleClass("phoneInternational", internationalNumber);
    })

    collectPayment = function () {
      var form = jQuery("#donation-form");

      if (!Bloomerang.ValidateDonationFormCaptcha()) {
        return false;
      }

      if (!form.valid()) {
        return false;
      }

      if (jQuery("#donation-form #CreditCard").length > 0 && !jQuery("#donation-form #CreditCard").prop("checked")) {
        submitDonation();
      }
      else {
        var val = function (selector) { return jQuery(selector).val(); };
        var amount = Bloomerang.Util.getDonationAmount() + Bloomerang.Util.getDonationTrueImpactAmount();
        var selectedDonationLevel = jQuery(".donation-form .section.donation input[name='donation-level']:checked").parent().text();
        selectedDonationLevel = (selectedDonationLevel.indexOf("-") == -1 ? "" : selectedDonationLevel.substr(selectedDonationLevel.indexOf("-") + 2) );

        SpreedlyExpress.setDisplayOptions({
          "amount": accounting.formatMoney(amount),
          "full_name": val(".donation-form #first-name") + " " + val(".donation-form #last-name"),
          "sidebar_bottom_description": selectedDonationLevel,
          "submit_label": "Donate"});
        SpreedlyExpress.setPaymentMethodParams({
          "email": val(".donation-form #email-address"),
          "phone_number": val(".donation-form #phone-number"),
          "address1": val(".donation-form #street-address"),
          "city": val(".donation-form #city"),
          "state": val(".donation-form #state") || val(".donation-form #province"),
          "zip": val(".donation-form #zip-code") || val(".donation-form #postal-code")});

        SpreedlyExpress.onPaymentMethod(function(token, paymentMethod) {
          Bloomerang.CreditCard.spreedlyToken(token);
          submitDonation();
        });

        var oldMeta = '';
        if (jQuery('meta[name="viewport"]').length) {
          oldMeta = jQuery('meta[name="viewport"]').attr('content');
        } else {
          jQuery('head').append('<meta name="viewport" content="" />');
        }
        jQuery('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1');
        jQuery('meta[name="viewport"]').attr('content', oldMeta);

        SpreedlyExpress.openView();
      }
    };

    submitDonation = function() {
      if (!Bloomerang.continueFinancialSubmission(jQuery("#donation-form"))) { return false; }

      Bloomerang.Api.OnSubmit = Bloomerang.Widget.Donation.OnSubmit;
      Bloomerang.Api.OnSuccess = Bloomerang.Widget.Donation.OnSuccess;
      Bloomerang.Api.OnError = Bloomerang.Widget.Donation.OnError;

      var processingMessage = jQuery("#donation-processing-container");
      processingMessage.show();
      jQuery("#donation-form-container").hide();
      Bloomerang.scrollToElement(processingMessage);

      var tmp = jQuery(".donation-form #recurring").prop("checked")
        ? Bloomerang.Api.recurringDonate()
        : Bloomerang.Api.donate();
    };

    jQuery("#donation-form #CreditCard").prop("checked", true);
    jQuery("#donation-form .section.payment input[type='radio']").click(function() {
      Bloomerang.Util.calculateDonationTrueImpact();
      if (jQuery(this).attr("id") == "CreditCard") {
        jQuery("#donation-form .accountNumber, \
                #donation-form .routingNumber, \
                #donation-form .sample-check").hide();
        jQuery(".btn-submit-donation").val("Enter Payment");
      }
      else {
        jQuery("#donation-form .accountNumber, \
                #donation-form .routingNumber, \
                #donation-form .sample-check").show();
        if (jQuery("#donation-form .sample-check").length == 0) {
          var checkImage = new Image();
          checkImage.src = 'https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/public-gallery/SampleCheck.png';
          jQuery(checkImage).addClass("sample-check");
          jQuery("#donation-form .accountNumber").after(checkImage);
        }
        jQuery(".btn-submit-donation").val("Donate");
      }
  });

})(jQuery);
};

            var startBloomerangLoad = function() {
                if (window.bloomerangLoadStarted == undefined) {
                    window.bloomerangLoadStarted = true;
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'https://crm.bloomerang.co/Content/Scripts/Api/Bloomerang-v2.js';
                    document.getElementsByTagName('head')[0].appendChild(script);
                    waitForBloomerangLoad(function() { Bloomerang.Util.requireJQueryValidation(function() { insertForm13206528(); })});
                }
                else {
                    waitForBloomerangLoad(function() { Bloomerang.Util.requireJQueryValidation(function() { insertForm13206528(); })});
                }
            };

            var waitForBloomerangLoad = function(callback) {
                if (typeof(Bloomerang) === 'undefined' || !Bloomerang._isReady) {
                    setTimeout(function () { waitForBloomerangLoad(callback) }, 500);
                }
                else {
                    if (true) {
                        callback();
                    } else {
                        window.bloomerangLoadStarted = undefined;
                        Bloomerang = undefined; // The version of Blomerang.js is not what we want. So blow it away and reload.
                        startBloomerangLoad();
                    }
                }
            };

            startBloomerangLoad();