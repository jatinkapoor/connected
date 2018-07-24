import React, { Component } from "react";
import { Button } from 'rmwc/Button';
import NavBar from '../../components/UI/NavBar/NavBar';
import TermsComp from '../../components/TermsComp/TermsComp'
import "./TermsOfService.css";

class TermsOfService extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <TermsComp/>
        </div>
    )
  }
}
export default TermsOfService;