// components/MDXLayout.js
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props) => <h1 style={{ color: 'blue' }} {...props} />,
  p: (props) => <p style={{ fontSize: '18px' }} {...props} />,
  Image: (props) => <img style={{ maxWidth: '100%' }} {...props} />,
};

const MDXLayout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div>
        {children}
      </div>
    </MDXProvider>
  );
};

export default MDXLayout;
