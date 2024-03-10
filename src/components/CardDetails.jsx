import React from 'react'

export default function CardDetails(props)
 {
    const crd = [
        {
          id: 1001,
          cardname: "Marriage card",
          cardimg:
            "https://happyinvites.co/wp-content/uploads/2023/03/Sikh-Anand-Karaj-Invitation-Card__1_00525.jpg",
        },
    
        {
          id: 1002,
          cardname: "Marriage card",
          cardimg:
            "https://happyinvites.co/wp-content/uploads/2023/03/Sikh-Anand-Karaj-Invitation-Card__1_00525.jpg",
        },
    
        {
          id: 1002,
          cardname: "Marriage card",
          cardimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBae4TYB30k0T5WW4o4TxsBAUoFXyUeEbJQA&usqp=CAU",
        },
    
        {
          id: 1003,
          cardname: "Birthday card",
          cardimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBae4TYB30k0T5WW4o4TxsBAUoFXyUeEbJQA&usqp=CAU",
        },
    
        {
          id: 1004,
          cardname: "Roka card",
          cardimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBae4TYB30k0T5WW4o4TxsBAUoFXyUeEbJQA&usqp=CAU",
        },
      ];
  return (
    <>
     <div className="container p-3 mt-5 ms-4">
        <h2 className='text-center text-danger '>Card details load via Props</h2>
        <div className="row">
          {crd.map((item) => {
            return (
              <>
                <div className="col-sm-4 mt-4">
                  <div className="card">
                    <div className="card-body">
                      <img src={item.cardimg} alt="crdimg" className="img-fluid" />
                      <h2 className="fs-5 mt-3">Card Name :{item.cardname} </h2>
                      <h2>
                        {" "}
                        <a className="btn btn-sm btn-dark bg-dark text-white">
                          Book Now{" "}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  )
}
