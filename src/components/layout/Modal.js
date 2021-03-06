import React from 'react';
import './foods.css'

const Modal =({food, show, showModal, details})=>{
        return (
          <div>
            <div
              className={show ? "modal d-block" : "modal fade d-none"}
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      onClick={showModal}
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <img src={details.foodimg} alt={details.foodname} />
                    <div>
                      <h3 className="text-center my-3">{details.foodname}</h3>
                      <p>{details.fooddescription}</p>
                    </div>
                    <div className="text-center">#{details.foodprice}</div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={showModal}
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }

export default Modal;