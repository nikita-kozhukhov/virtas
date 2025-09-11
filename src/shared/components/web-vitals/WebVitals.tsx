'use client';

import { useEffect } from 'react';
import { onCLS, onINP, onLCP, onTTFB } from 'web-vitals';

export const WebVitals = () => {
  useEffect(() => {
    const reportWebVitals = (metric: any) => {
      console.log('metric', metric);
    };

    onCLS(reportWebVitals);
    onLCP(reportWebVitals);
    onINP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, []);

  return null;
};
