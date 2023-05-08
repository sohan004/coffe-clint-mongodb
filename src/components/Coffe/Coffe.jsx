import Swal from "sweetalert2";


const Coffe = (props) => {
    const { _id, name, chef, details, price, photo } = props.d
    const delet = i => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffes/${i}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(d => {
                        if (d.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )

                            const afterDelet = props.data.filter(f => f._id != i)
                            props.setData(afterDelet)
                        }
                    })
            }
        })
    }
    return (
        <>
            <div className="col-12 col-md-6">
                <div style={{ backgroundColor: 'rgb(228, 228, 228)' }} className="p-4 rounded h-100">
                    <div className="d-flex align-items-center">
                        <div className="w-50">
                            <img style={{ width: '8rem', height: '10rem' }} src={photo} alt="" className="img-fluid" />
                        </div>
                        <div className="w-50">
                            <h5>Name: <span className="text-secondary">{name}</span></h5>
                            <h5>Chef: <span className="text-secondary">{chef}</span></h5>
                            <h5>Price: <span className="text-secondary">${price}</span></h5>
                            <h5>Details: <span className="text-secondary">{details}</span></h5>
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={() => delet(_id)} className="btn btn-danger me-3 z-3">Delete</button>
                        <button className="btn btn-info">Edit</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Coffe;