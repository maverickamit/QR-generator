import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite"; // Or "mobx-react".

const PhoneInput = observer(({ userStore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    userStore.setQrData(`tel:+${data.countrycode}${data.phone}`);
  return (
    <div>
      <h4 className="mt-3">Phone</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={
        userStore.darkMode !== true
          ? "text-dark"
          : "" 
        }
        htmlFor="coutrycode">Country code</label>
        <select
          class="custom-select"
          name="countrycode"
          {...register("countrycode", { required: true })}
        >
          <option value="" label="--">
            --
          </option>
          <option value="7840" label="Abkhazia (+7 840)">
            Abkhazia (+7 840)
          </option>
          <option value="7940" label="Abkhazia (+7 940)">
            Abkhazia (+7 940)
          </option>
          <option value="93" label="Afghanistan (+93)">
            Afghanistan (+93)
          </option>
          <option value="355" label="Albania (+355)">
            Albania (+355)
          </option>
          <option value="213" label="Algeria (+213)">
            Algeria (+213)
          </option>
          <option value="1684" label="American Samoa (+1 684)">
            American Samoa (+1 684)
          </option>
          <option value="376" label="Andorra (+376)">
            Andorra (+376)
          </option>
          <option value="244" label="Angola (+244)">
            Angola (+244)
          </option>
          <option value="1264" label="Anguilla (+1 264)">
            Anguilla (+1 264)
          </option>
          <option value="1268" label="Antigua and Barbuda (+1 268)">
            Antigua and Barbuda (+1 268)
          </option>
          <option value="54" label="Argentina (+54)">
            Argentina (+54)
          </option>
          <option value="374" label="Armenia (+374)">
            Armenia (+374)
          </option>
          <option value="297" label="Aruba (+297)">
            Aruba (+297)
          </option>
          <option value="247" label="Ascension (+247)">
            Ascension (+247)
          </option>
          <option value="61" label="Australia (+61)">
            Australia (+61)
          </option>
          <option value="672" label="Australian External Territories (+672)">
            Australian External Territories (+672)
          </option>
          <option value="43" label="Austria (+43)">
            Austria (+43)
          </option>
          <option value="994" label="Azerbaijan (+994)">
            Azerbaijan (+994)
          </option>
          <option value="1242" label="Bahamas (+1 242)">
            Bahamas (+1 242)
          </option>
          <option value="973" label="Bahrain (+973)">
            Bahrain (+973)
          </option>
          <option value="880" label="Bangladesh (+880)">
            Bangladesh (+880)
          </option>
          <option value="1246" label="Barbados (+1 246)">
            Barbados (+1 246)
          </option>
          <option value="1268" label="Barbuda (+1 268)">
            Barbuda (+1 268)
          </option>
          <option value="375" label="Belarus (+375)">
            Belarus (+375)
          </option>
          <option value="32" label="Belgium (+32)">
            Belgium (+32)
          </option>
          <option value="501" label="Belize (+501)">
            Belize (+501)
          </option>
          <option value="229" label="Benin (+229)">
            Benin (+229)
          </option>
          <option value="1441" label="Bermuda (+1 441)">
            Bermuda (+1 441)
          </option>
          <option value="975" label="Bhutan (+975)">
            Bhutan (+975)
          </option>
          <option value="591" label="Bolivia (+591)">
            Bolivia (+591)
          </option>
          <option value="387" label="Bosnia and Herzegovina (+387)">
            Bosnia and Herzegovina (+387)
          </option>
          <option value="267" label="Botswana (+267)">
            Botswana (+267)
          </option>
          <option value="55" label="Brazil (+55)">
            Brazil (+55)
          </option>
          <option value="246" label="British Indian Ocean Territory (+246)">
            British Indian Ocean Territory (+246)
          </option>
          <option value="1284" label="British Virgin Islands (+1 284)">
            British Virgin Islands (+1 284)
          </option>
          <option value="673" label="Brunei (+673)">
            Brunei (+673)
          </option>
          <option value="359" label="Bulgaria (+359)">
            Bulgaria (+359)
          </option>
          <option value="226" label="Burkina Faso (+226)">
            Burkina Faso (+226)
          </option>
          <option value="257" label="Burundi (+257)">
            Burundi (+257)
          </option>
          <option value="855" label="Cambodia (+855)">
            Cambodia (+855)
          </option>
          <option value="237" label="Cameroon (+237)">
            Cameroon (+237)
          </option>
          <option value="1" label="Canada (+1)">
            Canada (+1)
          </option>
          <option value="238" label="Cape Verde (+238)">
            Cape Verde (+238)
          </option>
          <option value="345" label="Cayman Islands (+345)">
            Cayman Islands (+345)
          </option>
          <option value="236" label="Central African Republic (+236)">
            Central African Republic (+236)
          </option>
          <option value="235" label="Chad (+235)">
            Chad (+235)
          </option>
          <option value="56" label="Chile (+56)">
            Chile (+56)
          </option>
          <option value="86" label="China (+86)">
            China (+86)
          </option>
          <option value="61" label="Christmas Island (+61)">
            Christmas Island (+61)
          </option>
          <option value="61" label="Cocos-Keeling Islands (+61)">
            Cocos-Keeling Islands (+61)
          </option>
          <option value="57" label="Colombia (+57)">
            Colombia (+57)
          </option>
          <option value="269" label="Comoros (+269)">
            Comoros (+269)
          </option>
          <option value="242" label="Congo (+242)">
            Congo (+242)
          </option>
          <option value="243" label="Congo, Dem. Rep. of (Zaire) (+243)">
            Congo, Dem. Rep. of (Zaire) (+243)
          </option>
          <option value="682" label="Cook Islands (+682)">
            Cook Islands (+682)
          </option>
          <option value="506" label="Costa Rica (+506)">
            Costa Rica (+506)
          </option>
          <option value="225" label="Ivory Coast (+225)">
            Ivory Coast (+225)
          </option>
          <option value="385" label="Croatia (+385)">
            Croatia (+385)
          </option>
          <option value="53" label="Cuba (+53)">
            Cuba (+53)
          </option>
          <option value="599" label="Curacao (+599)">
            Curacao (+599)
          </option>
          <option value="537" label="Cyprus (+537)">
            Cyprus (+537)
          </option>
          <option value="420" label="Czech Republic (+420)">
            Czech Republic (+420)
          </option>
          <option value="45" label="Denmark (+45)">
            Denmark (+45)
          </option>
          <option value="246" label="Diego Garcia (+246)">
            Diego Garcia (+246)
          </option>
          <option value="253" label="Djibouti (+253)">
            Djibouti (+253)
          </option>
          <option value="1767" label="Dominica (+1 767)">
            Dominica (+1 767)
          </option>
          <option value="1809" label="Dominican Republic (+1 809)">
            Dominican Republic (+1 809)
          </option>
          <option value="1829" label="Dominican Republic (+1 829)">
            Dominican Republic (+1 829)
          </option>
          <option value="1849" label="Dominican Republic (+1 849)">
            Dominican Republic (+1 849)
          </option>
          <option value="670" label="East Timor (+670)">
            East Timor (+670)
          </option>
          <option value="56" label="Easter Island (+56)">
            Easter Island (+56)
          </option>
          <option value="593" label="Ecuador (+593)">
            Ecuador (+593)
          </option>
          <option value="20" label="Egypt (+20)">
            Egypt (+20)
          </option>
          <option value="503" label="El Salvador (+503)">
            El Salvador (+503)
          </option>
          <option value="240" label="Equatorial Guinea (+240)">
            Equatorial Guinea (+240)
          </option>
          <option value="291" label="Eritrea (+291)">
            Eritrea (+291)
          </option>
          <option value="372" label="Estonia (+372)">
            Estonia (+372)
          </option>
          <option value="251" label="Ethiopia (+251)">
            Ethiopia (+251)
          </option>
          <option value="500" label="Falkland Islands (+500)">
            Falkland Islands (+500)
          </option>
          <option value="298" label="Faroe Islands (+298)">
            Faroe Islands (+298)
          </option>
          <option value="679" label="Fiji (+679)">
            Fiji (+679)
          </option>
          <option value="358" label="Finland (+358)">
            Finland (+358)
          </option>
          <option value="33" label="France (+33)">
            France (+33)
          </option>
          <option value="596" label="French Antilles (+596)">
            French Antilles (+596)
          </option>
          <option value="594" label="French Guiana (+594)">
            French Guiana (+594)
          </option>
          <option value="689" label="French Polynesia (+689)">
            French Polynesia (+689)
          </option>
          <option value="241" label="Gabon (+241)">
            Gabon (+241)
          </option>
          <option value="220" label="Gambia (+220)">
            Gambia (+220)
          </option>
          <option value="995" label="Georgia (+995)">
            Georgia (+995)
          </option>
          <option value="49" label="Germany (+49)">
            Germany (+49)
          </option>
          <option value="233" label="Ghana (+233)">
            Ghana (+233)
          </option>
          <option value="350" label="Gibraltar (+350)">
            Gibraltar (+350)
          </option>
          <option value="30" label="Greece (+30)">
            Greece (+30)
          </option>
          <option value="299" label="Greenland (+299)">
            Greenland (+299)
          </option>
          <option value="1473" label="Grenada (+1 473)">
            Grenada (+1 473)
          </option>
          <option value="590" label="Guadeloupe (+590)">
            Guadeloupe (+590)
          </option>
          <option value="1671" label="Guam (+1 671)">
            Guam (+1 671)
          </option>
          <option value="502" label="Guatemala (+502)">
            Guatemala (+502)
          </option>
          <option value="224" label="Guinea (+224)">
            Guinea (+224)
          </option>
          <option value="245" label="Guinea-Bissau (+245)">
            Guinea-Bissau (+245)
          </option>
          <option value="595" label="Guyana (+595)">
            Guyana (+595)
          </option>
          <option value="509" label="Haiti (+509)">
            Haiti (+509)
          </option>
          <option value="504" label="Honduras (+504)">
            Honduras (+504)
          </option>
          <option value="852" label="Hong Kong SAR China (+852)">
            Hong Kong SAR China (+852)
          </option>
          <option value="248" label="Seychelles (+248)">
            Seychelles (+248)
          </option>
          <option value="354" label="Iceland (+354)">
            Iceland (+354)
          </option>
          <option value="91" label="India (+91)">
            India (+91)
          </option>
          <option value="62" label="Indonesia (+62)">
            Indonesia (+62)
          </option>
          <option value="98" label="Iran (+98)">
            Iran (+98)
          </option>
          <option value="964" label="Iraq (+964)">
            Iraq (+964)
          </option>
          <option value="353" label="Ireland (+353)">
            Ireland (+353)
          </option>
          <option value="972" label="Israel (+972)">
            Israel (+972)
          </option>
          <option value="39" label="Italy (+39)">
            Italy (+39)
          </option>
          <option value="1876" label="Jamaica (+1 876)">
            Jamaica (+1 876)
          </option>
          <option value="81" label="Japan (+81)">
            Japan (+81)
          </option>
          <option value="962" label="Jordan (+962)">
            Jordan (+962)
          </option>
          <option value="77" label="Kazakhstan (+7 7)">
            Kazakhstan (+7 7)
          </option>
          <option value="254" label="Kenya (+254)">
            Kenya (+254)
          </option>
          <option value="686" label="Kiribati (+686)">
            Kiribati (+686)
          </option>
          <option value="850" label="North Korea (+850)">
            North Korea (+850)
          </option>
          <option value="82" label="South Korea (+82)">
            South Korea (+82)
          </option>
          <option value="965" label="Kuwait (+965)">
            Kuwait (+965)
          </option>
          <option value="996" label="Kyrgyzstan (+996)">
            Kyrgyzstan (+996)
          </option>
          <option value="856" label="Laos (+856)">
            Laos (+856)
          </option>
          <option value="371" label="Latvia (+371)">
            Latvia (+371)
          </option>
          <option value="961" label="Lebanon (+961)">
            Lebanon (+961)
          </option>
          <option value="266" label="Lesotho (+266)">
            Lesotho (+266)
          </option>
          <option value="231" label="Liberia (+231)">
            Liberia (+231)
          </option>
          <option value="218" label="Libya (+218)">
            Libya (+218)
          </option>
          <option value="423" label="Liechtenstein (+423)">
            Liechtenstein (+423)
          </option>
          <option value="370" label="Lithuania (+370)">
            Lithuania (+370)
          </option>
          <option value="352" label="Luxembourg (+352)">
            Luxembourg (+352)
          </option>
          <option value="853" label="Macau SAR China (+853)">
            Macau SAR China (+853)
          </option>
          <option value="389" label="Macedonia (+389)">
            Macedonia (+389)
          </option>
          <option value="261" label="Madagascar (+261)">
            Madagascar (+261)
          </option>
          <option value="265" label="Malawi (+265)">
            Malawi (+265)
          </option>
          <option value="60" label="Malaysia (+60)">
            Malaysia (+60)
          </option>
          <option value="960" label="Maldives (+960)">
            Maldives (+960)
          </option>
          <option value="223" label="Mali (+223)">
            Mali (+223)
          </option>
          <option value="356" label="Malta (+356)">
            Malta (+356)
          </option>
          <option value="692" label="Marshall Islands (+692)">
            Marshall Islands (+692)
          </option>
          <option value="596" label="Martinique (+596)">
            Martinique (+596)
          </option>
          <option value="222" label="Mauritania (+222)">
            Mauritania (+222)
          </option>
          <option value="230" label="Mauritius (+230)">
            Mauritius (+230)
          </option>
          <option value="262" label="Mayotte (+262)">
            Mayotte (+262)
          </option>
          <option value="52" label="Mexico (+52)">
            Mexico (+52)
          </option>
          <option value="691" label="Micronesia (+691)">
            Micronesia (+691)
          </option>
          <option value="1808" label="Midway Island (+1 808)">
            Midway Island (+1 808)
          </option>
          <option value="691" label="Micronesia (+691)">
            Micronesia (+691)
          </option>
          <option value="373" label="Moldova (+373)">
            Moldova (+373)
          </option>
          <option value="377" label="Monaco (+377)">
            Monaco (+377)
          </option>
          <option value="976" label="Mongolia (+976)">
            Mongolia (+976)
          </option>
          <option value="382" label="Montenegro (+382)">
            Montenegro (+382)
          </option>
          <option value="1664" label="Montserrat (+1664)">
            Montserrat (+1664)
          </option>
          <option value="212" label="Morocco (+212)">
            Morocco (+212)
          </option>
          <option value="95" label="Myanmar (+95)">
            Myanmar (+95)
          </option>
          <option value="264" label="Namibia (+264)">
            Namibia (+264)
          </option>
          <option value="674" label="Nauru (+674)">
            Nauru (+674)
          </option>
          <option value="977" label="Nepal (+977)">
            Nepal (+977)
          </option>
          <option value="31" label="Netherlands (+31)">
            Netherlands (+31)
          </option>
          <option value="599" label="Netherlands Antilles (+599)">
            Netherlands Antilles (+599)
          </option>
          <option value="1869" label="Nevis (+1 869)">
            Nevis (+1 869)
          </option>
          <option value="687" label="New Caledonia (+687)">
            New Caledonia (+687)
          </option>
          <option value="64" label="New Zealand (64)">
            New Zealand (64)
          </option>
          <option value="505" label="Nicaragua (+505)">
            Nicaragua (+505)
          </option>
          <option value="227" label="Niger (+227)">
            Niger (+227)
          </option>
          <option value="234" label="Nigeria (+234)">
            Nigeria (+234)
          </option>
          <option value="683" label="Niue (+683)">
            Niue (+683)
          </option>
          <option value="672" label="Norfolk Island (+672)">
            Norfolk Island (+672)
          </option>
          <option value="1670" label="Northern Mariana Islands (+1 670)">
            Northern Mariana Islands (+1 670)
          </option>
          <option value="47" label="Norway (+47)">
            Norway (+47)
          </option>
          <option value="968" label="Oman (+968)">
            Oman (+968)
          </option>
          <option value="92" label="Pakistan (+92)">
            Pakistan (+92)
          </option>
          <option value="680" label="Palau (+680)">
            Palau (+680)
          </option>
          <option value="970" label="Palestinian Territory (+970)">
            Palestinian Territory (+970)
          </option>
          <option value="507" label="Panama (+507)">
            Panama (+507)
          </option>
          <option value="675" label="Papua New Guinea (+675)">
            Papua New Guinea (+675)
          </option>
          <option value="595" label="Paraguay (+595)">
            Paraguay (+595)
          </option>
          <option value="51" label="Peru (+51)">
            Peru (+51)
          </option>
          <option value="63" label="Philippines (+63)">
            Philippines (+63)
          </option>
          <option value="48" label="Poland (+48)">
            Poland (+48)
          </option>
          <option value="351" label="Portugal (+351)">
            Portugal (+351)
          </option>
          <option value="1787" label="Puerto Rico (+1 787)">
            Puerto Rico (+1 787)
          </option>
          <option value="1939" label="Puerto Rico (+1 939)">
            Puerto Rico (+1 939)
          </option>
          <option value="974" label="Qatar (+974)">
            Qatar (+974)
          </option>
          <option value="262" label="Reunion (+262)">
            Reunion (+262)
          </option>
          <option value="40" label="Romania (+40)">
            Romania (+40)
          </option>
          <option value="7" label="Russia (+7)">
            Russia (+7)
          </option>
          <option value="250" label="Rwanda (+250)">
            Rwanda (+250)
          </option>
          <option value="685" label="Samoa (+685)">
            Samoa (+685)
          </option>
          <option value="378" label="San Marino (+378)">
            San Marino (+378)
          </option>
          <option value="966" label="Saudi Arabia (+966)">
            Saudi Arabia (+966)
          </option>
          <option value="221" label="Senegal (+221)">
            Senegal (+221)
          </option>
          <option value="381" label="Serbia (+381)">
            Serbia (+381)
          </option>
          <option value="232" label="Sierra Leone (+232)">
            Sierra Leone (+232)
          </option>
          <option value="65" label="Singapore (+65)">
            Singapore (+65)
          </option>
          <option value="421" label="Slovakia (+421)">
            Slovakia (+421)
          </option>
          <option value="386" label="Slovenia (+386)">
            Slovenia (+386)
          </option>
          <option value="677" label="Solomon Islands (+677)">
            Solomon Islands (+677)
          </option>
          <option value="27" label="South Africa (+27)">
            South Africa (+27)
          </option>
          <option
            value="500"
            label="South Georgia and the South Sandwich Islands (+500)"
          >
            South Georgia and the South Sandwich Islands (+500)
          </option>
          <option value="34" label="Spain (+34)">
            Spain (+34)
          </option>
          <option value="94" label="Sri Lanka (+94)">
            Sri Lanka (+94)
          </option>
          <option value="249" label="Sudan (+249)">
            Sudan (+249)
          </option>
          <option value="597" label="Suriname (+597)">
            Suriname (+597)
          </option>
          <option value="268" label="Swaziland (+268)">
            Swaziland (+268)
          </option>
          <option value="46" label="Sweden (+46)">
            Sweden (+46)
          </option>
          <option value="41" label="Switzerland (+41)">
            Switzerland (+41)
          </option>
          <option value="963" label="Syria (+963)">
            Syria (+963)
          </option>
          <option value="886" label="Taiwan (+886)">
            Taiwan (+886)
          </option>
          <option value="992" label="Tajikistan (+992)">
            Tajikistan (+992)
          </option>
          <option value="255" label="Tanzania (+255)">
            Tanzania (+255)
          </option>
          <option value="66" label="Thailand (+66)">
            Thailand (+66)
          </option>
          <option value="670" label="Timor Leste (+670)">
            Timor Leste (+670)
          </option>
          <option value="228" label="Togo (+228)">
            Togo (+228)
          </option>
          <option value="690" label="Tokelau (+690)">
            Tokelau (+690)
          </option>
          <option value="676" label="Tonga (+676)">
            Tonga (+676)
          </option>
          <option value="1868" label="Trinidad and Tobago (+1 868)">
            Trinidad and Tobago (+1 868)
          </option>
          <option value="216" label="Tunisia (+216)">
            Tunisia (+216)
          </option>
          <option value="90" label="Turkey (+90)">
            Turkey (+90)
          </option>
          <option value="993" label="Turkmenistan (+993)">
            Turkmenistan (+993)
          </option>
          <option value="1649" label="Turks and Caicos Islands (+1 649)">
            Turks and Caicos Islands (+1 649)
          </option>
          <option value="688" label="Tuvalu (+688)">
            Tuvalu (+688)
          </option>
          <option value="256" label="Uganda (+256)">
            Uganda (+256)
          </option>
          <option value="380" label="Ukraine (+380)">
            Ukraine (+380)
          </option>
          <option value="971" label="United Arab Emirates (+971)">
            United Arab Emirates (+971)
          </option>
          <option value="44" label="United Kingdom (+44)">
            United Kingdom (+44)
          </option>
          <option value="1" label="United States (+1)">
            United States (+1)
          </option>
          <option value="598" label="Uruguay (+598)">
            Uruguay (+598)
          </option>
          <option value="1340" label="U.S. Virgin Islands (+1 340)">
            U.S. Virgin Islands (+1 340)
          </option>
          <option value="998" label="Uzbekistan (+998)">
            Uzbekistan (+998)
          </option>
          <option value="678" label="Vanuatu (+678)">
            Vanuatu (+678)
          </option>
          <option value="58" label="Venezuela (+58)">
            Venezuela (+58)
          </option>
          <option value="84" label="Vietnam (+84)">
            Vietnam (+84)
          </option>
          <option value="1808" label="Wake Island (+1 808)">
            Wake Island (+1 808)
          </option>
          <option value="681" label="Wallis and Futuna (+681)">
            Wallis and Futuna (+681)
          </option>
          <option value="967" label="Yemen (+967)">
            Yemen (+967)
          </option>
          <option value="260" label="Zambia (+260)">
            Zambia (+260)
          </option>
          <option value="255" label="Zanzibar (+255)">
            Zanzibar (+255)
          </option>
          <option value="263" label="Zimbabwe (+263)">
            Zimbabwe (+263)
          </option>
        </select>
        {errors.countrycode && <span>This field is required</span>}
        <label className={
        userStore.darkMode !== true
          ? "text-dark"
          : "" 
        }
        htmlFor="phone">Phone number</label>
        <input {...register("phone", { required: true })} />
        {errors.phone && <span>This field is required</span>}
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
});
export default PhoneInput;
