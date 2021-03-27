import React from 'react';

import Layout from '../../components/ui/Layout/Layout';
import {
  FunZoneContainer
} from './FunZone.styles';

interface FunZone {};

const FunZone: React.FC<FunZone> = () => {
  return (
    <Layout>
      <FunZoneContainer>
      </FunZoneContainer>
    </Layout>
  );
}

export default FunZone;