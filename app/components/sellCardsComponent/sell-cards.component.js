app.directive("sellCards", 

    function(){

        return {

            template : 
            `
            <div class="mb-5">   
            
                <ul class="nav justify-content-center">

                    <li class="nav-item" ng-repeat="c in cards">
                    
                        <a class="nav-link text-dark">
                        
                            <div class="card" style="width:300px;background-color:{{ c.bg }}">

                                <img class="card-image-top" src="{{ c.image }}">

                                <div class="card-body">

                                    <h4>{{ c.content }}</h4>

                                    <p class="card-text">Test test test</p>

                                </div>
    
                            </div>
                        
                        </a>
                    
                    </li>

                </ul>
            
            </div>
            
            `

        }

    }

);