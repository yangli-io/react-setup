import React from 'react';
import { render } from 'react-dom';
import Container from './Components/Container';

render(<Container names={["steve", "aarthi", "steve", "egor", "bill"]}/>, document.getElementById('root'));