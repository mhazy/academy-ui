import * as React from 'react';

interface HelloProps {
  greeting: string
}

export const Hello = (props: HelloProps) => (
  <p>{ props.greeting} Component</p>
)
