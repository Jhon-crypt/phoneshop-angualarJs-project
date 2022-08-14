app.directive("header", 

    function(){

        return{

            template:

            `
            <nav class="navbar navbar-expand-sm fixed-top mb-3 h-10" style="background-color:#f99db2;">

                <div class="container">
                    <a class="navbar-brand" href="#">
                        <b><i class="fa fa-mobile-phone text-light"></i> <span class="text-light">Phone</span><font color="#62cef5" 
                        >shop</font></b>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-navicon text-light"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample03">

                        <ul class="navbar-nav me-auto mb-2 mb-sm-0 text-center">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">

                                    <i class="fa fa-android"></i> Androids
                                    
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">
                                
                                    <i class="fa fa-apple"></i> Iphones
                                    
                                </a>
                            </li>
            
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">
                                
                                    <i class="fa fa-headphones"></i> Headsets
                                    
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">
                                
                                    <i class="fa fa-plug"></i> Chargers
                                    
                                </a>
                            </li>
                            
                        </ul>

                        <form>
                            <input class="form-control" type="text" placeholder="Search accessories" aria-label="Search">
                        </form>

                    </div>

                </div>

            </nav>
            
            `

        }

    }

);