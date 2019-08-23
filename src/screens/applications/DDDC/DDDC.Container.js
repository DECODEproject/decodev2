import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getSharedAttributes } from 'redux/modules/attributes';
import {
  fetchPetition,
  getPetition,
  getLoading,
  getSigned,
  getError,
  getVerification,
  getCertificates,
  callCredentialIssuer,
  signPetition,
} from 'redux/modules/applications/dddc';
import Component from './DDDC.Component';

const mapStateToProps = createStructuredSelector({
  sharedAttributes: getSharedAttributes('dddc'),
  petition: getPetition,
  loading: getLoading,
  signed: getSigned,
  error: getError,
  verification: getVerification,
  certificates: getCertificates,
});

const mapDispatchToProps = {
  fetchPetition,
  callCredentialIssuer,
  signPetition,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

ConnectedComponent.navigationOptions = Component.navigationOptions;

export default ConnectedComponent;
