import {useEffect} from 'react'

function Text(props) {
   useEffect(()=>{
      document.title="text mount"
    },[])
    
  return (
    <div>
        <h3>Text Component</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, vero? Eius fugit voluptatum praesentium magni iusto quo quibusdam pariatur numquam delectus, in quia natus ratione enim esse! Quibusdam sequi praesentium libero repudiandae illum sint blanditiis esse iusto iste nam. Dignissimos porro ducimus sed libero cum, voluptatibus mollitia tempora aperiam impedit.</p>
        </div>
  )
}
export default Text