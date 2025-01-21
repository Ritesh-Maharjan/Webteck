"use client"
import React, { Suspense } from 'react'
import Header from '../Header'
// import { usePathname } from "next/navigation";

const HeaderContent = (): JSX.Element => {
	// const pathname = usePathname();
	
	// const shouldShowHeader = ['/blog/', '/docs/', '/'].some(path => 
	// 	pathname.startsWith(path)
	// );

	return <Header />;
}

export const HeaderWrapper = (): JSX.Element => {
	return (
		<Suspense fallback={<Header />}>
			<HeaderContent />
		</Suspense>
	);
}
