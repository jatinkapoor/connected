import React, { Component } from "react";
import "./TermsComp.css";
import { SimpleDialog } from 'rmwc/Dialog';
import { Button } from 'rmwc/Button';
import { Link } from 'react-router-dom';
import { Typography } from 'rmwc/Typography';
import { Elevation } from 'rmwc/Elevation';
import { Card } from 'rmwc/Card';


class TermsComp extends Component {
    render() {
      return (
        <div className ="page">
    <Elevation z={24}>
    <Card className="card">
    <Typography>
      <br />
     <Typography use="headline4">Privacy Policy</Typography>
        <br />
        <br />
        <Typography use="body2">
        This privacy notice discloses the privacy practices for this website (fill in URL). This privacy notice applies solely to information collected by this website and mailing list. 
        <br />
        <br />
        <Typography use="headline6">
        It will notify you of the following:
        </Typography>
        <br />
        <br />
        What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.
        What choices are available to you regarding the use of your data.
        The security procedures in place to protect the misuse of your information.
        How you can correct any inaccuracies in the information.
        <br />
        Information Collection, Use, and Sharing
        <br />
        We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you.
        <br />
        We will use your information to respond to you, regarding the reason you contacted us..
        <br />
        Your Access to and Control Over Information
        <br />
        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via (fill in contact information):
        <br />
        See what data we have about you, if any.
        Change/correct any data we have about you.
        Have us delete any data we have about you.
        Express any concern you have about our use of your data.
        <br />
        </Typography>
        <br />
        <Typography use="headline6">Security</Typography>
        <br />
        <br />
        <Typography use="body2">
        We take precautions to protect your information. When you submit sensitive information via the website or mailing list, your information is protected both online and offline.
        <br />
        If you feel that we are not abiding by this privacy policy, you should contact us immediately via email at (fill in email)
        <br />
        </Typography>
        <br />
        <Typography use="headline4">Terms Of Service</Typography>
        <br />
        <br />
        <Typography use="body2">
        The material contained in this publication is provided for information purposes only.
        The users of this list and the publishers of this site have no obligation to check on anyone, or to contact anyone. 
        The authors and publishers of this site (fill in URL) assume no responsibility for the use or misuse of the contents, or for any physical or mental injury, damage, and/or financial loss sustained to persons or property as a result of the use of this site. The liability, negligence, use, misuse, or abuse of the implementation of any methods, strategies, instructions, or ideas contained in the material herein is the sole responsibility of the user.
        Limit of Liability and Disclaimer of Warranty: The authors and publishers of this site have used their best efforts in preparing this site, and the information provided herein is provided "as is." The authors and publishers make no representation or warranties with respect to the accuracy or completeness of the contents of this site and specifically disclaim any implied warranties of merchantability or fitness for any particular purpose and shall in no event be liable for any loss of profit or any other damages, including but not limited to special, incidental, consequential, or other damages.
        Construction, Heirs: This agreement shall be construed and interpreted according to the laws of
        the State of Minnesota and shall be binding upon the parties thereto, their heirs, successors, assigns, and personal representatives, and references to the authors and publisher shall include their heirs, successors, assigns, and personal representatives.
       
        By using this site or registering as a user, you have agreed to the above terms. 
        </Typography>
        <br />
        <br />
        <Button>
        <Link to={"/login"}>Back to Registration</Link>
        </Button>
        </Typography>
        </Card>
        </Elevation>
        </div>
      );
    }
  }


  export default TermsComp;