import React from 'react';

import UpdateDiv from '../components/UpdateDiv';
import Transition from '../components/Transition';

export default function ActionsPage() {
  return (
    <div>
      <UpdateDiv value="amount" />
      <UpdateDiv value="credit" />
      <Transition />
    </div>
  );
}
