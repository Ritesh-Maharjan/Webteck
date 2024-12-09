import { servicesData } from './data';
import ServiceCard from '@/app/_component/servicepage/ServiceCard';
import Image from 'next/image';
import Link from 'next/link';
import TextSlider, { defaultTexts } from '@/app/_component/ui/TextSlider';

export default function ServicePage() {
	return (
		<main className='w-full'>
			<section className='hero-section relative h-screen w-full z-0'>
				<Image
					src='/img/service-page/service-hero-bg.png'
					alt='Hero Image'
					fill
					priority //might need to optimize the image for performance so i can remove this WARNING**
					className='object-cover absolute top-0 left-0 w-full h-full z-0'
				/>
				<div className='flex flex-col justify-between h-full'>
					<div className='flex flex-row items-center justify-center h-full max-w-[1300px] mx-auto px-4'>
						<div className='flex flex-col gap-4 text-center'>
							<h3 className='text-xl font-bold text-left relative z-10'>Services</h3>
							<h1 className='text-6xl font-bold text-left relative z-10'>We cultivate trust alongside building websites.</h1>
						</div>
						<div className='mt-4'>
							<h3 className='text-xl font-bold text-left relative z-10'>Our extensive knowledge in design and technology brings forth leading brands and digital journeys.</h3>
						</div>
					</div>
					<div className='relative z-10'>
						<TextSlider texts={defaultTexts} />
					</div>
				</div>
			</section>
			<section className='container gradient-borders mx-auto'>
				<div className='flex flex-wrap gap-4'>
					{servicesData.map((service) => (
						<Link
							href={`/service/${service.id}`}
							key={service.id}
							className='w-full md:w-[calc(33.33%-1rem)]' // adjust width as needed
						>
							<ServiceCard service={service} />
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
