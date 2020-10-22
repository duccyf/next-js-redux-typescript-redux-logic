import React from 'react';
import {NextPage} from 'next';

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const StaticPage: NextPage<any> = ({}) => (
  <div>{'hihii'}</div>
);

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default (StaticPage);