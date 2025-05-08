// filepath: src/custom.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

// filepath: src/custom.d.ts
declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}