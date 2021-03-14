
@{
    Layout = null;
}

<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Asset Form</title>
</head>
<body>
    <div ng-app="AssetApp" ng-controller="HomeController"> 
        <form>
            <fieldset style="border: medium double #000080">
            <table cellpadding="5" cellspacing="8" class="nav-justified" width="720">
                <caption>
            <tr>
                <td>
                    <label for="dropPrnm">Process Name:</label>
                    <select id="dropPrnm" ng-model="submitRcrd.dropPrnm" ng-change="chnge()">
                        <option value="Aditya Birla">Aditya Birla</option>
                        <option value="Aditya Birla-Client">Aditya Birla-Client</option>
                        <option value="Admin Room">Admin Room</option>
                        <option value="Aegon NPS">Aegon NPS</option>
                        <option value="Airpay">Airpay</option>
                        <option value="Auditor Room">Auditor Room</option>
                        <option value="Corporate">Corporate</option>
                        <option value="ER Dayawati">ER Dayawati</option>
                        <option value="ER Sakshi">ER Sakshi</option>
                        <option value="HDFC SC">HDFC SC</option>
                        <option value="Hinduja">Hinduja</option>
                        <option value="HR Interview">HR Interview</option>
                        <option value="HR Room">HR Room</option>
                        <option value="IF Renew">IF Renew</option>
                        <option value="Goqii">Goqii</option>
                        <option value="HDFC Back office">HDFC Back office</option>
                        <option value="IF Welcome">IF Welcome</option>
                        <option value="Induction Room">Induction Room</option>
                        <option value="It Department">It Department</option>
                        <option value="Meeting Room LCD">Meeting Room LCD</option>
                        <option value="MIS">MIS</option>
                        <option value="Naresh Sir LCD">Naresh Sir LCD</option>
                        <option value="NOC Room">NOC Room</option>
                        <option value="NSDL">NSDL</option>
                        <option value="One Assist">One Assist</option>
                        <option value="One Assist LCD">One Assist LCD</option>
                        <option value="One Assist QA">One Assist QA</option>
                        <option value="One Assist Verifire">One Assist Verifire</option>
                        <option value="Quality">Quality</option>
                        <option value="Reception">Reception</option>
                        <option value="Rehan Trainer">Rehan Trainer</option>
                        <option value="RoboCash">RoboCash</option>
                        <option value="Sanjay Devare">Sanjay Devare</option>
                        <option value="Software Team">Software Team</option>
                        <option value="Tajic Room Auditor">Tajic Room Auditor</option>
                        <option value="TATA">TATA</option>
                        <option value="Time Office">Time Office</option>
                        <option value="Training Room 1">Training Room 1</option>
                        <option value="Training Room 2">Training Room 2</option>
                        <option value="Training Room 3">Training Room 3</option>
                        <option value="Training Room 3.5">Training Room 3.5</option>
                        <option value="Training Room 4">Training Room 4</option>
                        <option value="Training Room 6">Training Room 6</option>
                        <option value="Training Room 6.5">Training Room 6.5</option>
                        <option value="Vijay Patil-MIS">Vijay Patil-MIS</option>
                        <option value="Hinduja OIL">Hinduja OIL</option>
                        <option value="subash patil Other Off.">subash patil Other Off.</option>
                        <option value="training room sahil shinde">training room sahil shinde</option>
                        <option value="IF Welcome QA">IF Welcome QA</option>
                        <option value="Goqii and Europassist">Goqii and Europassist</option>
                        <option value="Ipru LG">Ipru LG</option>
                        <option value="LOYALTY">LOYALTY</option>
                        <option value="CSRM">CSRM</option>
                        <option value="HDFC CP">HDFC CP</option>
                        <option value="HDFC S2">HDFC S2</option>
                        <option value="HDFC BM HELP DESK">HDFC BM HELP DESK</option>
                        <option value="HDFC BANCA">HDFC BANCA</option>
                        <option value="HDFC Insurance">HDFC Insurance</option>
                        <option value="New Process">New Process</option>
                    </select>
                </td>
                <td>
                    <label for="textTAssets">Total Asset:</label>
                    <input type="text" id="textTAssets" value="0" ng-model="submitRcrd.textTAssets">
                </td>
                <td>
                    <label for="textwfhAssets">WFH Asset:</label>
                    <input type="text" id="textwfhAssets" value="0" ng-model="submitRcrd.textwfhAssets">
                </td>
                <td>
                    <label for="textsystm">CSA System:</label>
                    <input type="text" id="textsystm" value="0" ng-model="submitRcrd.textsystm">
                </td>
                </tr>
               <tr>
                <td>
                    <label fro="textSSytm">Support System:</label>
                    <input type="text" id="textSSytm" value="0" ng-model="submitRcrd.textSSytm">
                </td>
                   <td>
                       <label for="textOval">Order value:</label>
                       <input type="text" id="textOval" value="0" ng-model="submitRcrd.textOval">
                   </td>
                   <td>
                       <label for="textWFo">WFO:</label>
                       <input type="text" id="textWFo" value="0" ng-model="submitRcrd.textWFo">
                   </td>
                   <td>
                       <label for="textincrs">5% Increase:</label>
                       <input type="text" id="textincrs" value="0" ng-model="submitRcrd.textincrs">
                   </td>
                </tr>
               <tr>
                   <td>
                       <label for="textFsystm">Faulty System:</label>
                       <input type="text" id="textFsystm" value="0" ng-model="submitRcrd.textFsystm">
                   </td>
                   <td>
                       <label for="textTotl">Total:</label>
                       <input type="text" id="textTotl" value="0" ng-model="submitRcrd.textTotl">
                   </td>
                   <td>
                       <label for="textRcnt">Required Count:</label>
                       <input type="text" id="textRcnt" value="0" ng-model="submitRcrd.textRcnt">
                   </td>
                   <td>
                       <label for="textItrmrks">IT Remarks:</label>
                       <textarea type="text" id="textItrmrks" ng-model="submitRcrd.textItrmrks"> </textarea>
                   </td>
               </tr>
                    <tr>
                     <td>
                    <input type="button"  value="{{btntext}}" ng-click="savedata()">
                         </td>
                        </tr>
                    </caption>
                </table>
                </fieldset>
        </form>
    </div>
    <script src="~/script/angular.min.js"></script>
    <script src="~/script/AngularController/AddRecord.js"></script>
</body>
</html>
