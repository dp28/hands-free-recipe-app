import React from 'react';
import { connect } from 'react-redux';

const UnmatchedSpeech = (text) => (
  <h1>Couldn't understand: "{text}"</h1>
)

export const Speech = ({ speech }) => (
  <div>
    {speech.unmatched ? UnmatchedSpeech(speech.unmatched) : null}
  </div>
);

export function mapStateToProps({ speech }) {
  return { speech };
}

export default connect(mapStateToProps)(Speech);
