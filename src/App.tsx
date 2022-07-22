import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RelatedProducts = React.lazy(() => import('Products/App'));

const App: React.FC = (): JSX.Element => {
  const [isCalled, setIsCalled] = React.useState(false);

  return (
    <div>
      <h1>{`Test`}</h1>
      <button onClick={() => setIsCalled(!isCalled)}>Calling</button>
      {isCalled && (
        <React.Suspense fallback={<div>{`loading...`}</div>}>
          <RelatedProducts />
        </React.Suspense>
      )}
    </div>
  );
};

export default App;
