export const Shimmer = ()=>{
  return (
  <div className="shimmer-container">
  {[...Array(20).keys()].map(key => <div className="shimmer-card"  key={key}></div>)}
  </div>)
}

