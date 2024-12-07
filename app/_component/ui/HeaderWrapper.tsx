"use client"
import React from 'react'
import Header from '../Header'
import { usePathname } from "next/navigation";

export const HeaderWrapper = () => {
	const pathname = usePathname();
	
	// Check if pathname starts with any of these paths
	const shouldShowHeader = ['/blog/', '/docs/', '/'].some(path => 
		pathname.startsWith(path)
	);

	return (
		<>
			<Header isVisible={shouldShowHeader} />
		</>
	)
}
