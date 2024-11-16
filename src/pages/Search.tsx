
const Search = () => {
   
  return (
    <div className="row py-4">
      <div className="col-md-6">
      <input type="text"  className="text-white form-control bg-transparent border border-top-0" placeholder="Search By Name"/>
      </div>
      
      <div className="col-md-6">
        <input type="text"   
        className="text-white form-control bg-transparent border border-top-0" placeholder="Search By First Litter"/>
        </div>
    </div>
  )
}

export default Search