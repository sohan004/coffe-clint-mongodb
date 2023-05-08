import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Add = () => {
    const handle = e => {
        e.preventDefault()
        const name = e.target.name.value
        const chef = e.target.chef.value
        const supplier = e.target.supplier.value
        const taste = e.target.taste.value
        const category = e.target.category.value
        const details = e.target.details.value
        const price = e.target.price.value
        const photo = e.target.photo.value

        const coffe = { name, chef, supplier, taste, category, details,price, photo }
        fetch('http://localhost:5000/coffes', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffe)
        })
            .then(res => res.json()).then(d => {
                if(d.insertedId){
                    Swal.fire(
                        'successfully',
                        'coffe add successfully',
                        'success'
                      )
                      e.target.reset()
                }
            })
    }
    return (
        <div className="container">
            <Link to="/"><h3 className="my-4">Back to Home</h3></Link>
            <div style={{ backgroundColor: 'rgb(228, 228, 228)' }} className="p-4">
                <h3 className="fw-bolder text-center" >Add New Coffee</h3>
                <p className=" text-center my-3" >It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handle} action="">
                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <div>
                                <h5>Name</h5>
                                <input required type="text" name="name" className="border-0 p-2 w-100 rounded" placeholder="enter coffe name" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <h5>chef</h5>
                                <input required type="text" name="chef" className="border-0 p-2 w-100 rounded" placeholder="enter coffe chef" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <h5>Supplier</h5>
                                <input required type="text" name="supplier" className="border-0 p-2 w-100 rounded" placeholder="enter coffe supplier" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <h5>Taste</h5>
                                <input required type="text" name="taste" className="border-0 p-2 w-100 rounded" placeholder="enter coffe Taste" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <h5>Category</h5>
                                <input required type="text" name="category" className="border-0 p-2 w-100 rounded" placeholder="enter coffe category" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <h5>Details</h5>
                                <input required type="text" name="details" className="border-0 p-2 w-100 rounded" placeholder="enter coffe details" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <h5>coffe price</h5>
                                <input required type="text" name="price" className="border-0 p-2 w-100 rounded" placeholder="enter coffe price" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div>
                                <h5>coffe Photo url</h5>
                                <input required type="text" name="photo" className="border-0 p-2 w-100 rounded" placeholder="enter coffe photo url" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" className="w-100 p-2 rounded border-0 mt-4 addcoffe" value="submit" />
                </form>
            </div>

        </div>
    );
};

export default Add;