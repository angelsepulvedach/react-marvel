import React from 'react';

const Error404 = () => {
    return(
        <div className="container-layout align-content-center text-center">
            <div className="row">
             <div className="col-md-12">
                 <h1 className="pt-1 mt-5">404</h1>
                 <h3 className="pt-3 mb-5">Pagina web No Encontrada</h3>
                 <img
                     alt=""
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
                     width="400"
                     height="200"
                     className="d-inline-block align-top m-5 img-thumbnail"
                 />
             </div>
            </div>
        </div>
    )
};

export  default Error404;