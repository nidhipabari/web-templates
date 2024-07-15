// import React from 'react'

// const Branding = () => {
//   return (
//     <div>
//         <div className='grid grid-cols-3'>
//             <div>
//                 <h1 className='font-semibold'>Branding</h1>
//                 <p>Etiam maximus, justo ut <br> </br> pellentesque egestas, erat sapien <br></br>mollis massa, nec porta nisl <br></br>quam eu arcu. Donec sit amet  <br></br> congue lectus</p>
//             </div>
//             <div>
//                 <h1 className='font-semibold'>Idea & Concept</h1>
//                 <p>Etiam maximus, justo ut <br> </br> pellentesque egestas, erat sapien <br></br>mollis massa, nec porta nisl <br></br>quam eu arcu. Donec sit amet  <br></br> congue lectus</p>
//             </div>
//             <div>
//                 <h1 className='font-semibold'>Developmet</h1>
//                 <p>Etiam maximus, justo ut <br> </br> pellentesque egestas, erat sapien <br></br>mollis massa, nec porta nisl <br></br>quam eu arcu. Donec sit amet  <br></br> congue lectus</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Branding;

import React from 'react'

const Branding = () => {
  return (
    <div>
        <div className='grid grid-cols-3 px-40 text-center py-10 '>
            <div>
                <h1 className='font-semibold text-xl mb-4'>Branding</h1>
                <p className='text-sm text-[#969697]'>Etiam maximus, justo ut <br></br>pellentesque egestas, erat sapien <br></br> mollis massa, nec porta nisl <br></br> quam eu arcu. Donec sit amet <br></br>congue lectus </p>
            </div>
            <div>
                <h1 className='font-semibold text-xl mb-4'>Idea & Concept</h1>
                <p className='text-sm text-[#969697]'>Etiam maximus, justo ut <br></br>pellentesque egestas, erat sapien <br></br> mollis massa, nec porta nisl <br></br> quam eu arcu. Donec sit amet <br></br>congue lectus </p>
            </div>
            <div>
                <h1 className='font-semibold text-xl mb-4'>Development</h1>
                <p className='text-sm text-[#969697]'>Etiam maximus, justo ut <br></br>pellentesque egestas, erat sapien <br></br> mollis massa, nec porta nisl <br></br> quam eu arcu. Donec sit amet <br></br>congue lectus </p>
            </div>
            
        </div>
    </div>
  )
}

export default Branding