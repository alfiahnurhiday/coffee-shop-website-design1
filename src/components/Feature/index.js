import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Today's Discount</h1>
      <p>Cappuccino (1 espresso + 0.5 steamed milk + 1.5 foamed milk)</p>
      <h2>Rp 19.000</h2>
      <br></br>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
