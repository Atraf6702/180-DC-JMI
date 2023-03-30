import React from 'react'
import wsj from "./wsj.png"
import bloom from "./bloomberg.png"
import forbe from "./forbes.png"
import hbr from "./hbr.png"
import ft from "./ft.png"
import mint from "./mint.png"
import team from "./team.png"

export default function Body() {
  return (
    <div class="bg-[#9EC74F]">
      <h1 class="text-lg">Our clients encompass both international and national organisations, that are looking to make change in their respective fields.</h1>
     <div>
     <img src={wsj} alt="wsj" />
     <img src={bloom} alt="bloom" />
     <img src={forbe} alt="forbe" />
     <img src={hbr} alt="hbr" />
     <img src={ft} alt="ft" />
     <img src={mint} alt="mint" />
     </div>
     <img src={team} alt="team" />
    <div>
    <p class="text-xl">The dreamers. The believers. The achievers. The ones who make it all happen. The 180DC Team of Jamia Millia Islamia.</p>
    <button>The Team</button>
    </div>
    <div>
    <p>You’ve scrolled this far. Let’s make it official.</p>
    <button>Sign Up</button>
    </div>
   </div> 
  )
}
