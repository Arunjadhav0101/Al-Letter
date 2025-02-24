import { Card } from "./ui/card";

function Details() {
    return (
       <div className="flex flex-row items-center justify-center gap-10  bg-gray-100 p-6 ">
        <Card className="text-xl font-semibold text-gray-700">
        <h3>Business Letters</h3>
  <p className="text-gray-600 mt-2">Create formal and professional business letters with ease.</p>
        </Card>
        <Card>
        <h3 className="text-xl font-semibold text-gray-700">Personal Letters</h3>
  <p className="text-gray-600 mt-2">Write heartfelt personal letters for any occasion.</p>
        </Card>
        <Card> <h3 className="text-xl font-semibold text-gray-700">Cover Letters</h3>
  <p className="text-gray-600 mt-2">Generate compelling cover letters for job applications.</p></Card>
        <Card>
        <h3 className="text-xl font-semibold text-gray-700">Recommendation Letters</h3>
  <p className="text-gray-600 mt-2">Easily draft recommendation letters for any purpose.</p>
        </Card>
       </div>
    )
}
export default Details
{/* <div >
<div className="bg-white p-6 rounded-lg shadow-md text-center">
 
</div>
<div className="bg-white p-6 rounded-lg shadow-md text-center">

</div>
<div className="bg-white p-6 rounded-lg shadow-md text-center">
 
</div>
<div className="bg-white p-6 rounded-lg shadow-md text-center">
  
</div>
</div> */}