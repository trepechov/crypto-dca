import React, { Component } from 'react';
import Router from 'next/router';

export default function Index_() {
  React.useEffect(() => {
    Router.push('/dashboard');
  });

  return <div />;
}
