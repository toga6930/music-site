

export default function Home() {

  return (
    <div className="flex relative bg-background justify-between font-raleway items-center min-h-screen ">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Music <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover music using the Shazam API from RapidAPI Hub.
			</h2>
			<div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
					placeholder="Search for a song or an artist"
					
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10">
						Search
					</button>
				</div>
			</div>
		</div>
  )
}
