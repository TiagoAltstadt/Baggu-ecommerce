import React from 'react';
// import Table from "./Table";

function TableContainer(props) {
    return ( 
        <React.Fragment>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800"> All the Products </h1>
        </div>

        <div className="row">
            <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-body">
                        {/* <Table /> */}
                    </div>
                </div>	
            </div>
        </div>

        </React.Fragment>

    );
}

export default TableContainer;