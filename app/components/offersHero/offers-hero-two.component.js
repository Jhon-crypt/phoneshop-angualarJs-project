app.directive("offersHeroTwo", 

    function(){

        return {

            template : 
            `
            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" 
                style="background-color:#62cef5;">

                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">

                        <h1 class="display-4 fw-bold lh-1 text-light">Amazing mobile utilities and tools of all brands</h1>
                        <p class="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate 
                            nisi possimus expedita itaque asperiores est vel nemo vero, a illum, dolor voluptatibus 
                            nostrum quis dicta quisquam tempora recusandae ipsam?.
                        </p>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" class="btn btn-md btn-lg px-4 me-md-2 fw-bold text-light" 
                            style="background-color:#f99db2;">
                                Explore now
                            </button>
                        </div>

                    </div>

                    <div class="col-lg-4 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src="public/images/image2.jpg" alt="" width="720">
                    </div>

                </div>

            </div>
            
            `

        }

    }

);