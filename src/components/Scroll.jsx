import { assets } from "../assets/assets"


const Scroll = () => {
  return (
    <div>
  
<div className="flex p-4 overflow-hidden space-x-16 group">
  <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
  
    <img loading="lazy" src={assets.scalpel} className="w-20" alt="Image 1" />
   
    <img loading = "lazy" src = {assets.lip1} className      = "w-20" alt = "Image 1" />
    <img loading = "lazy" src = {assets.hip} className       = "w-20" alt = "Image 1" />
    <img loading = "lazy" src = {assets.lipo} className      = "w-20" alt = "Image 1" />
    <img loading = "lazy" src = {assets.lip2} className      = "w-20" alt = "Image 1" />
    <img loading = "lazy" src = {assets.eye1} className      = "w-20" alt = "Image 1" />
    <img loading = "lazy" src = {assets.botox} className     = "w-20" alt = "Image 1" />
    <img loading = "lazy" src = {assets.breast1} className   = "w-20" alt = "Image 1" />
    <img loading = "lazy" src = {assets.nose} className      = "w-20" alt = "Image 1" />
          <img loading="lazy" src={assets.thighlift} className="w-20" alt="Image 1" />
          <img loading = "lazy" src = {assets.lip2} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.eye2} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.breast2} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.face} className = "w-20" alt = "Image 1" />
  </div>
  {/* <div className = "flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden = "true">
  <img loading="lazy" src={assets.scalpel} className="w-20" alt="Image 1" />
   <img loading = "lazy" src = {assets.lip2} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.eye2} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.breast2} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.face} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.lipo} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.chin} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.hip} className = "w-20" alt = "Image 1" />
   <img loading = "lazy" src = {assets.armlift} className = "w-20" alt = "Image 1" />

  </div> */}
</div> 
    </div>
  )
}

export default Scroll
