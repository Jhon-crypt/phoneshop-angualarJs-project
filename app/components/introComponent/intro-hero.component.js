app.directive("introHero", 

    function(){

        return{

            template : 

            `
            <div class="mb-5 pt-5" style="background-color:#62cef5;">

            <div class="container col-xxl-8 px-4 py-3">

                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">

                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="public/images/istockphoto-1034427464-612x612.jpg" 
                        class="d-block mx-lg-auto img-fluid shadow" alt="Bootstrap Themes" 
                        width="700" height="500" loading="lazy" style="
                        border-radius:30% 70% 70% 60% / 40% 40% 90% 90%;">
                    </div>

                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3 text-light">Buy, Shop And 
                            Explore Mobile Devices From <font color="#f99db2">Phone</font> 
                            <font color="#00aaf4">Shop</font>
                        </h1>
                        <p class="lead">Welcome to the best platform to get all your mobile devices
                        accessories, ranging from phone cases, headsets, airpods, android phones and
                        ios devices and chargers, Explore them in styles, colors and shit, i don't know
                        what to write again, Am very bad in content wrirting, just check out my design.
                        </p>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-md btn-lg px-4 me-md-2 text-light" 
                            style="background-color:#00AAF4;">
                                Explore more
                            </button>
                            <button type="button" class="btn btn-md btn-lg px-4 me-md-2 text-light" 
                            style="background-color:#f99db2;">
                                Learn more
                            </button>
                        </div>

                    </div>

                </div>

            </div>

            </div>

            `

        }

    }

);