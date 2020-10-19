import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import generateRoutes from 'shared/generateRoutes';
import Header from 'components/Header'

function App() {
	return (
		<BrowserRouter>
			<Header/>
			<Suspense fallback={() => <h5>Loading...</h5>}>
				{generateRoutes()}
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
