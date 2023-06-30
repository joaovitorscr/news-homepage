import Image from "next/image";

import headerImageDesktop from '../public/images/image-web-3-desktop.jpg'
import card01 from '../public/images/image-retro-pcs.jpg'
import card02 from '../public/images/image-top-laptops.jpg'
import card03 from '../public/images/image-gaming-growth.jpg'

export default function Home() {


  return (
    <div className="bg-offWhite">
      <div className="m-auto max-w-7xl">
        <div className="flex justify-between pt-20 items-center">
          <h1 className="font-bold text-3xl">W.</h1>
          <nav>
            <ul className="flex">
              <li className="mr-11 hover:text-softOrange cursor-pointer">Home</li>
              <li className="mr-11 hover:text-softOrange cursor-pointer">New</li>
              <li className="mr-11 hover:text-softOrange cursor-pointer">Popular</li>
              <li className="mr-11 hover:text-softOrange cursor-pointer">Trending</li>
              <li>Categories</li>
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex">
          <div className="mr-8">
            <Image src={headerImageDesktop} alt="Toys" />
            <div className="flex mt-8">
              <h2 className="text-veryDarkBlue font-extrabold text-6xl mr-16">The Bright Future of Web 3.0?</h2>
              <div>
                <p className="mb-8 text-darkGrayishBlue w-96">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?
                </p>
                <a href="#" className="bg-softRed text-white px-4 py-3 hover:bg-veryDarkBlue">READ MORE</a>
              </div>
            </div>
          </div>
          <div className="bg-veryDarkBlue text-white px-6">
            <h2 className="text-softOrange text-4xl mt-8 font-bold">New</h2>
            <div className="mt-8 border-b border-b-grayishBlue">
              <h3 className="text-xl mb-2 font-bold cursor-pointer hover:text-softOrange">Hydrogen VS Electric Cars</h3>
              <p className="text-md mb-8 text-grayishBlue">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="mt-8 border-b border-b-grayishBlue">
              <h3 className="text-xl mb-2 font-bold cursor-pointer hover:text-softOrange">The Downsides of AI Artistry</h3>
              <p className="text-md mb-8 text-grayishBlue">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl mb-2 font-bold cursor-pointer hover:text-softOrange">Is VC Funding Drying Up?</h3>
              <p className="text-md mb-8 text-grayishBlue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-20 pb-20">
          <div className="flex">
            <div className="mr-8">
              <Image height={200} src={card01} alt="Retro PCs"/>
            </div>
            <div className="mr-2">
              <span className="text-grayishBlue text-2xl font-bold">01</span>
              <h3 className="text-veryDarkBlue font-bold text-lg mt-2 cursor-pointer hover:text-softRed">Reviving Retro PCs</h3>
              <p className="mt-4 text-darkGrayishBlue">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-8">
              <Image height={200} src={card02} alt="Gaming Laptop"/>
            </div>
            <div className="mr-2">
              <span className="text-grayishBlue text-2xl font-bold">02</span>
              <h3 className="text-veryDarkBlue font-bold text-lg mt-2 cursor-pointer hover:text-softRed">Top 10 Laptops of 2022</h3>
              <p className="mt-4 text-darkGrayishBlue">Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-8">
              <Image height={200} src={card03} alt="Dualshock"/>
            </div>
            <div className="mr-2">
              <span className="text-grayishBlue text-2xl font-bold">03</span>
              <h3 className="text-veryDarkBlue font-bold text-lg mt-2 cursor-pointer hover:text-softRed">The Growth of Gaming</h3>
              <p className="mt-4 text-darkGrayishBlue">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
